import { Card } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", dsa: 45, webdev: 30 },
  { day: "Tue", dsa: 52, webdev: 38 },
  { day: "Wed", dsa: 61, webdev: 45 },
  { day: "Thu", dsa: 70, webdev: 55 },
  { day: "Fri", dsa: 75, webdev: 62 },
  { day: "Sat", dsa: 82, webdev: 70 },
  { day: "Sun", dsa: 90, webdev: 78 },
];

export function WeeklyProgress() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Weekly Progress</h3>
        <p className="text-sm text-muted-foreground">Your learning journey this week</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDsa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorWebdev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="day" className="text-xs" stroke="hsl(var(--muted-foreground))" />
          <YAxis className="text-xs" stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Area type="monotone" dataKey="dsa" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorDsa)" strokeWidth={2} />
          <Area
            type="monotone"
            dataKey="webdev"
            stroke="hsl(var(--success))"
            fillOpacity={1}
            fill="url(#colorWebdev)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
          <span className="text-sm text-muted-foreground">DSA</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">Web Development</span>
        </div>
      </div>
    </Card>
  );
}