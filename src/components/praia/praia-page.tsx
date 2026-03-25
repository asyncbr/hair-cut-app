import Image from "next/image";
import Link from "next/link";

import { PraiaBookingControls } from "@/components/praia/booking-controls";
import { PraiaContactForm } from "@/components/praia/contact-form";
import { Container } from "@/components/ui/container";
import { praiaDoCorteContent } from "@/content/customers/praia-do-corte";

export function PraiaPage() {
  const { site, navigation, hero, services, differentiators, gallery, process, contacts, address, contact, footer } =
    praiaDoCorteContent;
  const year = new Date().getFullYear();
  const defaultWhatsappHref = `https://wa.me/${contacts[0].phoneDigits}?text=${encodeURIComponent(praiaDoCorteContent.whatsappMessage)}`;
  const professionalWhatsappHref = (phoneDigits: string, name: string) =>
    `https://wa.me/${phoneDigits}?text=${encodeURIComponent(`${praiaDoCorteContent.whatsappMessage} Quero agendar com ${name}.`)}`;

  return (
    <div className="praia-page bg-[#03101c] text-white">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(63,167,214,0.18),_transparent_30%),radial-gradient(circle_at_88%_12%,_rgba(201,146,24,0.18),_transparent_18%),linear-gradient(180deg,_#07192c_0%,_#03101c_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,146,24,0.6),transparent)]" />
        <Container className="relative py-6">
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={site.logo}
                  alt={`Logo da ${site.name}`}
                  width={96}
                  height={96}
                  className="h-16 w-16 rounded-2xl border border-white/10 bg-white/95 p-1 object-contain shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:h-20 sm:w-20"
                />
                <div>
                  <p className="text-lg font-black uppercase tracking-[0.18em] text-white">{site.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C99218]">{site.slogan}</p>
                </div>
              </Link>

              <a
                href={defaultWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hidden min-h-11 items-center justify-center rounded-full border border-[#C99218]/30 bg-[rgba(201,146,24,0.14)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#C99218] hover:bg-[rgba(201,146,24,0.2)] sm:inline-flex"
              >
                Agendar no WhatsApp
              </a>
            </div>

            <nav aria-label="Navegação principal" className="flex flex-wrap gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c8dceb] transition hover:border-[#C99218]/40 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,_rgba(46,204,113,0.11),_transparent_18%),radial-gradient(circle_at_84%_16%,_rgba(201,146,24,0.18),_transparent_16%)]" />
          <Container className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.94fr]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C99218]">{hero.eyebrow}</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.5rem]">
                {hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c8dceb]">{hero.description}</p>

              <PraiaBookingControls className="mt-7 max-w-2xl" buttonClassName="sm:min-w-56" />

              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2.4rem] bg-[linear-gradient(135deg,rgba(63,167,214,0.16),rgba(4,17,31,0))] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,27,46,0.96),rgba(3,16,28,0.98))] p-6 shadow-[0_34px_100px_rgba(0,0,0,0.42)]">
                <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,146,24,0.5),transparent)]" />
                <div className="grid gap-5 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6">
                  <div className="flex items-center justify-between border-b border-white/8 pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C99218]">Praia do Corte</p>
                      <p className="mt-2 text-3xl font-black uppercase leading-none text-white">Presença premium</p>
                    </div>
                    <div className="h-14 w-14 rounded-full border border-[#C99218]/40 bg-[radial-gradient(circle,_rgba(201,146,24,0.8)_0%,_rgba(201,146,24,0.08)_64%,_transparent_66%)]" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {hero.stats.map((item) => (
                      <div key={item.label} className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.035)] p-4">
                        <p className="text-lg font-black uppercase tracking-[0.08em] text-[#C99218]">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-[#c8dceb]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(135deg,rgba(8,33,56,0.98),rgba(4,17,31,0.98))] p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(63,167,214,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(201,146,24,0.12),_transparent_26%)]" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2ECC71]">{hero.feature.eyebrow}</p>
                        <p className="mt-4 text-3xl font-black uppercase leading-tight text-white">{hero.feature.title}</p>
                        <p className="mt-4 max-w-md text-sm leading-7 text-[#a7c5da]">{hero.feature.description}</p>
                      </div>
                      <div className="hidden h-24 w-24 rounded-full border border-[#C99218]/50 bg-[radial-gradient(circle,_rgba(201,146,24,0.76)_0%,_rgba(201,146,24,0.1)_62%,_transparent_64%)] sm:block" />
                    </div>
                    <div className="relative mt-6 grid grid-cols-[repeat(8,minmax(0,1fr))] gap-2 opacity-90">
                      {Array.from({ length: 24 }).map((_, index) => (
                        <span
                          key={index}
                          className={`h-3 rounded-full ${index % 5 === 0 ? "bg-[#C99218]" : index % 3 === 0 ? "bg-[#2ECC71]" : "bg-[#3FA7D6]"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="servicos" className="border-y border-white/10 bg-[linear-gradient(180deg,#07192b_0%,#061523_100%)] py-18 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99218]">Serviços</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Soluções objetivas para quem quer presença e praticidade
              </h2>
              <p className="mt-4 text-base leading-7 text-[#a7c5da]">
                Corte, barba e atendimento em domicílio com linguagem direta, acabamento profissional e agendamento simples.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,34,56,0.96),rgba(4,17,31,0.98))] p-6 transition hover:-translate-y-1 hover:border-[#C99218]/35"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-[#C99218]/25 bg-[rgba(201,146,24,0.1)] text-lg font-black text-[#C99218]">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="mt-6 text-2xl font-black uppercase text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#a7c5da]">{service.description}</p>
                  <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(201,146,24,0.35),transparent)] opacity-0 transition group-hover:opacity-100" />
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="diferenciais" className="py-18 sm:py-24">
          <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2ECC71]">Diferenciais</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Atendimento direto, visual bem resolvido e identidade de verdade
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#a7c5da]">
                Nada de promessa vazia. A proposta é simples: comunicar confiança, facilitar o agendamento e entregar um resultado que combine com o cliente.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6"
                >
                  <h3 className="text-xl font-black uppercase text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#c8dceb]">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="galeria" className="bg-[linear-gradient(180deg,#071a2e_0%,#04111f_100%)] py-18 sm:py-24">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99218]">Galeria / Estilo</p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  Estilo, acabamento e identidade em cada atendimento
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-[#a7c5da]">
                Cortes e barba com leitura de estilo, execução precisa e acabamento pensado para manter presença no dia a dia.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <article className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[#0b2743] shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
                <div className="relative h-[28rem]">
                  <Image
                    src={gallery[0].image}
                    alt={gallery[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,31,0.05),rgba(4,17,31,0.74))]" />
                </div>
                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2ECC71]">{gallery[0].title}</p>
                  <p className="mt-3 text-base leading-7 text-[#c8dceb]">{gallery[0].description}</p>
                </div>
              </article>

              <div className="grid gap-5">
                {gallery.slice(1).map((item, index) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div
                        className={`absolute inset-0 ${
                          index === 0
                            ? "bg-[linear-gradient(180deg,rgba(4,17,31,0.08),rgba(4,17,31,0.68))]"
                            : "bg-[linear-gradient(180deg,rgba(4,17,31,0.04),rgba(4,17,31,0.72))]"
                        }`}
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99218]">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-[#c8dceb]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="como-funciona" className="py-18 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2ECC71]">Como funciona</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Um fluxo simples para sair do clique ao corte confirmado
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {process.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6"
                >
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C99218]">{item.step}</p>
                  <h3 className="mt-5 text-2xl font-black uppercase text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#a7c5da]">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contato" className="border-t border-white/10 bg-[linear-gradient(180deg,#071a2e_0%,#04111f_100%)] py-18 sm:py-24">
          <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6">
              <div className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,34,56,0.96),rgba(4,17,31,0.98))] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C99218]">Localização / Contato</p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white">{contact.title}</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#c8dceb]">{contact.description}</p>

                <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2ECC71]">Endereço</p>
                  <p className="mt-3 text-lg font-semibold text-white">{address}</p>
                </div>

                <div className="mt-6 grid gap-4">
                  {contacts.map((contactItem) => (
                    <a
                      key={contactItem.name}
                      href={professionalWhatsappHref(contactItem.phoneDigits, contactItem.name)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Agendar com ${contactItem.name} pelo WhatsApp`}
                      className="block cursor-pointer rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-5 transition hover:-translate-y-0.5 hover:border-[#C99218]/35 hover:bg-white/8 active:scale-[0.99]"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-lg font-black uppercase text-white">{contactItem.name}</p>
                          <p className="text-sm text-[#a7c5da]">{contactItem.role}</p>
                          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2ECC71]">
                            {contactItem.available ? "Disponível" : "Indisponível"}
                          </p>
                          <p className="mt-2 text-sm font-medium text-[#C99218]">{contactItem.phoneDisplay}</p>
                        </div>
                        <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.12em] text-white">
                          Agendar
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2ECC71]">Agendamento</p>
                <h3 className="mt-4 text-2xl font-black uppercase text-white">{contact.form.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#c8dceb]">{contact.form.description}</p>
                <div className="mt-6">
                  <PraiaBookingControls buttonClassName="sm:min-w-56" />
                </div>
                <div className="mt-6">
                  <PraiaContactForm />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#03101c] py-12">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-2xl font-black uppercase tracking-[0.12em] text-white">{site.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#a7c5da]">{site.slogan}</p>
            <p className="mt-4 text-sm text-[#C99218]">{address}</p>
          </div>

          <div className="grid gap-4 text-sm text-[#d8e7f2]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-4">
              <PraiaBookingControls buttonClassName="w-full text-[#07111d]" selectClassName="w-full" />
            </div>
            <a href={footer.creditHref} target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#C99218]">
              {footer.creditLabel} | asyncti.com
            </a>
            <p className="text-[#b8cedd]">{`© ${year} ${site.name}. ${footer.copyrightLabel}.`}</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
