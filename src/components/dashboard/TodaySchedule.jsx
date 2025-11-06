import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Circle } from "lucide-react";

const scheduleItems = [
  {
    title: "Data Structures - Trees",
    time: "09:00 AM",
    duration: "1.5 hours",
    type: "DSA",
    completed: false,
  },
  {
    title: "React Hooks Deep Dive",
    time: "11:00 AM",
    duration: "2 hours",
    type: "Web Dev",
    completed: false,
  },
  {
    title: "Algorithm Practice - Dynamic Programming",
    time: "02:00 PM",
    duration: "1 hour",
    type: "DSA",
    completed: false,
  },
  {
    title: "Build Portfolio Project",
    time: "04:00 PM",
    duration: "2 hours",
    type: "Project",
    completed: false,
  },
  {
    title: "Code Review & Debugging",
    time: "06:30 PM",
    duration: "1 hour",
    type: "Practice",
    completed: false,
  },
];

const badgeVariants = {
  DSA: "bg-[hsl(var(--chart-1))] text-white hover:bg-[hsl(var(--chart-1))]",
  "Web Dev": "bg-success text-white hover:bg-success",
  Project: "bg-warning text-white hover:bg-warning",
  Practice: "bg-purple text-white hover:bg-purple",
};

export function TodaySchedule() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-lg font-semibold">Today's AI-Generated Schedule</h3>
          <p className="text-sm text-muted-foreground">Personalized based on your goals and progress</p>
        </div>
      </div>
      <div className="space-y-4">
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent">
            {item.completed ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-success" />
            ) : (
              <Circle className="mt-0.5 h-5 w-5 text-muted-foreground" />
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-medium">{item.title}</h4>
                <Badge className={badgeVariants[item.type]}>{item.type}</Badge>
              </div>
              <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{item.time}</span>
                <span>•</span>
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}