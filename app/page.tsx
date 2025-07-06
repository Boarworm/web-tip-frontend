import Hero from "@/components/Hero"
import CardProject from "@/components/CardProject"
import CardSkill from "@/components/CardSkill"
import WorkExperience from "@/components/WorkExperience"
import ContactMe from "@/components/ContactMe"
import Heading from "@/components/Heading"
import ContainerTextFlip from "@/components/ContainerTextFlip"
import Button from "@/components/ui/Button"
import React from "react"
import ThemeToggle from "@/components/ThemeToggle"
import Testimonials from "@/components/Testimonials"
import CardPost from "@/components/CardPost"
import Container from "@/components/Container"
import ListServices from "@/components/ListServices"
import Cta from "@/components/Cta"

import mockData from "@/data/mock-data.json"

export default function PageHome() {
  return (
    <main>
      <Hero/>

      <Container className="py-12 overflow-hidden">
        <Heading as="h2" variant="default" size="h1" color="dark" className="text-center mb-6">Projects I’m Proud Of</Heading>
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockData.projects.slice(0, 3).map(project => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" color="dark" size="lg">Show more</Button>
        </div>
      </Container>

      <div className="bg-gray-50 py-12">
        <Container>
          <Heading as="h2" variant="default" size="h1" color="primary" className="text-center mb-4">Services</Heading>
          <div className="text-center mb-12">From idea to deployment, I offer full-stack solutions tailored to your needs.</div>
          <ListServices/>

          {/*<div className="">*/}
          {/*    <div className="">*/}
          {/*        [🛠️] Custom Web Development*/}
          {/*        Build modern, scalable websites that deliver results.*/}
          {/*    </div>*/}

          {/*    <div>*/}
          {/*        [⚡] Performance Optimization*/}
          {/*        Speed and SEO that helps you rank and convert.*/}
          {/*    </div>*/}

          {/*    <div>*/}
          {/*        [📱] Responsive Design*/}
          {/*        Mobile-first interfaces that look great on all devices.*/}
          {/*    </div>*/}
          {/*</div>*/}
        </Container>
      </div>

      <Container className="py-12">
        <Heading as="h2" variant="default" size="h1" color="primary" className="text-center mb-4">Who I Am</Heading>
        <div className="prose">
          <p>I'm a full-stack web developer with over 10 years of experience building fast, user-centered websites. I specialize in Laravel, OctoberCMS, and modern frontend tools like Next.js. Whether it’s a simple portfolio or a custom CMS-powered site, I focus on clean code and real-world results.</p>
          <p>Originally from Ukraine, now based in Copenhagen, I work with clients worldwide.</p>
        </div>
      </Container>

      <div className="bg-brand-primary-500">
        <Container className="py-12">
          <Heading as="h2" variant="default" size="h1" color="primary" className="text-center mb-6">What Clients Say</Heading>
          <Testimonials/>
        </Container>
      </div>

      <Container className="py-12">
        <Heading as="h2" variant="default" size="h1" color="primary" className="text-center mb-4">Latest posts</Heading>
        <div className="text-center mb-12">From idea to deployment, I offer full-stack solutions tailored to your needs.</div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockData.blog.posts.slice(0, 3).map(post => (
            <CardPost
              key={post.id}
              title={post.title}
              image={post.image}
              url={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </Container>

      <Cta/>
      {/*<ContactMe/>*/}


      {/*<div className="">*/}
      {/*    <h2>Skills</h2>*/}
      {/*    <div className="grid grid-cols-3 gap-4">*/}
      {/*    /!*<CardSkill/>*!/*/}
      {/*    </div>*/}
      {/*</div>*/}


      {/*</div>*/}

      {/*<div className="">*/}

      {/*    Hero with Clear Value Proposition & CTAs*/}
      {/*    Immediately communicates what you do and encourages visitors to explore further*/}
      {/*    uizard.io*/}
      {/*    architecturaldigest.com*/}
      {/*    +7*/}
      {/*    fueler.io*/}
      {/*    +7*/}
      {/*    techradar.com*/}
      {/*    +7*/}
      {/*    hostadvice.com*/}
      {/*    +3*/}
      {/*    brandunpuzzled.com*/}
      {/*    +3*/}
      {/*    strikingly.com*/}
      {/*    +3*/}
      {/*    .*/}

      {/*    Services Overview*/}
      {/*    Briefly highlight key offerings to inform visitors of your capabilities .*/}

      {/*    Featured Work / Portfolio Snippet*/}
      {/*    Showcase best projects to build credibility; include teasers linking to full portfolio*/}
      {/*    strikingly.com*/}
      {/*    +14*/}
      {/*    zoradesign.co*/}
      {/*    +14*/}
      {/*    fueler.io*/}
      {/*    +14*/}
      {/*    .*/}

      {/*    About Me Preview*/}
      {/*    Adds warmth and personality; helps form a connection*/}
      {/*    creativecorner.studio*/}
      {/*    +15*/}
      {/*    format.com*/}
      {/*    +15*/}
      {/*    elementor.com*/}
      {/*    +15*/}
      {/*    .*/}

      {/*    Testimonials / Social Proof*/}
      {/*    Builds trust—people tend to believe others’ experiences*/}
      {/*    techradar.com*/}
      {/*    +7*/}
      {/*    fueler.io*/}
      {/*    +7*/}
      {/*    reallygooddesigns.com*/}
      {/*    +7*/}
      {/*    .*/}

      {/*    Blog Highlights / Thought Leadership*/}
      {/*    Establishes authority and boosts SEO*/}
      {/*    uizard.io*/}
      {/*    +11*/}
      {/*    fueler.io*/}
      {/*    +11*/}
      {/*    zoradesign.co*/}
      {/*    +11*/}
      {/*    .*/}

      {/*    Secondary CTA*/}
      {/*    Guides visitors toward conversion—contacting you or viewing work*/}
      {/*    behance.net*/}
      {/*    +15*/}
      {/*    smashingmagazine.com*/}
      {/*    +15*/}
      {/*    format.com*/}
      {/*    +15*/}
      {/*    .*/}

      {/*    Footer with Extra Links & Social*/}
      {/*    Provides easy access to important pages and connects with visitors across platforms*/}
      {/*    refrens.com*/}
      {/*    +15*/}
      {/*    katethesocialite.com*/}
      {/*    +15*/}
      {/*    uizard.io*/}
      {/*    +15*/}
      {/*    .*/}
      {/*</div>*/}
    </main>
  )
}
