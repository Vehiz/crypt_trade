import { useState } from "react";
import { doc, getDoc} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import MarketView from "../Widgets/MarketView";
import WidgetTicker from "../Widgets/WidgetTicker";
import Footer from "./Footer";
// import PreLoader from "../Components/PreLoader";

const Dashboard = () => {
  const total = parseFloat(sessionStorage.getItem("totalAmount")) || 0; 
  const [user, setUser] = useState({}); // Add this line

  auth.onAuthStateChanged(async (user) => {
    const docRef = doc(db, "Users", user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  });
  const profit = parseFloat(user.profit) || 0;
  const totalSum = total + profit; // Calculate the sum
  return (
    <section className="bg-[#f4f7fe] w-full">
      <div className="flex flex-wrap flex-grow justify-between text-gray-600 mx-[30px]">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-[15px] text-[14px] font-[400]">
          <div className="mt-[25px] bg-[#fff] mb-[30px] rounded-lg shadow-outline-white shadow-md">
            <div className="block p-[30px]">
              <div>
                <span>
                  <canvas
                    width="77"
                    height="43"
                    className="inline-block w-[77px] h-[43px] float-right mr-[10px]"
                  ></canvas>
                </span>
              </div>
              <h3 className="text-[30px] font-semibold">${total.toFixed(2)}</h3>
              <div className="text-gray-700 text-opacity-50">Deposit</div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-[15px] text-[14px] font-[400]">
          <div className="mt-[25px] bg-[#fff] mb-[30px] rounded-lg shadow-outline-white shadow-md">
            <div className="block p-[30px]">
              <div>
                <span>
                  <canvas
                    width="77"
                    height="43"
                    className="inline-block w-[77px] h-[43px] float-right mr-[10px]"
                  ></canvas>
                </span>
              </div>
              <h3 className="text-[30px] font-semibold">${profit.toFixed(2)}</h3>
              <div className="text-gray-700 text-opacity-50">Account Profit</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-[15px] text-[14px] font-[400]">
          <div className="mt-[25px] bg-[#fff] mb-[30px] rounded-lg shadow-outline-white shadow-md">
            <div className="block p-[30px]">
              <div>
                <span>
                  <canvas
                    width="77"
                    height="43"
                    className="inline-block w-[77px] h-[43px] float-right mr-[10px]"
                  ></canvas>
                </span>
              </div>
              <h3 className="text-[30px] font-semibold">${totalSum.toFixed(2)}</h3>
              <div className="text-gray-700 text-opacity-50">Total Sum</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <WidgetTicker />
        <MarketView />
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;
