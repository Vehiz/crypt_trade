import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAccount = () => {
    setIsAccountOpen(true);
  };
  const closeAccount = () => {
    setIsAccountOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isAccountOpen,
        isModalOpen,
        openAccount,
        closeAccount,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
