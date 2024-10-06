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

    const onSubmit = (formvalue: FormValues) =>{
        console.log(formvalue)
    }
    
    return {
        ...form,
        handleSubmit: form.handleSubmit(onSubmit),
      };
}


