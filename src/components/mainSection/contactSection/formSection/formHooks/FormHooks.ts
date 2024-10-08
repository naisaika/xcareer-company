import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../../../../../lib/formSchema";
import { z } from "zod";
// import styles from "./FormHooks.module.scss"
import { useModal } from "../formContext/FormContext";

type FormValues = z.infer<typeof formSchema>;
// interface SubmitStatus {
//     setIsSubtmiModalOpen: (value: boolean) => void;
//     setSubmitSuccess: (value: boolean) => void;
//     setSubmitFailed: (value: boolean) => void;
// }

export const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema), defaultValues: {
            companyname: "",
            sendername: "",
            position: "",
            email: "",
            tel: "",
            content: "",
        }
    });

    const {openSuccessModal, openFailedModal} = useModal();

    const onSubmit = async (formvalue: FormValues) => {
        try {
            const response = await fetch("/api/apiTest", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formvalue),
            });
    
            if (!response.ok) {
                openFailedModal();
                // setIsSubtmiModalOpen(true);
                // setSubmitFailed(true);
                // document.body.classList.add(styles.bodyFixed);
                throw new Error("通信エラーです。時間をおいて再度お試しください。");
            }
    
            // const data = await response.json();
            // setIsSubtmiModalOpen(true);
            // setSubmitSuccess(true);
            // document.body.classList.add(styles.bodyFixed);
            openSuccessModal();

        } catch (error) {
            console.error("送信失敗しました:", error);
            openFailedModal();
            // setIsSubtmiModalOpen(true);
            // setSubmitFailed(true);
            // document.body.classList.add(styles.bodyFixed);
        }
    };
    
    return {
        ...form,
        handleSubmit: form.handleSubmit(onSubmit),
      };
}


