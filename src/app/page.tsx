import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Rocket, Users, Zap } from "lucide-react"
import { services, industries, testimonials } from "@/lib/data"

// Mapping icon strings to actual Lucide components
const IconMap: Record<string, React.ReactNode> = {
  laptop: <Code className="h-6 w-6" />,
  rocket: <Rocket className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  brain: <Zap className="h-6 w-6" />,
  workflow: <Globe className="h-6 w-6" />,
  lightbulb: <Users className="h-6 w-6" />,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Building Scalable Digital Products for <span className="text-primary">Businesses, Founders, and Agencies.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground mb-10 max-w-2xl mx-auto">
            I&apos;m Palak Dusiya, a Full-Stack Developer specializing in modern web applications, SaaS products, and business automation systems. Let&apos;s turn your ideas into robust, production-ready code.
          </p>
          <div className="flex items-center justify-center gap-x-6 flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">View My Work</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics / Social Proof Placeholder */}
      <section className="py-12 border-y border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Successful Projects</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">10+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Happy Clients</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">15+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Lines of Code</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">100k+</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive end-to-end solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Card key={index} className="bg-card hover:bg-accent/50 transition-colors border-border/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {IconMap[service.icon]}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
             <Link href="/services">
              <Button variant="link" className="text-lg">See all services <ArrowRight className="ml-2 h-4 w-4" /></Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
         <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Who I Help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
               <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="pt-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-lg italic text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to build something amazing?</h2>
          <p className="text-lg mb-10 opacity-90">
            Let&apos;s discuss your project and see how I can help you achieve your technical goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}