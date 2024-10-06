"use client";

import { FORM } from "@/data/data";
import styles from "./FormSection.module.scss"
import { ContactForm } from "./formHooks/FormHooks"





export const FormSection = () => {
  const { register, handleSubmit, formState: { errors } } = ContactForm();
  
  return (
    <div className={styles.formSection}>
      <form onSubmit={handleSubmit} className={styles.formCont}>
      {FORM.map((form) => {
        return (
          <div className={styles.inputCont} key={form.id}>
            <label htmlFor={form.id}>
              {form.label}
              <span>必須</span>
            </label>
            {form.isTextarea ? (
              <textarea
                placeholder={form.placeholder}
                id={form.id}
                {...register(form.register)}
              />
            ) : (
              <input
                type="text"
                placeholder={form.placeholder}
                id={form.id}
                autoComplete={form.autoComplete}
                {...register(form.register)}
              />
            )}
            {errors[form.register] && <p>{errors[form.register]?.message}</p>}
          </div>
          )
        })}
                <button type="submit">プライバシーポリシーに同意の上、送信</button>
      </form>
    </div>
)}