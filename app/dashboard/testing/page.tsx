import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ABTestResults } from "@/components/ab-test-results"
import { StatisticalTests } from "@/components/statistical-tests"
import { TestTube, TrendingUp, CheckCircle2, XCircle } from "lucide-react"

const testMetrics = [
  {
    title: "Active Experiments",
    value: "8",
    change: "+2 this week",
    icon: TestTube,
    description: "running tests",
  },
  {
    title: "Completed Tests",
    value: "47",
    change: "32 significant",
    icon: CheckCircle2,
    description: "all time",
  },
  {
    title: "Success Rate",
    value: "68.1%",
    change: "+5.2%",
    icon: TrendingUp,
    description: "tests showing improvement",
  },
  {
    title: "Failed Tests",
    value: "15",
    change: "31.9%",
    icon: XCircle,
    description: "no significant impact",
  },
]

const activeTests = [
  {
    name: "New Onboarding Flow",
    status: "running",
    metric: "Activation Rate",
    control: "42.3%",
    treatment: "48.7%",
    lift: "+15.1%",
    confidence: 95,
    significant: true,
  },
  {
    name: "Dashboard Redesign",
    status: "running",
    metric: "Session Duration",
    control: "8m 24s",
    treatment: "9m 12s",
    lift: "+9.5%",
    confidence: 89,
    significant: false,
  },
  {
    name: "Email Notification Timing",
    status: "running",
    metric: "Click-through Rate",
    control: "12.4%",
    treatment: "14.8%",
    lift: "+19.4%",
    confidence: 98,
    significant: true,
  },
]

export default function TestingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Hypothesis Testing</h2>
        <p className="text-muted-foreground mt-2">
          Statistical analysis and A/B testing results for product experiments
        </p>
      </div>

      {/* Test Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {testMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span>{metric.change}</span>
                <span>• {metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Active A/B Tests</CardTitle>
          <CardDescription>Currently running experiments and their preliminary results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeTests.map((test) => (
              <div key={test.name} className="rounded-lg border border-border p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{test.name}</h3>
                      <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500">
                        {test.status}
                      </span>
                      {test.significant && (
                        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500">
                          Significant
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">Testing: {test.metric}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-500">{test.lift}</div>
                    <div className="text-xs text-muted-foreground">{test.confidence}% confidence</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="text-xs text-muted-foreground">Control (A)</div>
                    <div className="text-lg font-semibold">{test.control}</div>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3">
                    <div className="text-xs text-muted-foreground">Treatment (B)</div>
                    <div className="text-lg font-semibold">{test.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* A/B Test Results */}
      <ABTestResults />

      {/* Statistical Tests */}
      <StatisticalTests />
    </div>
  )
}
