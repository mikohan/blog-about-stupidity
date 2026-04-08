import fs from "fs"
import path from "path"
import matter from "gray-matter"

const POSTS_PATH = path.join(process.cwd(), "app/content/posts")

export function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH)

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(raw)

      return {
        slug: file.replace(".mdx", ""),
        ...data,
      }
    })
}
