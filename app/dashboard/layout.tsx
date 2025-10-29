import { BarChart3, Users, TrendingUp, TestTube, Activity } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Activity },
  { name: "User Engagement", href: "/dashboard/engagement", icon: Users },
  { name: "Retention Analysis", href: "/dashboard/retention", icon: TrendingUp },
  { name: "Feature Usage", href: "/dashboard/features", icon: BarChart3 },
  { name: "Hypothesis Testing", href: "/dashboard/testing", icon: TestTube },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="flex h-16 items-center border-b border-border px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="font-semibold text-lg">Analytics</span>
          </div>
        </div>

        <nav className="space-y-1 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-border p-4">
          <div className="text-xs text-muted-foreground">
            <div className="font-medium text-foreground mb-1">Production</div>
            <div>Last updated: 2 min ago</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Processing 1.2M events/day</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="border-b border-border bg-card">
          <div className="flex h-16 items-center justify-between px-8">
            <h1 className="text-2xl font-semibold">Real-Time Analytics Dashboard</h1>
            <div className="flex items-center gap-4">
              <select className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm">
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <button className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
