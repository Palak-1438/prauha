import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About",
  description: "Learn more about Palak Dusiya, Full-Stack Developer and Tech Enthusiast.",
}

export default function About() {
  const skills = [
    "Java", "C++", "C", "React", "Next.js", "Node.js", "MySQL",
    "WebSockets", "Data Analysis", "Tailwind CSS", "TypeScript"
  ]

  return (
    <div className="py-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Turning ideas into code ☕ | Building tools that matter | Tech enthusiast on a mission 🚀
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <div className="prose prose-neutral dark:prose-invert space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am Palak Dusiya, a passionate Full-Stack Developer currently in my 3rd Year of BTech at GGSIPU.
                My journey in tech is driven by a deep desire to build impactful products and startups.
                I thrive on exploring new technologies, learning continuously, and creating solutions that solve real-world problems.
              </p>
              <p>
                Whether it&apos;s building a complex SaaS platform, a real-time chat application, or a simple command-line tool to track moods,
                I focus on writing clean, maintainable code and designing intuitive user experiences.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Development Philosophy</h2>
            <Card className="bg-muted/30 border-none shadow-none">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">01.</span>
                    <div>
                      <strong className="block text-foreground">User-Centric Design</strong>
                      <span className="text-muted-foreground text-sm">Every line of code should serve the end-user. Functionality meets intuitive design.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">02.</span>
                    <div>
                      <strong className="block text-foreground">Scalable Architecture</strong>
                      <span className="text-muted-foreground text-sm">Building with the future in mind, ensuring applications can grow with the business.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">03.</span>
                    <div>
                      <strong className="block text-foreground">Continuous Learning</strong>
                      <span className="text-muted-foreground text-sm">The tech landscape evolves rapidly. I stay ahead by constantly exploring and adapting.</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Skills &amp; Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Fun Facts</h2>
            <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4">
              <li>Loves solving competitive programming problems 🧠</li>
              <li>Passionate about product design + functionality</li>
              <li>Low-key loves Bollywood &amp; Hollywood music 🎧</li>
              <li>Always up for turning late-night ideas into projects 🌙💻</li>
            </ul>
          </section>

          <div className="pt-6">
            <Link href="/contact">
              <Button className="w-full">Let&apos;s work together</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}