import { Card } from "@/components/ui/card";

export function StatCard({ title, value, subtitle, change, changeType, icon: Icon, iconColor }) {
  const changeColorClass =
    changeType === "positive" ? "text-success" : changeType === "negative" ? "text-destructive" : "text-muted-foreground";

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          <p className={`mt-2 text-xs font-medium ${changeColorClass}`}>{change}</p>
        </div>
        <div className={`rounded-lg p-3 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}