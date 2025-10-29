import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, TrendingUp, Users, MousePointerClick, Clock } from "lucide-react"
import { OverviewCharts } from "@/components/overview-charts"
import { RealtimeMetrics } from "@/components/realtime-metrics"

const metrics = [
  {
    title: "Daily Active Users",
    value: "47,234",
    change: "+12.3%",
    trend: "up",
    icon: Users,
    description: "vs. yesterday",
  },
  {
    title: "Monthly Active Users",
    value: "284,592",
    change: "+8.7%",
    trend: "up",
    icon: TrendingUp,
    description: "vs. last month",
  },
  {
    title: "Avg. Session Duration",
    value: "8m 42s",
    change: "-2.1%",
    trend: "down",
    icon: Clock,
    description: "vs. yesterday",
  },
  {
    title: "Total Events",
    value: "1.2M",
    change: "+15.4%",
    trend: "up",
    icon: MousePointerClick,
    description: "today",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>{metric.change}</span>
                <span>{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real-time Activity */}
      <RealtimeMetrics />

      {/* Charts */}
      <OverviewCharts />
    </div>
  )
}
