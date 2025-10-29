"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

const statisticalTests = [
  {
    name: "T-Test: New UI vs Old UI",
    type: "Independent Samples T-Test",
    metric: "Session Duration",
    result: "Significant",
    pValue: 0.0023,
    interpretation:
      "New UI shows significantly longer session duration (580s vs 520s). Users are more engaged with the new interface.",
    recommendation: "Roll out new UI to all users",
    status: "success",
  },
  {
    name: "Chi-Square: Feature Distribution",
    type: "Chi-Square Goodness of Fit",
    metric: "Feature Usage Pattern",
    result: "Significant",
    pValue: 0.0089,
    interpretation:
      "Observed feature usage differs significantly from expected uniform distribution. Users show strong preference for certain features.",
    recommendation: "Prioritize top 3 features in UI",
    status: "success",
  },
  {
    name: "Bootstrap CI: Retention Rate",
    type: "Bootstrap Confidence Interval",
    metric: "30-Day Retention",
    result: "95% CI: [26.2%, 31.4%]",
    pValue: null,
    interpretation: "With 95% confidence, true retention rate is between 26.2% and 31.4%. Point estimate: 28.7%.",
    recommendation: "Target 35% retention in Q2",
    status: "info",
  },
  {
    name: "Conversion Test: Checkout Flow",
    type: "Proportion Z-Test",
    metric: "Conversion Rate",
    result: "Not Significant",
    pValue: 0.142,
    interpretation:
      "New checkout flow shows 3.2% improvement but not statistically significant. Need more data or larger effect size.",
    recommendation: "Continue test for 2 more weeks",
    status: "warning",
  },
]

export function StatisticalTests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistical Test Results</CardTitle>
        <CardDescription>Hypothesis testing outcomes and recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statisticalTests.map((test) => (
            <div key={test.name} className="rounded-lg border border-border p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {test.status === "success" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  {test.status === "warning" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                  {test.status === "info" && <AlertCircle className="h-5 w-5 text-blue-500" />}
                </div>

                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="font-semibold">{test.name}</h3>
                    <div className="text-sm text-muted-foreground">{test.type}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Metric: </span>
                      <span className="font-medium">{test.metric}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Result: </span>
                      <span className="font-medium">{test.result}</span>
                    </div>
                    {test.pValue !== null && (
                      <div>
                        <span className="text-muted-foreground">P-value: </span>
                        <span className="font-mono font-medium">{test.pValue.toFixed(4)}</span>
                      </div>
                    )}
                  </div>

                  <div className="rounded-lg bg-muted/50 p-3 text-sm">
                    <div className="font-medium">Interpretation:</div>
                    <div className="text-muted-foreground mt-1">{test.interpretation}</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Recommendation:</span>
                    <span className="text-muted-foreground">{test.recommendation}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-sm font-medium">Statistical Testing Guidelines</div>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <div>• Significance level (α): 0.05 (95% confidence)</div>
            <div>• Minimum sample size: 1,000 users per variant</div>
            <div>• Test duration: Minimum 1 week to account for weekly patterns</div>
            <div>• Multiple testing correction: Bonferroni method applied when running concurrent tests</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
