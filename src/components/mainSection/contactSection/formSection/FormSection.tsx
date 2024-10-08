"use client";

import { FORM } from "@/data/data";
import styles from "./FormSection.module.scss"
import { ContactForm } from "./formHooks/FormHooks"
import { useState } from "react";
import { PrivacyPolicyModal } from "@/components/modal/privacyPolicy/PrivacyPolicyModal";
import { SubmitModal } from "@/components/modal/submit/SubmitModal";
import { useModal } from "./formContext/FormContext";

export const FormSection = () => {
  const {isSubmitModalOpen, submitSuccess, submitFailed, closeSubmitModal} = useModal();
  const [isPripoliModalOpen, setIsPripoliModalOpen] = useState(false);
  // const [isSubmitModalOpen, setIsSubtmiModalOpen] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(false);
  // const [submitFailed, setSubmitFailed] = useState(false);
  const { register, handleSubmit, formState: { errors } } = ContactForm();


  const openPripoliModal = () => {
    setIsPripoliModalOpen(!isPripoliModalOpen);
    document.body.classList.add(styles.bodyFixed);
  }

  const closePripoliModal = () => {
    setIsPripoliModalOpen(!isPripoliModalOpen);
    document.body.classList.remove(styles.bodyFixed);
  }
  closeSubmitModal();

  // const closeSubmitModal = () => {
  //   setIsSubtmiModalOpen(false);
  //   setSubmitSuccess(false);
  //   setSubmitFailed(false);
  //   document.body.classList.remove(styles.FormHooks_bodyFixed__c3OA1);
  // }

  return (
    <div className={styles.formSection}>
      <form onSubmit={handleSubmit} className={styles.formCont}>
        {FORM.map((form) => {
          return (
            <div className={styles.inputCont} key={form.id}>
              {form.isTextarea? (
                <label htmlFor={form.id} className={styles.label}>
                  <div className={styles.labelTextarea}>
                    <span className={styles.labelText}>{form.label}</span>
                    <span className={styles.labelText}>{form.label2}</span>
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
        <button type="submit" className={styles.submitBtn}>プライバシーポリシーに同意の上、送信</button>
      </form>
      <SubmitModal onClick={closeSubmitModal} modalCondition={isSubmitModalOpen} 
        success={submitSuccess} failed={submitFailed}/>
    </div>
)}