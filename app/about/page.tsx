import HeroSecondary from "@/components/HeroSecondary";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageAbout() {
  const breadcrumbs = [{ name: "About", url: "/about" }];

  return (
    <main>
      <HeroSecondary title="About">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </HeroSecondary>
      <Container className="py-12">
        <div className="prose">
          <p>
            {
              "I'm a full-stack web developer with over 10 years of experience building fast, user-centered websites. I specialize in Laravel, OctoberCMS, and modern frontend tools like Next.js."
            }
          </p>
        </div>
      </Container>
    </main>
  );
}
