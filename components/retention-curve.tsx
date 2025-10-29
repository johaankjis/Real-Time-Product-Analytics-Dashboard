"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const retentionData = [
  { day: 0, rate: 100 },
  { day: 1, rate: 68.4 },
  { day: 3, rate: 52.1 },
  { day: 7, rate: 42.1 },
  { day: 14, rate: 35.8 },
  { day: 21, rate: 31.2 },
  { day: 30, rate: 28.7 },
  { day: 60, rate: 22.4 },
  { day: 90, rate: 18.9 },
]

const cohortComparison = [
  { day: 0, current: 100, previous: 100 },
  { day: 1, current: 68.4, previous: 65.2 },
  { day: 3, current: 52.1, previous: 48.3 },
  { day: 7, current: 42.1, previous: 38.9 },
  { day: 14, current: 35.8, previous: 32.1 },
  { day: 21, current: 31.2, previous: 27.8 },
  { day: 30, current: 28.7, previous: 24.3 },
]

export function RetentionCurve() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Retention Curve (90 Days)</CardTitle>
          <CardDescription>Percentage of users returning over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: "Retention Rate",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
                <XAxis
                  dataKey="day"
                  stroke="rgb(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  label={{ value: "Days Since Signup", position: "insideBottom", offset: -5 }}
                />
                <YAxis
                  stroke="rgb(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="rgb(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ fill: "rgb(var(--chart-1))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cohort Comparison</CardTitle>
          <CardDescription>Current week vs previous month cohorts</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              current: {
                label: "Current Cohort",
                color: "hsl(var(--chart-2))",
              },
              previous: {
                label: "Previous Cohort",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cohortComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" />
                <XAxis
                  dataKey="day"
                  stroke="rgb(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  label={{ value: "Days Since Signup", position: "insideBottom", offset: -5 }}
                />
                <YAxis
                  stroke="rgb(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="rgb(var(--chart-2))"
                  strokeWidth={2}
                  dot={{ fill: "rgb(var(--chart-2))", r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="rgb(var(--chart-3))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "rgb(var(--chart-3))", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
