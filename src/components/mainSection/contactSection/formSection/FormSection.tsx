"use client";

import { FORM } from "@/data/data";
import styles from "./FormSection.module.scss"
import { ContactForm } from "./formHooks/FormHooks"
import { useState } from "react";
import { PrivacyPolicyModal } from "@/components/modal/privacyPolicy/PrivacyPolicyModal";

export const FormSection = () => {
  const { register, handleSubmit, formState: { errors } } = ContactForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.classList.add(styles.bodyFixed);
  }

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
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
          <button type="button" className={styles.pripoliClick} onClick={openModal}>プライバシーポリシー</button>
          <span className={styles.pripoliText}>をご確認の上お問い合わせください。</span>
          <PrivacyPolicyModal onClick={closeModal} modalCondition={isModalOpen}/>
        </div>
        <button type="submit" className={styles.submitBtn}>プライバシーポリシーに同意の上、送信</button>
      </form>
    </div>
)}