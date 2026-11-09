export function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const topics = {
  general: "General enquiry",
  community: "Community membership",
  partnership: "Partnership or sponsorship",
  speaker: "Guest speaker application",
  events: "Event enquiry",
  business: "Business collaboration",
  shop: "Book or journal enquiry",
} as const;
