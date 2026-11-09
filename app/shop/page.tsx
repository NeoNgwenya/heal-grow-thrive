import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, PageIntro } from "../../components/ui";
import { products, site } from "../../lib/site";
import { whatsappLink } from "../../lib/contact";

export const metadata: Metadata = { title: "Shop Books & Journals" };

export default function Shop() {
  return (
    <>
      <PageIntro eyebrow="The shop" description="Books and journals by Awande Mkwananzi for making sense of change and making time for reflection." tone="thrive">
        For the season <em>you’re in.</em>
      </PageIntro>
      <section className="section shell product-grid" aria-label="Books and journals">
        {products.map((product) => (
          <article className="shop-card" id={product.id} key={product.id}>
            <div className={`product-stage product-stage--${product.id}`}>
              <Image src={product.image} alt={`Cover of ${product.title}`} sizes="(max-width: 520px) 55vw, 210px" />
            </div>
            <div className="shop-card-body">
              <p className="eyebrow">{product.type}</p>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="actions">
                <ActionLink href={product.stripe ?? product.amazon}>
                  {product.stripe ? "Buy securely with Stripe" : "View on Amazon"}
                </ActionLink>
                {site.whatsapp && (
                  <ActionLink href={whatsappLink(site.whatsapp, `Hi Awande! I’m interested in ordering ${product.title}. Could you send me the details?`)} variant="outline">
                    Ask on WhatsApp
                  </ActionLink>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
