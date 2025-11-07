import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const StudyPlan = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold">Study Plan</h1>
        <p className="mt-2 text-muted-foreground">
          Editable study schedule with drag-and-drop task planner
        </p>
      </div>

      {/* Placeholder Section */}
      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <Calendar className="mb-4 h-16 w-16 text-muted-foreground" />
        <h3 className="mb-2 text-xl font-semibold">Study Planner Coming Soon</h3>
        <p className="text-muted-foreground">
          Create and customize your personalized study schedule with AI assistance
        </p>
      </Card>
    </div>
  );
};

export default StudyPlan;
