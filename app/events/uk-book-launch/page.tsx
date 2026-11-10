import type { Metadata } from "next";
import { ActionLink, PageIntro } from "../../../components/ui";
import { PhotoGallery } from "../../../components/photo-gallery";
import { ukBookLaunch } from "../../../lib/uk-book-launch";

export const metadata: Metadata = {
  title: ukBookLaunch.title,
  description: "Photos from the UK launch of Surviving Loss: Held by Grace by Awande Mkwananzi.",
};

export default function UKBookLaunch() {
  return (
    <>
      <PageIntro
        eyebrow={`Past event · ${ukBookLaunch.dateLabel}`}
        description="Photos from the UK launch of Surviving Loss: Held by Grace by Awande Mkwananzi."
      >
        UK Book <em>Launch.</em>
      </PageIntro>
      <section className="section shell launch-gallery" aria-label="Book launch photos">
        <div className="gallery-heading">
          <ActionLink href="/events#uk-book-launch" variant="text">Back to events</ActionLink>
          <p>{ukBookLaunch.photos.length} photos</p>
        </div>
        <PhotoGallery photos={ukBookLaunch.photos} />
      </section>
    </>
  );
}
