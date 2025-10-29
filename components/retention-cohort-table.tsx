"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cohortData = [
  {
    cohort: "Week 1 (Jan 1-7)",
    size: 8432,
    week0: 100,
    week1: 68,
    week2: 52,
    week3: 42,
    week4: 36,
    week8: 28,
    week12: 22,
  },
  {
    cohort: "Week 2 (Jan 8-14)",
    size: 7891,
    week0: 100,
    week1: 71,
    week2: 55,
    week3: 45,
    week4: 38,
    week8: 30,
    week12: null,
  },
  {
    cohort: "Week 3 (Jan 15-21)",
    size: 9234,
    week0: 100,
    week1: 69,
    week2: 53,
    week3: 43,
    week4: 37,
    week8: null,
    week12: null,
  },
  {
    cohort: "Week 4 (Jan 22-28)",
    size: 8765,
    week0: 100,
    week1: 72,
    week2: 56,
    week3: 46,
    week4: null,
    week8: null,
    week12: null,
  },
]

function getRetentionColor(value: number | null): string {
  if (value === null) return "bg-muted"
  if (value >= 60) return "bg-green-500/20 text-green-500"
  if (value >= 40) return "bg-yellow-500/20 text-yellow-500"
  if (value >= 20) return "bg-orange-500/20 text-orange-500"
  return "bg-red-500/20 text-red-500"
}

export function RetentionCohortTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cohort Retention Table</CardTitle>
        <CardDescription>Weekly cohort retention rates (percentage of users returning)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-medium text-muted-foreground">Cohort</th>
                <th className="pb-3 px-2 text-right font-medium text-muted-foreground">Size</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 0</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 1</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 2</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 3</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 4</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 8</th>
                <th className="pb-3 px-2 text-center font-medium text-muted-foreground">Week 12</th>
              </tr>
            </thead>
            <tbody>
              {cohortData.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  <td className="py-3 pr-4 font-medium">{row.cohort}</td>
                  <td className="py-3 px-2 text-right text-muted-foreground">{row.size.toLocaleString()}</td>
                  <td className="py-3 px-2">
                    <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week0)}`}>
                      {row.week0}%
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week1)}`}>
                      {row.week1}%
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week2)}`}>
                      {row.week2}%
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week3)}`}>
                      {row.week3}%
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    {row.week4 !== null ? (
                      <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week4)}`}>
                        {row.week4}%
                      </div>
                    ) : (
                      <div className="rounded bg-muted px-2 py-1 text-center text-muted-foreground">-</div>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {row.week8 !== null ? (
                      <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week8)}`}>
                        {row.week8}%
                      </div>
                    ) : (
                      <div className="rounded bg-muted px-2 py-1 text-center text-muted-foreground">-</div>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {row.week12 !== null ? (
                      <div className={`rounded px-2 py-1 text-center font-medium ${getRetentionColor(row.week12)}`}>
                        {row.week12}%
                      </div>
                    ) : (
                      <div className="rounded bg-muted px-2 py-1 text-center text-muted-foreground">-</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-green-500/20" />
            <span>60%+ retention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-yellow-500/20" />
            <span>40-60% retention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-orange-500/20" />
            <span>20-40% retention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-red-500/20" />
            <span>&lt;20% retention</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
