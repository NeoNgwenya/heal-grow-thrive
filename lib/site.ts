import book from "../images/book-cover.jpeg";
import journal from "../images/journal-cover.jpeg";

function httpsLink(value: string | undefined, hosts: readonly string[]) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol === "https:" && hosts.includes(url.host) && !url.username && !url.password && url.pathname !== "/") {
      return url.href;
    }
  } catch {
    return undefined;
  }
}

const phone = process.env.WHATSAPP_NUMBER?.trim();
const email = process.env.CONTACT_EMAIL?.trim();

export const site = {
  name: "Heal Grow Thrive Together",
  description: "A community where you can heal, grow, discover your potential and thrive alongside others.",
  whatsapp: phone && /^[1-9][0-9]{6,14}$/.test(phone) ? phone : undefined,
  community: httpsLink(process.env.WHATSAPP_COMMUNITY_URL, ["chat.whatsapp.com"]),
  email: email && /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email) ? email : undefined,
  instagram: httpsLink(process.env.INSTAGRAM_URL, ["instagram.com", "www.instagram.com"]),
  facebook: httpsLink(process.env.FACEBOOK_URL, ["facebook.com", "www.facebook.com"]),
};

export const products = [
  {
    id: "book",
    type: "The book",
    title: "Surviving Loss: Held by Grace",
    description: "Awande’s account of finding comfort through faith, hope and God’s love after miscarriage.",
    image: book,
    amazon: "https://amzn.eu/d/0bpezVgA",
    stripe: httpsLink(process.env.STRIPE_BOOK_URL, ["buy.stripe.com"]),
  },
  {
    id: "journal",
    type: "The journal",
    title: "Heal Grow Thrive Journal",
    description: "A dedicated space to reflect, write through change and make time for what matters to you.",
    image: journal,
    amazon: "https://amzn.eu/d/05RyzK9i",
    stripe: httpsLink(process.env.STRIPE_JOURNAL_URL, ["buy.stripe.com"]),
  },
];
