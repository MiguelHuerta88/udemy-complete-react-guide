import PageContent from "../components/PageContent";
import NewsletterSignup from "../components/NewsletterSignup";

export default function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export async function newsletterAction({ request, params }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server
  return { message: "Signup successful!" };
}
