import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RetentionCohortTable } from "@/components/retention-cohort-table"
import { RetentionCurve } from "@/components/retention-curve"
import { TrendingUp, Users, Calendar, Target } from "lucide-react"

const retentionMetrics = [
  {
    title: "Day 1 Retention",
    value: "68.4%",
    change: "+3.2%",
    icon: Target,
    description: "Users returning next day",
  },
  {
    title: "Day 7 Retention",
    value: "42.1%",
    change: "+1.8%",
    icon: Calendar,
    description: "Users active after 1 week",
  },
  {
    title: "Day 30 Retention",
    value: "28.7%",
    change: "+2.4%",
    icon: TrendingUp,
    description: "Users active after 1 month",
  },
  {
    title: "Cohort Size (This Week)",
    value: "8,432",
    change: "+12.3%",
    icon: Users,
    description: "New users this week",
  },
]

export default function RetentionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Retention Analysis</h2>
        <p className="text-muted-foreground mt-2">Track user retention patterns and cohort behavior over time</p>
      </div>

      {/* Retention Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {retentionMetrics.map((metric) => (
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

      {/* Retention Curve */}
      <RetentionCurve />

      {/* Cohort Analysis Table */}
      <RetentionCohortTable />

      {/* Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
          <CardDescription>Automated retention analysis findings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <div className="font-medium">Improved Day 7 Retention</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Recent cohorts show 15% improvement in week 1 retention compared to 3 months ago. New onboarding flow
                  appears to be working.
                </div>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                <Users className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <div className="font-medium">Enterprise Users Show Higher Retention</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Enterprise tier users have 2.3x higher 30-day retention (64%) compared to free tier (28%).
                </div>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                <Target className="h-4 w-4 text-yellow-500" />
              </div>
              <div>
                <div className="font-medium">Critical Drop-off at Day 3</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Significant retention drop between Day 1 (68%) and Day 3 (52%). Consider implementing Day 2-3
                  engagement campaigns.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
