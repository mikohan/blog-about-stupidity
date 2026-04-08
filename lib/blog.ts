import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
}

const postsDirectory = path.join(process.cwd(), "app/content/posts")

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    content,
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(postsDirectory)

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}
