export const pillars = [
  {
    id: "heal",
    name: "Heal",
    tagline: "Choose yourself",
    summary: "Make space for healing, self-care and emotional wellbeing.",
    intro: "Some seasons ask you to slow down and begin again. This pillar makes room for reflection, self-care and rebuilding confidence at your own pace.",
    activities: [
      ["Make time to reflect", "Explore journaling and personal reflection as ways to notice what you need and what helps you feel more like yourself."],
      ["Practise healthy boundaries", "Make space for conversations about saying no, asking for help and making choices that support your wellbeing."],
      ["Find encouragement", "Share experiences of starting again and learn from guest contributions by appropriately qualified professionals."],
    ],
    quote: "You deserve to care for yourself, too.",
  },
  {
    id: "grow",
    name: "Grow",
    tagline: "Build yourself",
    summary: "Invest in yourself, build confidence and discover your potential.",
    intro: "Personal growth can begin with one goal, one new skill or one honest conversation. Find ways to invest in yourself and put what you learn into practice.",
    activities: [
      ["Give your goals a shape", "Break a meaningful goal into smaller steps, try a growth challenge and reflect on what changed along the way."],
      ["Build skills you can use", "Explore confidence, communication and leadership through personal development discussions and workshops."],
      ["Learn alongside others", "Exchange reading recommendations and hear how other community members are working towards their goals."],
    ],
    quote: "Never stop becoming the person you are capable of being.",
  },
  {
    id: "thrive",
    name: "Thrive",
    tagline: "Create opportunities",
    summary: "Turn your ideas into action and build meaningful connections.",
    intro: "Your next opportunity might begin with a skill you already have or a conversation you have yet to start. Explore ideas, build connections and turn ambitions into action.",
    activities: [
      ["Give your ideas room", "Explore entrepreneurship, test a business idea and talk through the steps from a talent or interest to something you can offer."],
      ["Make meaningful connections", "Meet other entrepreneurs, share what you do and explore collaborations through Thrive & Trade Thursdays."],
      ["Build practical confidence", "Make room for financial education, career development and learning from what others have tried."],
    ],
    quote: "Your talents have potential. Your ideas deserve to be explored.",
  },
] as const;

export type PillarId = (typeof pillars)[number]["id"];
