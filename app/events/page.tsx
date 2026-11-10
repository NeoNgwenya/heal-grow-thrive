import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Images, Lightbulb, MapPin } from "lucide-react";
import { ActionLink, PageIntro } from "../../components/ui";
import { ukBookLaunch } from "../../lib/uk-book-launch";

export const metadata: Metadata = {
  title: "Events",
  description: "Find upcoming gatherings and revisit Awande Mkwananzi’s UK book launch in photos.",
};

const survivingLossUrl = "https://survivingloss.co.zw/";

export default function Events() {
  const [cover] = ukBookLaunch.photos;

  return (
    <>
      <PageIntro eyebrow="Gather with us" description="Make time to learn, share ideas and meet people taking their own next steps." tone="thrive">
        Events &amp; <em>highlights.</em>
      </PageIntro>
      <div className="shell event-shortcut">
        <a className="action action--text" href="#uk-book-launch"><Images size={17} aria-hidden /> UK Book Launch photos <ArrowDown size={15} aria-hidden /></a>
      </div>
      <section className="section shell info-grid upcoming-events" aria-label="Upcoming events">
        <article className="info-card tone-heal event-feature" id="surviving-loss-bulawayo" data-reveal="">
          <p className="eyebrow"><span /> Bulawayo, Zimbabwe</p>
          <h2>Surviving Loss <em>From Loss to Life Again</em></h2>
          <dl className="event-facts">
            <div>
              <dt className="eyebrow">Date and time</dt>
              <dd><time dateTime="2027-01-03">Sunday, 3 January 2027</time><span>12:00–17:30 local time</span></dd>
            </div>
            <div>
              <dt className="eyebrow">Venue</dt>
              <dd>Small City Hall, Bulawayo<span>Entrance on 8th Avenue</span></dd>
            </div>
            <div>
              <dt className="eyebrow">Tickets</dt>
              <dd>$40 per person</dd>
            </div>
          </dl>
          <p className="event-description">Guest speakers, live music and a shared meal for women navigating loss.</p>
          <div className="actions">
            <ActionLink href={`${survivingLossUrl}#tickets`}>Ticket enquiries</ActionLink>
            <ActionLink href={`${survivingLossUrl}#details`} variant="outline">Official event details</ActionLink>
          </div>
        </article>
        <article className="info-card tone-grow" id="south-africa-tour" data-reveal="">
          <MapPin size={29} strokeWidth={1.4} aria-hidden />
          <p className="eyebrow event-location">South Africa tour</p>
          <h2>The Women’s Healing &amp; Empowerment Experience</h2>
          <p>A gathering for women centred on healing, faith and connection. Dates and venues are to be announced.</p>
          <ActionLink href={`${survivingLossUrl}#south-africa-tour`} variant="text">See the tour announcement</ActionLink>
        </article>
        <article className="info-card tone-thrive" id="thrive-and-trade" data-reveal="">
          <Lightbulb size={29} strokeWidth={1.4} aria-hidden />
          <h2>Thrive &amp; Trade Thursdays</h2>
          <p>An initiative for sharing business ideas, discovering what others are building and finding people to collaborate with.</p>
          <ActionLink href="/contact?topic=events" variant="text">Ask about Thrive &amp; Trade</ActionLink>
        </article>
      </section>
      <section className="section section--tinted" id="uk-book-launch" aria-labelledby="launch-heading">
        <div className="shell launch-feature" data-reveal="">
          <Image className="launch-cover" src={cover.image} alt={cover.alt} sizes="(max-width: 720px) 94vw, 580px" />
          <div>
            <p className="eyebrow"><span /> Past event · <time dateTime={ukBookLaunch.date}>{ukBookLaunch.dateLabel}</time></p>
            <h2 id="launch-heading">{ukBookLaunch.title}</h2>
            <p>See moments from the UK launch of Awande Mkwananzi’s <cite>Surviving Loss: Held by Grace</cite>, from book signings to photos with guests.</p>
            <ActionLink href={ukBookLaunch.href}>View all {ukBookLaunch.photos.length} photos</ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
