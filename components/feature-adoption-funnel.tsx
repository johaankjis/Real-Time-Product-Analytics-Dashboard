"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const funnelStages = [
  { stage: "Discovered Feature", users: 47234, percentage: 100, color: "bg-blue-500" },
  { stage: "Clicked to Try", users: 38921, percentage: 82.4, color: "bg-blue-500" },
  { stage: "First Use", users: 32109, percentage: 68.0, color: "bg-green-500" },
  { stage: "Second Use", users: 24876, percentage: 52.7, color: "bg-green-500" },
  { stage: "Regular User (5+ uses)", users: 18432, percentage: 39.0, color: "bg-purple-500" },
  { stage: "Power User (Daily)", users: 12847, percentage: 27.2, color: "bg-purple-500" },
]

export function FeatureAdoptionFunnel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Adoption Funnel</CardTitle>
        <CardDescription>User journey from discovery to power user (New Feature: Export Data)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {funnelStages.map((stage, index) => {
            const dropoff =
              index > 0 ? ((funnelStages[index - 1].users - stage.users) / funnelStages[index - 1].users) * 100 : 0

            return (
              <div key={stage.stage} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {index + 1}
                    </div>
                    <span className="font-medium">{stage.stage}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {index > 0 && <span className="text-xs text-red-500">-{dropoff.toFixed(1)}% drop-off</span>}
                    <span className="text-muted-foreground">{stage.users.toLocaleString()} users</span>
                    <span className="w-12 text-right font-medium">{stage.percentage.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="h-12 overflow-hidden rounded-lg bg-muted">
                  <div
                    className={`flex h-full items-center justify-end px-4 text-sm font-medium text-white ${stage.color}`}
                    style={{ width: `${stage.percentage}%` }}
                  >
                    {stage.percentage > 20 && `${stage.percentage.toFixed(1)}%`}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-sm font-medium">Funnel Insights</div>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <div>• Conversion from discovery to first use: 68.0% (above target of 60%)</div>
            <div>• Biggest drop-off: First use to second use (-15.3%)</div>
            <div>• Power user conversion: 27.2% of discoverers become daily users</div>
            <div>• Recommendation: Focus on Day 2-7 engagement to improve second use rate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
