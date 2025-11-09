import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const timetableData = [
  {
    day: "Monday",
    sessions: [
      { time: "09:00-11:00", subject: "Data Structures", type: "DSA" },
      { time: "14:00-16:00", subject: "Web Development", type: "Web Dev" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "10:00-12:00", subject: "Algorithms", type: "DSA" },
      { time: "15:00-17:00", subject: "React Projects", type: "Web Dev" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "09:00-11:00", subject: "Problem Solving", type: "DSA" },
      { time: "14:00-16:00", subject: "System Design", type: "Project" },
    ],
  },
  {
    day: "Thursday",
    current: true,
    sessions: [
      { time: "10:00-12:00", subject: "DSA Practice", type: "DSA" },
      { time: "13:00-17:00", subject: "Full Stack Dev", type: "Web Dev" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "09:00-11:00", subject: "Code Review", type: "Practice" },
      { time: "14:00-17:00", subject: "Portfolio Project", type: "Project" },
    ],
  },
];

const badgeVariants = {
  DSA: "bg-[hsl(var(--chart-1))] text-white hover:bg-[hsl(var(--chart-1))]",
  "Web Dev": "bg-success text-white hover:bg-success",
  Project: "bg-warning text-white hover:bg-warning",
  Practice: "bg-purple text-white hover:bg-purple",
};

export function WeeklyTimetable() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-lg font-semibold">Weekly Timetable</h3>
          <p className="text-sm text-muted-foreground">Your structured learning schedule</p>
        </div>
      </div>
      <div className="space-y-3">
        {timetableData.map((day, index) => (
          <div
            key={index}
            className={`rounded-lg border p-4 ${
              day.current ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-semibold">{day.day}</h4>
              {day.current && <Badge variant="outline" className="border-primary text-primary">Today</Badge>}
            </div>
            <div className="space-y-2">
              {day.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className="flex items-center justify-between rounded-md bg-accent/50 p-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-1 w-1 rounded-full ${
                      session.type === "DSA" ? "bg-[hsl(var(--chart-1))]" :
                      session.type === "Web Dev" ? "bg-success" :
                      session.type === "Project" ? "bg-warning" : "bg-purple"
                    }`} />
                    <span className="text-sm font-mono text-muted-foreground">{session.time}</span>
                    <span className="text-sm font-medium">{session.subject}</span>
                  </div>
                  <Badge className={badgeVariants[session.type]} variant="secondary">
                    {session.type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}