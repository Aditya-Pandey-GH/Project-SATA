import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function AIMentorTip() {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-lg font-semibold">AI Mentor Tip</h3>
          <p className="text-sm text-muted-foreground">Personalized insights from your AI study assistant</p>
        </div>
      </div>
      <div className="rounded-lg bg-gradient-to-br from-primary/10 to-info/10 p-6">
        <h4 className="mb-2 font-semibold text-primary">Optimize Your Learning Pattern</h4>
        <p className="text-sm text-muted-foreground">
          Based on your progress, you're most productive between 9-11 AM. Consider tackling complex DSA problems during this window for
          better retention.
        </p>
        <div className="mt-4 h-1 w-full rounded-full bg-muted">
          <div className="h-1 w-3/4 rounded-full bg-primary" />
        </div>
      </div>
      <Button variant="link" className="mt-4 w-full justify-between p-0 text-primary">
        Next Tip
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Card>
  );
}