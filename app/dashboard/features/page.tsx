import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureUsageChart } from "@/components/feature-usage-chart"
import { FeatureAdoptionFunnel } from "@/components/feature-adoption-funnel"
import { Zap, TrendingUp, Users, Activity } from "lucide-react"

const featureMetrics = [
  {
    title: "Total Feature Events",
    value: "2.4M",
    change: "+18.2%",
    icon: Activity,
    description: "this week",
  },
  {
    title: "Feature Adoption Rate",
    value: "64.3%",
    change: "+5.1%",
    icon: TrendingUp,
    description: "users trying new features",
  },
  {
    title: "Power Users",
    value: "12,847",
    change: "+8.9%",
    icon: Zap,
    description: "using 5+ features daily",
  },
  {
    title: "Feature Discovery",
    value: "3.2",
    change: "+0.4",
    icon: Users,
    description: "avg features per user",
  },
]

const topFeatures = [
  {
    name: "Dashboard View",
    usage: 145234,
    users: 42341,
    growth: "+12.3%",
    adoption: 89.5,
  },
  {
    name: "Search",
    usage: 98432,
    users: 38921,
    growth: "+8.7%",
    adoption: 82.3,
  },
  {
    name: "Export Data",
    usage: 76543,
    users: 28432,
    growth: "+15.2%",
    adoption: 60.1,
  },
  {
    name: "Create Report",
    usage: 54321,
    users: 19876,
    growth: "+22.4%",
    adoption: 42.0,
  },
  {
    name: "Share Content",
    usage: 43210,
    users: 15234,
    growth: "+6.8%",
    adoption: 32.2,
  },
  {
    name: "Collaboration",
    usage: 32109,
    users: 12098,
    growth: "+18.9%",
    adoption: 25.6,
  },
]

export default function FeaturesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Feature Usage Analytics</h2>
        <p className="text-muted-foreground mt-2">Track feature adoption, engagement, and user behavior patterns</p>
      </div>

      {/* Feature Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featureMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span className="text-green-500">{metric.change}</span>
                <span>{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Usage Chart */}
      <FeatureUsageChart />

      {/* Adoption Funnel */}
      <FeatureAdoptionFunnel />

      {/* Top Features Table */}
      <Card>
        <CardHeader>
          <CardTitle>Feature Performance</CardTitle>
          <CardDescription>Most used features in the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 text-left font-medium text-muted-foreground">Feature</th>
                  <th className="pb-3 px-4 text-right font-medium text-muted-foreground">Total Usage</th>
                  <th className="pb-3 px-4 text-right font-medium text-muted-foreground">Unique Users</th>
                  <th className="pb-3 px-4 text-right font-medium text-muted-foreground">Growth</th>
                  <th className="pb-3 px-4 text-left font-medium text-muted-foreground">Adoption Rate</th>
                </tr>
              </thead>
              <tbody>
                {topFeatures.map((feature, index) => (
                  <tr key={feature.name} className="border-b border-border last:border-0">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                          {index + 1}
                        </div>
                        <span className="font-medium">{feature.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right tabular-nums">{feature.usage.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right tabular-nums text-muted-foreground">
                      {feature.users.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-green-500">{feature.growth}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${feature.adoption}%` }} />
                        </div>
                        <span className="w-12 text-right text-muted-foreground">{feature.adoption.toFixed(1)}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
