import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import Breadcrumbs from '@/components/Breadcrumbs'
import ListServices from '@/components/ListServices'

export default function PageServices() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
  ]

  return (
    <main>
      <HeroSecondary title="Services">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </HeroSecondary>
      <Container className="py-12">
        <ListServices/>
      </Container>
    </main>
  )
}
