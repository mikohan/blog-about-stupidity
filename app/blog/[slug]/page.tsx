// app/blog/[slug]/page.tsx
// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ slug: string }>
}

// 1. Tell Next.js which paths to pre-render (Static Site Generation)
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
        <time className="mt-2 block text-sm text-muted-foreground">
          {post.date}
        </time>
      </header>

      {/* The 'prose' class is what applies the Tailwind Typography styling */}
      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <MDXRemote source={post.content} />
      </article>
    </main>
  )
}
