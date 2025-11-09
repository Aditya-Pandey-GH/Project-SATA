import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";

const Goals = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold">Goals</h1>
        <p className="mt-2 text-muted-foreground">
          Set and track learning goals with progress bars and completion badges
        </p>
      </div>

      {/* Placeholder Card */}
      <Card className="flex flex-col items-center justify-center p-12">
        <Target className="mb-4 h-16 w-16 text-muted-foreground" />
        <h3 className="mb-2 text-xl font-semibold">Goal Tracking Coming Soon</h3>
        <p className="text-center text-muted-foreground">
          Define your learning objectives and monitor your progress towards achieving them.
        </p>
      </Card>
    </div>
  );
};

export default Goals;
