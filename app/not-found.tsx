import { ActionLink, PageIntro } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <PageIntro eyebrow="Page not found" description="This page may have moved. You can pick up your journey on the home page.">
        A different <em>direction.</em>
      </PageIntro>
      <div className="section shell"><ActionLink href="/">Return home</ActionLink></div>
    </>
  );
}
