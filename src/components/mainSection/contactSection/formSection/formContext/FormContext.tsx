import { createContext, useContext, useState, useEffect } from "react"
import styles from "./FormContext.module.scss"

interface FormContextPorps {
    children: React.ReactNode;
}

interface FormContextType {
    isSubmitModalOpen: boolean;
    submitSuccess: boolean;
    submitFailed: boolean;
    openSuccessModal: () => void;
    openFailedModal: () => void;
    closeSubmitModal: () => void;
  }
  
  const defaultContextValue: FormContextType = {
    isSubmitModalOpen: false,
    submitSuccess: false,
    submitFailed: false,
    openSuccessModal: () => {},
    openFailedModal: () => {},
    closeSubmitModal: () => {},
  };

const submitModalContext = createContext<FormContextType>(defaultContextValue);

export const FormContext = ({children}: FormContextPorps) => {

    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);

    useEffect(() => {
            const openSuccessModal = () => {
            setIsSubmitModalOpen(true);
            setSubmitSuccess(true);
            document.body.classList.add(styles.bodyFixed);
        }

        const openFailedModal = () => {
            setIsSubmitModalOpen(true);
            setSubmitFailed(true);
            document.body.classList.add(styles.bodyFixed);
        }

        const closeSubmitModal = () => {
            setIsSubmitModalOpen(false);
            setSubmitSuccess(false);
            setSubmitFailed(false);
            document.body.classList.remove(styles.FormHooks_bodyFixed__c3OA1);
        }
    },[])

  return (
    <submitModalContext.Provider value={{ isSubmitModalOpen, submitSuccess, submitFailed,
        openSuccessModal, openFailedModal, closeSubmitModal
     }}>
      {children}
    </submitModalContext.Provider>
  );
}

export const useModal = () => {
    return useContext(submitModalContext);
};