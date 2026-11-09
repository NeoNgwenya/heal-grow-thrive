# Heal Grow Thrive Together

A Next.js site for a community where people can heal, grow, discover their potential and thrive alongside others.

## Run locally

Use Node.js 20.9 or later. Run these commands from the repository root.

```sh
npm ci
npm run dev
```

Open [the local site](http://localhost:3000). Run `npm run build` to check and build the production app, then `npm start` to serve that build.

## Configure the live site

Copy `.env.example` to `.env.local` for local development. Set the same variables in the production host before building. Rebuild after changing them so the prerendered pages pick up the new values.

| Variable | What it enables |
| --- | --- |
| `WHATSAPP_NUMBER` | The official business number with country code and digits only. Adds product-specific order enquiries, general messages and a contact form option. |
| `WHATSAPP_COMMUNITY_URL` | The official WhatsApp invite link. The membership page can also use the business number for enquiries. |
| `CONTACT_EMAIL` | The public enquiry inbox. The contact form opens a prefilled email draft or WhatsApp message for the visitor to review and send. |
| `INSTAGRAM_URL`, `FACEBOOK_URL` | Optional official social profile links in the footer. |
| `STRIPE_BOOK_URL`, `STRIPE_JOURNAL_URL` | The respective `https://buy.stripe.com/…` Payment Links. Each switches its product’s main button from Amazon to Stripe. |

Create a one-time Stripe Payment Link for each product after the account is ready. Set the price and currency in Stripe, require a shipping address, and configure the delivery countries and shipping rates. Awande can review confirmed payments and shipping details in the Stripe Dashboard before posting the orders. [Stripe Payment Links checkout options](https://docs.stripe.com/payment-links/customize) · [Payments and fulfilment](https://docs.stripe.com/payment-links/post-payment)

Update event dates and ticket information in `app/events/page.tsx` as announcements are confirmed. [Official Surviving Loss listings](https://survivingloss.co.zw/)
