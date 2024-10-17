"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../../../../lib/formSchema";
import { z } from "zod";
import { FORM } from "@/data/data";
import styles from "./FormSection.module.scss"
import { useState } from "react";
import { PrivacyPolicyModal } from "@/components/modal/privacyPolicy/PrivacyPolicyModal";
import { SubmitModal } from "@/components/modal/submit/SubmitModal";

type FormValues = z.infer<typeof formSchema>;

export const FormSection = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyname: "",
      sendername: "",
      position: "",
      email: "",
      tel: "",
      content: "",
    }
  });

  const [isPripoliModalOpen, setIsPripoliModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubtmiModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openPripoliModal = () => {
    setIsPripoliModalOpen(!isPripoliModalOpen);
    document.body.classList.add(styles.bodyFixed);
  }

  const closePripoliModal = () => {
    setIsPripoliModalOpen(!isPripoliModalOpen);
    document.body.classList.remove(styles.bodyFixed);
  }

  const closeSubmitModal = () => {
    setIsSubtmiModalOpen(!isSubmitModalOpen);
    document.body.classList.remove(styles.bodyFixed);
  }

  const onSubmit = async (formvalue: FormValues) => {
    setIsLoading(true);
  
    try {
      const response = await fetch("https://www-dev.factorx.jp/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formvalue),
      });
  
      if (!response.ok) {
        setSubmitSuccess(false);
        setSubmitFailed(true);
        document.body.classList.add(styles.bodyFixed);
        throw new Error("通信エラーです。時間をおいて再度お試しください。");
      }
  
      // const data = await response.json();
      setSubmitSuccess(true);
      setSubmitFailed(false);
      document.body.classList.add(styles.bodyFixed);
      reset();
  
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitFailed(true);
      document.body.classList.add(styles.bodyFixed);
      console.error("送信失敗しました:", error);
      
    } finally {
      setIsLoading(false); 
      setIsSubtmiModalOpen(true); 
    }
  };

  return (
    <div className={styles.formSection}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCont}>
        {FORM.map((form) => {
          return (
            <div className={styles.inputCont} key={form.id}>
              {form.isTextarea? (
                <label htmlFor={form.id} className={styles.label}>
                  <div className={styles.labelTextarea}>
                    <span className={styles.labelText}>{form.label}</span>
                    <span className={styles.labelText2}>{form.label2}</span>
                  </div>
                  <span className={styles.required}>必須</span>
                </label>
              ): (
                <label htmlFor={form.id} className={styles.label}>
                  <span className={styles.labelText}>{form.label}</span>
                  <span className={styles.required}>必須</span>
                </label>
              )}
    
              {form.isTextarea ? (
                <textarea placeholder={form.placeholder} id={form.id} {...register(form.register)} className={styles.textarea}/>
              ) : (
                <input type="text" placeholder={form.placeholder} id={form.id} autoComplete={form.autoComplete} {...register(form.register)} className={styles.input}/>
              )}
              {errors[form.register] && <p className={styles.errorMsg}>{errors[form.register]?.message}</p>}
            </div>
          )
        })}
        <div className={styles.pripoliCont}>
          <button type="button" className={styles.pripoliClick} onClick={openPripoliModal}>プライバシーポリシー</button>
          <span className={styles.pripoliText}>をご確認の上お問い合わせください。</span>
          <PrivacyPolicyModal onClick={closePripoliModal} modalCondition={isPripoliModalOpen}/>
        </div>
        <button type="submit" className={`${styles.submitBtn} ${isLoading? styles.submitting: ""}`} disabled={isLoading}>
          {isLoading? "送信中です…" : "プライバシーポリシーに同意の上、送信" }</button>
      </form>
      <SubmitModal onClick={closeSubmitModal} modalCondition={isSubmitModalOpen} success={submitSuccess} failed={submitFailed}/>
    </div>
)}