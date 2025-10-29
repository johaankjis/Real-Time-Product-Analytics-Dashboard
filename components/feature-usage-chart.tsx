"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const dailyUsageData = Array.from({ length: 30 }, (_, i) => ({
  date: `Day ${i + 1}`,
  dashboard: Math.floor(4000 + Math.random() * 1000 + i * 20),
  search: Math.floor(3000 + Math.random() * 800 + i * 15),
  export: Math.floor(2000 + Math.random() * 600 + i * 10),
  reports: Math.floor(1500 + Math.random() * 400 + i * 8),
}))

const featureComparisonData = [
  { feature: "Dashboard", usage: 145234, change: 12.3 },
  { feature: "Search", usage: 98432, change: 8.7 },
  { feature: "Export", usage: 76543, change: 15.2 },
  { feature: "Reports", usage: 54321, change: 22.4 },
  { feature: "Share", usage: 43210, change: 6.8 },
  { feature: "Collab", usage: 32109, change: 18.9 },
]

export function FeatureUsageChart() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Feature Usage Trends (30 Days)</CardTitle>
          <CardDescription>Daily usage patterns for top features</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              dashboard: { label: "Dashboard", color: "hsl(var(--chart-1))" },
              search: { label: "Search", color: "hsl(var(--chart-2))" },
              export: { label: "Export", color: "hsl(var(--chart-3))" },
              reports: { label: "Reports", color: "hsl(var(--chart-4))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
                <XAxis dataKey="date" stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <YAxis stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="dashboard" stroke="rgb(var(--chart-1))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="search" stroke="rgb(var(--chart-2))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="export" stroke="rgb(var(--chart-3))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="reports" stroke="rgb(var(--chart-4))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Comparison</CardTitle>
          <CardDescription>Total usage by feature (last 30 days)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              usage: { label: "Usage", color: "hsl(var(--chart-1))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureComparisonData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
                <XAxis type="number" stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="feature"
                  stroke="rgb(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  width={80}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="usage" fill="rgb(var(--chart-1))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
