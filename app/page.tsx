import React from "react";
import mockData from "@/data/mock-data.json";
import Hero from "@/components/Hero";
import CardProject from "@/components/CardProject";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import CardPost from "@/components/CardPost";
import Container from "@/components/Container";
import ListServices from "@/components/ListServices";
import Cta from "@/components/Cta";
import { getPosts } from "@/services/blog.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Web Developer | Laravel & Next.js Expert",
  description:
    "Full-stack web developer with 10+ years of experience building fast, user-centered websites. Specializing in Laravel, OctoberCMS, and modern frontend tools like Next.js.",
  keywords: [
    "full-stack developer",
    "Laravel",
    "Next.js",
    "OctoberCMS",
    "web development",
    "Copenhagen",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Full-Stack Web Developer | Laravel & Next.js Expert",
    description:
      "Full-stack web developer with 10+ years of experience building fast, user-centered websites. Specializing in Laravel, OctoberCMS, and modern frontend tools like Next.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Web Developer | Laravel & Next.js Expert",
    description:
      "Full-stack web developer with 10+ years of experience building fast, user-centered websites. Specializing in Laravel, OctoberCMS, and modern frontend tools like Next.js.",
  },
};

export default async function PageHome() {
  const posts = await getPosts();

  return (
    <>
      <main>
        <Hero />

        <Container className="py-12 overflow-hidden">
          <Heading
            as="h2"
            variant="gradient"
            size="h1"
            color="dark"
            className="text-center mb-6 md:mb-12"
          >
            Projects I’m Proud Of
          </Heading>
          <div className="mb-8 grid m-auto max-w-[1000px] grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16">
            {mockData.projects.slice(0, 2).map((project) => (
              <CardProject
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              variant="gradient"
              color="light"
              size="md"
              href="/portfolio"
            >
              All projects
            </Button>
          </div>
        </Container>

        <div className="bg-gray-50 py-12">
          <Container>
            <Heading
              as="h2"
              variant="gradient"
              size="h1"
              color="primary"
              className="text-center mb-4"
            >
              Services
            </Heading>
            <div className="text-center mb-12">
              From idea to deployment, I offer full-stack solutions tailored to
              your needs.
            </div>
            <ListServices />
          </Container>
        </div>

        <Container className="py-12">
          <Heading
            as="h2"
            variant="gradient"
            size="h1"
            color="primary"
            className="text-center mb-6 md:mb-12"
          >
            Who I Am
          </Heading>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 xl:space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-primary-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    I'm a full-stack web developer with over 10 years of
                    experience building fast, user-centered websites. I
                    specialize in Laravel, OctoberCMS, and modern frontend tools
                    like Next.js.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-primary-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Whether it's a simple portfolio or a custom CMS-powered
                    site, I focus on clean code and real-world results.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand-primary-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Based in Copenhagen
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Originally from Ukraine, now based in Copenhagen, I work with
                  clients worldwide.
                </p>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-brand-primary-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </Container>

        <div className="bg-brand-primary-500">
          <Container className="py-12">
            <Heading
              as="h2"
              variant="gradient"
              size="h1"
              color="light"
              className="text-center mb-6 md:mb-12"
            >
              What Clients Say
            </Heading>
            <Testimonials />
          </Container>
        </div>

        <Container className="py-12">
          <Heading
            as="h2"
            variant="gradient"
            size="h1"
            color="primary"
            className="text-center mb-6 md:mb-12"
          >
            Latest posts
          </Heading>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {posts.slice(0, 4).map((post) => (
              <CardPost
                key={post.id}
                title={post.title}
                image={post.image}
                url={`/blog/${post.slug}`}
              />
            ))}
          </div>
        </Container>

        <Cta />
      </main>
    </>
  );
}
