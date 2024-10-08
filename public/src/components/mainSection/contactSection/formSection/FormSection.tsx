"use client";

import { FORM } from "@/data/data";
import styles from "./FormSection.module.scss"
import { ContactForm } from "./formHooks/FormHooks"
import { useState } from "react";
import { PrivacyPolicyModal } from "@/components/modal/privacyPolicy/PrivacyPolicyModal";
import { SubmitModal } from "@/components/modal/submit/SubmitModal";

export const FormSection = () => {
  const { register, handleSubmit, formState: { errors } } = ContactForm();
  const [isPripoliModalOpen, setIsPripoliModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubtmiModalOpen] = useState(false);

  const openPripoliModal = () => {
    setIsPripoliModalOpen(!isPripoliModalOpen);
    document.body.classList.add(styles.bodyFixed);
  }

  const closePripoliModal = () => {
    setIsPripoliModalOpen(!isPripoliModalOpen);
    document.body.classList.remove(styles.bodyFixed);
  }

  const openSubmitModal = () => {
    setIsSubtmiModalOpen(!isSubmitModalOpen);
    document.body.classList.add(styles.bodyFixed);
  }

  const closeSubmitModal = () => {
    setIsSubtmiModalOpen(!isSubmitModalOpen);
    document.body.classList.remove(styles.bodyFixed);
  }

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
        <button type="submit" className={styles.submitBtn} onClick={openSubmitModal}>プライバシーポリシーに同意の上、送信</button>
      </form>
      <SubmitModal onClick={closeSubmitModal} modalCondition={isSubmitModalOpen}/>
    </div>
)}