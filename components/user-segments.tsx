"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const segmentData = [
  { name: "Free", value: 45234, color: "rgb(var(--chart-1))" },
  { name: "Pro", value: 28492, color: "rgb(var(--chart-2))" },
  { name: "Enterprise", value: 12876, color: "rgb(var(--chart-3))" },
]

const regionData = [
  { name: "North America", value: 38, color: "rgb(var(--chart-1))" },
  { name: "Europe", value: 28, color: "rgb(var(--chart-2))" },
  { name: "Asia Pacific", value: 22, color: "rgb(var(--chart-3))" },
  { name: "Latin America", value: 12, color: "rgb(var(--chart-4))" },
]

export function UserSegments() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>User Segments</CardTitle>
          <CardDescription>Distribution by subscription tier</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8">
            <ChartContainer
              config={{
                free: { label: "Free", color: "hsl(var(--chart-1))" },
                pro: { label: "Pro", color: "hsl(var(--chart-2))" },
                enterprise: { label: "Enterprise", color: "hsl(var(--chart-3))" },
              }}
              className="h-[200px] w-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={segmentData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="flex-1 space-y-3">
              {segmentData.map((segment) => (
                <div key={segment.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color }} />
                    <span className="text-sm font-medium">{segment.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{segment.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Users by region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionData.map((region) => (
              <div key={region.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{region.name}</span>
                  <span className="text-muted-foreground">{region.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${region.value}%`, backgroundColor: region.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
