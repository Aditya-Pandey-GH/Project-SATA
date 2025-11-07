import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const CodingLab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Coding Lab</h1>
        <p className="mt-2 text-muted-foreground">
          Integrated coding environment for practice and projects
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12">
        <Code2 className="mb-4 h-16 w-16 text-muted-foreground" />
        <h3 className="mb-2 text-xl font-semibold">Coding Environment Coming Soon</h3>
        <p className="text-center text-muted-foreground">
          An IDE-like interface with code editor, compiler, and testing tools will be available here.
        </p>
      </Card>
    </div>
  );
};

export default CodingLab;
