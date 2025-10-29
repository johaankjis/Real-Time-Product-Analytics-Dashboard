"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const testResults = [
  { test: "Onboarding v2", lift: 15.1, significant: true },
  { test: "Email Timing", lift: 19.4, significant: true },
  { test: "CTA Color", lift: 8.2, significant: true },
  { test: "Dashboard", lift: 9.5, significant: false },
  { test: "Pricing Page", lift: -2.3, significant: false },
  { test: "Search UI", lift: 12.7, significant: true },
]

export function ABTestResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>A/B Test Performance</CardTitle>
        <CardDescription>Lift percentage for recent experiments (green = statistically significant)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            lift: { label: "Lift %", color: "hsl(var(--chart-2))" },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={testResults} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
              <XAxis type="number" stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis
                type="category"
                dataKey="test"
                stroke="rgb(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                width={100}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="lift" radius={[0, 4, 4, 0]}>
                {testResults.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.significant ? "rgb(var(--chart-2))" : "rgb(var(--muted-foreground))"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-green-500" />
            <span>Statistically significant (p &lt; 0.05)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-muted-foreground" />
            <span>Not significant</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
