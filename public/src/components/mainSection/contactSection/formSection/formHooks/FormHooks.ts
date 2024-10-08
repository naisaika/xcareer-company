import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../../../../../lib/formSchema";
import { z } from "zod";

type FormValues = z.infer<typeof formSchema>;

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


    const onSubmit = async (formvalue: FormValues) => {
        try {
            const response = await fetch("/api/contact", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formvalue),
            });
    
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
            console.log(data); 

        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);

        }
    };
    
    return {
        ...form,
        handleSubmit: form.handleSubmit(onSubmit),
      };
}


