import { cache } from 'react'
import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPostBySlug } from "@/services/blog.service"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

const getPostBySlugCached = cache(getPostBySlug)

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blogPost = await getPostBySlugCached(slug)

  if (!blogPost) {
    notFound()
  }

  const title = blogPost.metaTitle || blogPost.title
  const description = blogPost.metaDescription
  const imageUrl = blogPost.image ? [blogPost.image] : []

  return {
    title,
    description,
    keywords: blogPost.metaKeywords,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/blog/${slug}`,
      images: imageUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl,
    }
  }
}

export default async function PageBlogPost({ params }: PageProps) {
  const { slug } = await params
  const blogPost = await getPostBySlugCached(slug)

  if (!blogPost) {
    notFound()
  }

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
        <div className="prose max-w-none">
          <p>Coming soon...</p>
        </div>
      </Container>
    </main>
  )
}
