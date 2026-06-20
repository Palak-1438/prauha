import { industries } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Rocket, Briefcase, ShoppingCart, Lightbulb, Workflow } from "lucide-react"

export const metadata = {
  title: "Industries",
  description: "Specialized development services for Startups, Agencies, SaaS, and E-commerce businesses.",
}

const IndustryIcons: Record<string, React.ReactNode> = {
  "Startups": <Rocket className="h-10 w-10 text-primary" />,
  "Agencies": <Workflow className="h-10 w-10 text-primary" />,
  "SaaS Companies": <Building2 className="h-10 w-10 text-primary" />,
  "Local Businesses": <Briefcase className="h-10 w-10 text-primary" />,
  "E-commerce": <ShoppingCart className="h-10 w-10 text-primary" />,
  "Founders": <Lightbulb className="h-10 w-10 text-primary" />,
}

export default function Industries() {
  // Pad the array if needed to meet layout demands or use existing mapped icons
  const displayIndustries = [...industries]

  // Adding a few more to match the requested design structure if they aren't all in data.ts
  if (!displayIndustries.find(i => i.name === "E-commerce")) {
    displayIndustries.push({
      name: "E-commerce",
      description: "Custom storefronts, complex inventory systems, and high-conversion checkouts.",
    })
  }
  if (!displayIndustries.find(i => i.name === "Founders")) {
    displayIndustries.push({
      name: "Founders",
      description: "Technical partnerships to turn your industry expertise into scalable software solutions.",
    })
  }

  return (
    <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Industries I Serve</h1>
        <p className="text-xl text-muted-foreground">
          Tailored digital solutions built to address the unique challenges of your specific industry and market stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayIndustries.map((industry, index) => (
          <Card key={index} className="border-border/50 bg-card hover:bg-muted/50 transition-all duration-300">
            <CardHeader>
              <div className="mb-4">
                {IndustryIcons[industry.name] || <Building2 className="h-10 w-10 text-primary" />}
              </div>
              <CardTitle className="text-2xl">{industry.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}