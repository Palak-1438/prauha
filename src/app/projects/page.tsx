import { projects } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Projects",
  description: "Explore featured projects, SaaS applications, and tools built by Palak Dusiya.",
}

export default function Projects() {
  return (
    <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Featured Work</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of scalable web applications, real-time systems, and tools I&apos;ve built to solve complex business problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col border-border/50 bg-card overflow-hidden group">
            <div className="aspect-video w-full bg-muted relative overflow-hidden flex items-center justify-center border-b border-border/50">
              {/* Using a placeholder div since images might not exist. If project.image is valid, next/image could be used here. */}
              <div className="text-muted-foreground/30 font-bold text-2xl group-hover:scale-110 transition-transform duration-500">
                {project.title} Preview
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-muted-foreground">{project.description}</p>

              <div>
                <h4 className="font-semibold text-sm mb-2 text-foreground">Business Impact</h4>
                <p className="text-sm text-muted-foreground">{project.impact}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2 text-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-4 pt-4 border-t border-border/50">
              <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" className="w-full gap-2">
                  <Github className="h-4 w-4" /> Code
                </Button>
              </Link>
              <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button className="w-full gap-2">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}