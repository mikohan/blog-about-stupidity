export default function TestPage() {
  return (
    <div className="p-10">
      {/* If working, the text below will have margins, bold headings, and proper spacing */}
      <article className="prose lg:prose-xl">
        <h1>Typography Test</h1>
        <p>
          If the plugin is working, this paragraph will have a readable line
          height and the heading above will be <strong>large and bold</strong>.
        </p>
        <ul>
          <li>Bullet points should also appear</li>
          <li>with proper indentation.</li>
        </ul>
      </article>
    </div>
  )
}
