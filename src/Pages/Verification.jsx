import { useState, useEffect } from "react";
import FileUpload from "../Components/FileUpload"; // Assuming FileUpload is a component to handle file input
import Footer from "../Pages/Footer";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth, storage, db } from "../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Verification = () => {
  const [user, setUser] = useState(null);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idVerified, setIdVerified] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        checkIdVerificationStatus(currentUser.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const emailVerify = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success("Verification email sent");
    } catch {
      toast.error("Error sending verification email");
    }
  };

  const handleFrontView = (event) => {
    if (event.target.files[0]) {
      setFrontImage(event.target.files[0]);
    }
  };

  const handleBackView = (event) => {
    if (event.target.files[0]) {
      setBackImage(event.target.files[0]);
    }
  };

  const uploadImage = async (file, userId, fileName) => {
    const storageRef = ref(storage, `ID-images/${userId}/${fileName}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!frontImage || !backImage) {
      toast.error("Please upload both front and back view images.");
      return;
    }
    setLoading(true);
    try {
      const userId = user.uid;
      const frontImageUrl = await uploadImage(
        frontImage,
        userId,
        "front_view.jpg"
      );
      const backImageUrl = await uploadImage(
        backImage,
        userId,
        "back_view.jpg"
      );

      const userDocRef = doc(db, "Users", userId);
      await setDoc(
        userDocRef,
        {
          frontViewUrl: frontImageUrl,
          backViewUrl: backImageUrl,
        },
        { merge: true }
      );

      toast.success("Images uploaded and URLs saved successfully.");
      setIdVerified(true); // Set ID verified to true
    } catch (error) {
      toast.error("Error saving images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const checkIdVerificationStatus = async (userId) => {
    const userDocRef = doc(db, "Users", userId);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.frontViewUrl && data.backViewUrl) {
        setIdVerified(true);
      }
    }
  };

  return (
    <section className="bg-[#f4f7fe]">
      <div className="flex flex-wrap bg-[#f4f7fe]">
        <div className="px-[35px] lg:w-[60%] mt-[30px] mb-[30px]">
          <div className="bg-[#fff] rounded-lg shadow-outline-white shadow-md border">
            <div className="text-[20px] leading-[30px] px-[35px] py-[15px] font-semibold">
              <h4>Verification Status</h4>
            </div>
            <div className="p-[30px] grid gap-[12px]">
              <div className="flex space-x-2">
                <p className="text-[22px] mx-[10px]">Email :</p>
                {user?.emailVerified ? (
                  <div className="flex justify-center bg-[green] text-[12px] w-[90px] rounded-3xl p-[8px] text-[#fff]">
                    <strong>verified</strong>
                  </div>
                ) : (
                  <button
                    onClick={emailVerify}
                    type="button"
                    className="text-center text-[18px] rounded-xl py-[6px] px-[12px] border-2"
                  >
                    verify
                  </button>
                )}
              </div>
              <div>
                <div className="flex space-x-2 mb-4">
                  <p className="text-[24px]">Verify Id :</p>
                  <div
                    className={`bg-[${
                      idVerified ? "green" : "red"
                    }] text-[12px] text-center w-[90px] rounded-xl p-[8px] border-2`}
                  >
                    <strong>{idVerified ? "verified" : "Not verified"}</strong>
                  </div>
                </div>
                <p>
                  {idVerified
                    ? "Your identity is verified."
                    : "Your identity is not verified. To verify your account, please upload a valid government issued Id to request verification."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[15px] w-full ml-[38px] lg:w-[70%] bg-[#fff] rounded-lg shadow-outline-white shadow-md border my-[30px] lg:mr-[30px]">
          <div>
            <div className="w-full text-[20px] leading-[30px] px-[30px] py-[15px] font-semibold">
              <h4>Submit Verification</h4>
            </div>
            <div className="p-[30px]">
              <div>
                <h6 className="mb-[16px] text-[16px]">
                  The document should clearly show the following
                </h6>
                <div className="flex flex-wrap">
                  <div className="px-[15px] w-full lg:w-1/2">
                    <p className="mt-0 mb-[16px]">
                      <small>
                        <span>*</span>
                        Full name
                      </small>
                      <br />
                      <small>
                        <span>*</span>
                        Date of birth
                      </small>
                      <br />
                      <small>
                        <span>*</span>
                        Photo
                      </small>
                      <br />
                    </p>
                  </div>
                  <div className="px-[15px] w-full lg:w-1/2">
                    <p>
                      <small>
                        <span>*</span>
                        Expiry date
                      </small>
                      <br />
                      <small>
                        <span>*</span>
                        Document number
                      </small>
                      <br />
                      <small>
                        <span>*</span>
                        Your signature
                      </small>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="my-[45px] px-[15px] w-full lg:w-1/2">
                  <div className="space-y-4">
                    <h6>Front View</h6>
                    <p className="mb-[3px]">
                      <small>Upload the front view of the document</small>
                    </p>
                    <div>
                      <FileUpload handleFileChange={handleFrontView} />
                    </div>
                  </div>
                </div>
                <div className="my-[45px] px-[15px] w-full lg:w-1/2">
                  <div className="space-y-4">
                    <h6>Back View</h6>
                    <p className="mb-[3px]">
                      <small>Upload the back view of the document</small>
                    </p>
                    <div>
                      <FileUpload handleFileChange={handleBackView} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#3454f5] hover:bg-[#405deb8b] text-[14px] text-[#fff] rounded-[8px] px-[20px] py-[10px]"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Verification;
