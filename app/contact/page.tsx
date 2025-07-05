import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import Breadcrumbs from '@/components/Breadcrumbs'

export default function PageContact() {
  const breadcrumbs = [
    { name: "Contact", url: "/contact" },
  ]

  return (
    <main>
      <HeroSecondary title="Contact">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </HeroSecondary>
      <Container className="py-12">
        Coming soon ...
      </Container>
    </main>
  )
}
