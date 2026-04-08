import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import type { PostMeta } from "@/lib/blog"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="mt-32">
        <h1 className="mb-12 text-3xl">Why Russian Are too Relaxed?</h1>
        {posts.map((post: PostMeta) => (
          <div className="flex flex-col gap-8" key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block text-blue-800 underline transition hover:bg-accent hover:text-accent-foreground dark:text-blue-400"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-muted-foreground">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
