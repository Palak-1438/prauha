import { processSteps } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Process",
  description: "How we turn ideas into scalable digital products: from discovery to support.",
}

export default function Process() {
  return (
    <div className="py-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Client Workflow</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A transparent, iterative process designed to deliver high-quality software that aligns with your business goals.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {processSteps.map((step, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-sm z-10">
              {step.step}
            </div>

            {/* Card */}
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}