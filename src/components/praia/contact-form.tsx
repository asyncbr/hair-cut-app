"use client";

import { useState } from "react";

import { praiaDoCorteContent } from "@/content/customers/praia-do-corte";

type FormValues = {
  professional: string;
  name: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function PraiaContactForm() {
  const { contacts, contact, whatsappMessage } = praiaDoCorteContent;
  const availableContacts = contacts.filter((contactItem) => contactItem.available);
  const [values, setValues] = useState<FormValues>({
    professional: availableContacts[0]?.phoneDigits ?? "",
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.professional.trim()) {
      nextErrors.professional = "Selecione um profissional.";
    }

    if (!values.name.trim()) {
      nextErrors.name = "Informe seu nome.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Informe seu telefone.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Escreva sua mensagem.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const selectedContact = availableContacts.find((contactItem) => contactItem.phoneDigits === values.professional);

    if (!selectedContact) {
      return;
    }

    const composedMessage = `${whatsappMessage} Quero agendar com ${selectedContact.name}.\n\nNome: ${values.name}\nTelefone: ${values.phone}\nMensagem: ${values.message}`;
    const href = `https://wa.me/${selectedContact.phoneDigits}?text=${encodeURIComponent(composedMessage)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const { fields, placeholders, submitLabel, helper, successLabel } = contact.form;

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 sm:p-7">
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white" htmlFor="contact-professional">
            {fields.professional}
          </label>
          <select
            id="contact-professional"
            value={values.professional}
            onChange={(event) => handleChange("professional", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#071f36] px-4 py-3 text-sm text-white outline-none transition focus:border-[#3FA7D6]"
          >
            {availableContacts.map((contactItem) => (
              <option key={contactItem.phoneDigits} value={contactItem.phoneDigits}>
                {contactItem.name}
              </option>
            ))}
          </select>
          {errors.professional ? <p className="mt-2 text-sm text-[#F4D35E]">{errors.professional}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white" htmlFor="contact-name">
            {fields.name}
          </label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder={placeholders.name}
            className="w-full rounded-2xl border border-white/10 bg-[#071f36] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#7ca3bf] focus:border-[#3FA7D6]"
          />
          {errors.name ? <p className="mt-2 text-sm text-[#F4D35E]">{errors.name}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white" htmlFor="contact-phone">
            {fields.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            placeholder={placeholders.phone}
            className="w-full rounded-2xl border border-white/10 bg-[#071f36] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#7ca3bf] focus:border-[#3FA7D6]"
          />
          {errors.phone ? <p className="mt-2 text-sm text-[#F4D35E]">{errors.phone}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white" htmlFor="contact-message">
            {fields.message}
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder={placeholders.message}
            className="w-full rounded-2xl border border-white/10 bg-[#071f36] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#7ca3bf] focus:border-[#3FA7D6]"
          />
          {errors.message ? <p className="mt-2 text-sm text-[#F4D35E]">{errors.message}</p> : null}
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F4D35E] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#ffd54f]"
        >
          {submitLabel}
        </button>
      </div>

      {helper ? <p className="mt-4 text-sm leading-6 text-[#a7c5da]">{helper}</p> : null}
      {submitted ? <p className="mt-3 text-sm font-medium text-[#2ECC71]">{successLabel}</p> : null}
    </form>
  );
}
