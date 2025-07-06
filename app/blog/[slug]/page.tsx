import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import Breadcrumbs from '@/components/Breadcrumbs'

import mockData from "@/data/mock-data.json"

export default function PageBlogPost() {
  const blogPost = mockData.blog.posts[0]
  const breadcrumbs = [
    { name: "Blog", url: "/blog" },
    { name: blogPost.title, url: "" },
  ]

  return (
    <main>
      <HeroSecondary title={blogPost.title}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </HeroSecondary>
      <Container className="py-12">
        <div className="prose">
          {blogPost.content}
        </div>
      </Container>
    </main>
  )
}
