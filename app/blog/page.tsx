import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import CardPost from '@/components/CardPost'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPosts } from '@/services/blog.service'

export default async function PageBlog() {
  const breadcrumbs = [
    { name: "Blog", url: "/blog" },
  ]

  const posts = await getPosts()

  return (
    <main>
      <HeroSecondary title="Blog">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </HeroSecondary>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <CardPost
              key={post.id}
              title={post.title}
              image={post.image}
              url={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
