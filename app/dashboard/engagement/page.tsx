import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EngagementCharts } from "@/components/engagement-charts"
import { UserSegments } from "@/components/user-segments"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const engagementMetrics = [
  {
    metric: "Session Frequency",
    value: "4.2",
    unit: "sessions/user/week",
    change: "+8.3%",
    trend: "up",
  },
  {
    metric: "Avg Session Duration",
    value: "8m 42s",
    change: "-2.1%",
    trend: "down",
  },
  {
    metric: "Bounce Rate",
    value: "32.4%",
    change: "-5.2%",
    trend: "up",
  },
  {
    metric: "Pages per Session",
    value: "5.7",
    change: "+0.0%",
    trend: "neutral",
  },
]

const topPages = [
  { page: "/dashboard", views: 145234, avg_time: "3m 24s", bounce: "28%" },
  { page: "/analytics", views: 98432, avg_time: "5m 12s", bounce: "22%" },
  { page: "/reports", views: 76543, avg_time: "4m 38s", bounce: "31%" },
  { page: "/settings", views: 54321, avg_time: "2m 15s", bounce: "45%" },
  { page: "/profile", views: 43210, avg_time: "1m 52s", bounce: "52%" },
]

export default function EngagementPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">User Engagement</h2>
        <p className="text-muted-foreground mt-2">Detailed analysis of user behavior and interaction patterns</p>
      </div>

      {/* Engagement Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {engagementMetrics.map((item) => (
          <Card key={item.metric}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{item.metric}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              {item.unit && <div className="text-xs text-muted-foreground mt-1">{item.unit}</div>}
              <div className="flex items-center gap-1 text-xs mt-2">
                {item.trend === "up" && <TrendingUp className="h-3 w-3 text-green-500" />}
                {item.trend === "down" && <TrendingDown className="h-3 w-3 text-red-500" />}
                {item.trend === "neutral" && <Minus className="h-3 w-3 text-muted-foreground" />}
                <span
                  className={
                    item.trend === "up"
                      ? "text-green-500"
                      : item.trend === "down"
                        ? "text-red-500"
                        : "text-muted-foreground"
                  }
                >
                  {item.change}
                </span>
                <span className="text-muted-foreground">vs last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <EngagementCharts />

      {/* User Segments */}
      <UserSegments />

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
          <CardDescription>Most visited pages in the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div
                key={page.page}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-mono text-sm font-medium">{page.page}</div>
                    <div className="text-xs text-muted-foreground">{page.views.toLocaleString()} views</div>
                  </div>
                </div>
                <div className="flex gap-8 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">Avg Time</div>
                    <div className="font-medium">{page.avg_time}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Bounce</div>
                    <div className="font-medium">{page.bounce}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
