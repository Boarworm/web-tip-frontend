import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import WorkExperience from '@/components/WorkExperience'

export default function AboutBlog() {
  return (
    <main>
      <HeroSecondary title="About"/>
      <Container className="py-12">
        <WorkExperience/>
      </Container>
    </main>
  )
}
