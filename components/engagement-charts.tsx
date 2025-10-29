"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const sessionData = Array.from({ length: 30 }, (_, i) => ({
  date: `Day ${i + 1}`,
  sessions: Math.floor(8000 + Math.random() * 3000 + i * 50),
  duration: Math.floor(480 + Math.random() * 120),
}))

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  active: Math.floor(500 + Math.random() * 1500 + Math.sin(i / 3) * 800),
}))

export function EngagementCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Session Trends (30 Days)</CardTitle>
          <CardDescription>Daily session count and average duration</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sessions: {
                label: "Sessions",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sessionData}>
                <defs>
                  <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(var(--chart-1))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="rgb(var(--chart-1))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
                <XAxis dataKey="date" stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <YAxis stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="sessions"
                  stroke="rgb(var(--chart-1))"
                  fill="url(#sessionGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Users by Hour (Today)</CardTitle>
          <CardDescription>Hourly distribution of active users</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              active: {
                label: "Active Users",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
                <XAxis dataKey="hour" stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <YAxis stroke="rgb(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="active" fill="rgb(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
