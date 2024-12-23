import { z } from "zod";

export const formSchema = z.object({
    companyname: z
        .string()
        .min(1, { message: "貴社名は、入力必須です。" })
        .max(50, {message: "貴社名は、50文字以下で入力してください。"})
        .superRefine((val, ctx) => {
            if (val.length > 0 && val.length < 3) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "貴社名は、3文字以上の入力が必要です。",
                });
            }
        }),
        // .regex(
        //     /^[^\x20-\x7E]+$/,
        //     {message: "貴社名は、ひらがな、カタカナ、漢字、または英文字（全角）で入力してください。"}),
    sendername: z
        .string()
        .min(1, { message: "ご担当者名は、入力必須です。" })
        .max(50, {message:"ご担当者名は、50文字以内で入力してください。"})
        .regex(
            /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF21-\uFF3A\uFF41-\uFF5Aa-zA-Z]+$/,
            {message: "ご担当者名は、ひらがな、カタカナ、漢字、または英文字で入力してください。"})
        .superRefine((val, ctx) => {
            if (val.length > 0 && val.length < 3) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "ご担当者名は、2文字以上の入力が必要です。",
                });
            }
        }),
    position: z        
        .string()
        .min(1, { message: "部署名・役職名は、入力必須です。" }),
    email: z
        .string()
        .min(1, { message: "メールアドレスは、入力必須です。" })
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            {message: "正しいメールアドレスの形式で入力をしてください。"}),
    tel: z
        .string()
        .min(1, { message: "電話番号は、入力必須です。" })
        .regex(
            /^\d{10,11}$/,
            {message: "正しい電話番号を入力してください。"}),
    content: z
        .string()
        .min(1, { message: "お問い合わせ内容は、入力必須です。" })
        .max(1000, {message: "1000文字以下で入力してください。"})
})

