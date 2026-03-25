export const praiaDoCorteContent = {
  site: {
    name: "Praia do Corte",
    slogan: "O corte que é a sua praia",
    domain: "https://praiadocorte.com.br",
    locale: "pt_BR",
    logo: "/brands/praia-do-corte-logo.svg",
  },
  seo: {
    title: "Praia do Corte | Barbearia com estilo e atendimento em São Paulo",
    description:
      "Corte masculino, barba e atendimento em domicílio com agendamento fácil por WhatsApp. Conheça a Praia do Corte.",
    ogTitle: "Praia do Corte | O corte que é a sua praia",
    ogDescription:
      "Barbearia com identidade forte, atendimento local e agendamento rápido no WhatsApp para corte masculino e barba em São Paulo.",
    canonicalPath: "/",
  },
  navigation: [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Estilo", href: "#galeria" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ],
  whatsappMessage: "Fala, vim pelo site da Praia do Corte e quero agendar um horário.",
  contacts: [
    {
      name: "Natanael",
      role: "Barbeiro",
      phoneDisplay: "(11) 9 4069-0641",
      phoneDigits: "5511940690641",
    },
    {
      name: "Ryck",
      role: "Barbeiro",
      phoneDisplay: "(11) 9 5962-9676",
      phoneDigits: "5511959629676",
    },
  ],
  address: "Rua Jar. Manet, 51 - Jd. Maedela",
  hero: {
    eyebrow: "Barbearia com identidade local",
    title: "O corte que é a sua praia",
    description:
      "Corte masculino e barba com presença, praticidade e atendimento que encaixa na sua rotina. Chame no WhatsApp, escolha o horário e saia alinhado sem complicação.",
    highlights: [
      "Atendimento em domicílio",
      "Agendamento fácil por WhatsApp",
      "Estilo com personalidade",
    ],
    stats: [
      { value: "2 barbeiros", label: "Atendimento direto com Natanael e Ryck" },
      { value: "WhatsApp", label: "Confirmação rápida e sem burocracia" },
      { value: "São Paulo", label: "Presença local com atendimento próximo" },
    ],
    feature: {
      eyebrow: "Identidade da marca",
      title: "Barbearia com clima de rua, praia e confiança.",
      description:
        "Uma estética forte, profissional e acessível para quem quer se cuidar sem cair em visual genérico.",
    },
  },
  services: [
    {
      title: "Corte masculino",
      description:
        "Acabamento limpo, leitura de estilo e execução pensada para valorizar seu rosto e sua rotina.",
    },
    {
      title: "Barba",
      description:
        "Desenho, alinhamento e acabamento para deixar o visual mais forte, organizado e consistente.",
    },
    {
      title: "Corte + barba",
      description:
        "O combo ideal para renovar presença com unidade entre cabelo, barba e acabamento final.",
    },
    {
      title: "Atendimento em domicílio",
      description:
        "Mais conforto para quem prefere praticidade sem abrir mão de um atendimento profissional.",
    },
  ],
  differentiators: [
    {
      title: "Praticidade de verdade",
      description: "Você chama, combina o horário e resolve o corte sem processo enrolado.",
    },
    {
      title: "Estilo que combina com você",
      description: "O atendimento considera formato, personalidade e o resultado que você quer sustentar no dia a dia.",
    },
    {
      title: "Atendimento local e próximo",
      description: "Marca de bairro com presença real, contato fácil e linguagem direta.",
    },
    {
      title: "Visual alinhado do começo ao fim",
      description: "Do primeiro ajuste ao acabamento, a proposta é sair pronto para a semana, o rolê ou o evento.",
    },
  ],
  gallery: [
    {
      title: "Fade com assinatura",
      description: "Estrutura marcada, laterais limpas e acabamento forte.",
    },
    {
      title: "Barba no eixo",
      description: "Desenho limpo para reforçar presença e equilíbrio facial.",
    },
    {
      title: "Clássico com atitude",
      description: "Corte versátil para rotina, encontro e ocasião especial.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Chama no WhatsApp",
      description: "Manda a mensagem e fala o tipo de atendimento que você procura.",
    },
    {
      step: "02",
      title: "Escolhe o horário",
      description: "Confirme a melhor opção com atendimento simples e direto.",
    },
    {
      step: "03",
      title: "Receba o atendimento ou compareça",
      description: "A experiência se adapta ao formato combinado, inclusive em domicílio.",
    },
    {
      step: "04",
      title: "Saia na régua",
      description: "Visual renovado, acabamento certo e presença em dia.",
    },
  ],
  contact: {
    title: "Fale com a Praia do Corte",
    description:
      "Escolha o barbeiro, mande sua mensagem e combine do jeito mais prático para você.",
    form: {
      title: "Prefere escrever antes?",
      description:
        "Preencha os dados e gere uma mensagem pronta para seguir pelo WhatsApp sem depender de integração no deploy.",
      fields: {
        name: "Nome",
        phone: "Telefone",
        message: "Mensagem",
      },
      placeholders: {
        name: "Seu nome",
        phone: "(11) 9 9999-9999",
        message: "Quero agendar um corte para esta semana.",
      },
      submitLabel: "Enviar pelo WhatsApp",
      helper: "O formulário valida os dados e abre a conversa com a mensagem preenchida.",
      successLabel: "Abrindo o WhatsApp com sua mensagem.",
    },
  },
  footer: {
    copyrightLabel: "Todos os direitos reservados",
    creditLabel: "Async",
    creditHref: "https://asyncti.com",
  },
} as const;
