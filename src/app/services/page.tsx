import { services } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Rocket, Users, Zap, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services",
  description: "Technical services including Full-Stack Development, SaaS, API creation, and Technical Consulting.",
}

const IconMap: Record<string, React.ReactNode> = {
  laptop: <Code className="h-8 w-8" />,
  rocket: <Rocket className="h-8 w-8" />,
  database: <Database className="h-8 w-8" />,
  brain: <Zap className="h-8 w-8" />,
  workflow: <Globe className="h-8 w-8" />,
  lightbulb: <Users className="h-8 w-8" />,
}

export default function Services() {
  return (
    <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Technical Services</h1>
        <p className="text-xl text-muted-foreground">
          I provide comprehensive development services to help businesses, founders, and agencies build scalable, high-performance digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col border-border/50 bg-card hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {IconMap[service.icon]}
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <CardDescription className="text-base mb-6 text-muted-foreground flex-1">
                {service.description}
              </CardDescription>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> End-to-end delivery
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Scalable architecture
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Best practices &amp; Clean Code
                </li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-border/50">
        <h2 className="text-3xl font-bold mb-4">Don&apos;t see exactly what you need?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Every project is unique. I offer custom development solutions tailored to your specific business requirements and technical challenges.
        </p>
        <Link href="/contact">
          <Button size="lg">Discuss Your Project</Button>
        </Link>
      </div>
    </div>
  )
}