import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const Progress = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="mt-2 text-muted-foreground">
          Track your study streak, completed hours, and task breakdowns
        </p>
      </div>

      {/* Placeholder Section */}
      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <TrendingUp className="mb-4 h-16 w-16 text-muted-foreground" />
        <h3 className="mb-2 text-xl font-semibold">Progress Tracking Coming Soon</h3>
        <p className="text-muted-foreground">
          Detailed analytics and progress visualization will be available here.
        </p>
      </Card>
    </div>
  );
};

export default Progress;
