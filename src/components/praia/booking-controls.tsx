"use client";

import { useId, useMemo, useState } from "react";

import { praiaDoCorteContent } from "@/content/customers/praia-do-corte";

type BookingControlsProps = {
  className?: string;
  buttonClassName?: string;
  selectClassName?: string;
};

function createWhatsappHref(phoneDigits: string, name: string) {
  const message = `${praiaDoCorteContent.whatsappMessage} Quero agendar com ${name}.`;
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

export function PraiaBookingControls({ className = "", buttonClassName = "", selectClassName = "" }: BookingControlsProps) {
  const { contacts, booking } = praiaDoCorteContent;
  const availableContacts = useMemo(() => contacts.filter((contact) => contact.available), [contacts]);
  const [selectedPhone, setSelectedPhone] = useState<string>(availableContacts[0]?.phoneDigits ?? "");
  const selectId = useId();

  const selectedContact =
    availableContacts.find((contact) => contact.phoneDigits === selectedPhone) ?? availableContacts[0] ?? null;

  if (!selectedContact) {
    return null;
  }

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="booking-professional">
          {booking.selectLabel}
        </label>
        <div className={`relative min-w-0 flex-1 ${selectClassName}`}>
          <select
            id={selectId}
            value={selectedContact.phoneDigits}
            onChange={(event) => setSelectedPhone(event.target.value)}
            className="min-h-13 w-full appearance-none rounded-full border border-white/12 bg-[rgba(10,32,28,0.92)] px-5 pr-12 text-sm font-semibold uppercase tracking-[0.12em] text-[#F3EAD8] outline-none transition focus:border-[#7BD3C6]"
          >
            {availableContacts.map((contact) => (
              <option key={contact.phoneDigits} value={contact.phoneDigits}>
                {contact.name}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#9DB7AF]">▾</span>
        </div>

        <a
          href={createWhatsappHref(selectedContact.phoneDigits, selectedContact.name)}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex min-h-13 shrink-0 items-center justify-center rounded-full bg-[#E7C88A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#08110f] transition hover:bg-[#F1D9A7] ${buttonClassName}`}
        >
          {booking.buttonLabel}
        </a>
      </div>

      {booking.helper ? <p className="mt-3 text-sm leading-6 text-[#9DB7AF]">{booking.helper}</p> : null}
    </div>
  );
}
