"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function RealtimeMetrics() {
  const [events, setEvents] = useState(1247)
  const [activeUsers, setActiveUsers] = useState(3421)

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents((prev) => prev + Math.floor(Math.random() * 50))
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 10) - 5)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Activity</CardTitle>
        <CardDescription>Live event stream (updates every 2 seconds)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Events in last minute</div>
            <div className="text-3xl font-bold tabular-nums">{events.toLocaleString()}</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Active users now</div>
            <div className="text-3xl font-bold tabular-nums">{activeUsers.toLocaleString()}</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              <span className="text-xs text-muted-foreground">Tracking</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
