import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { User, Bell, Shield } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your profile, preferences, and notifications</p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Appearance</h3>
                <p className="text-sm text-muted-foreground">Toggle between dark and light mode</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-warning/10 p-3 text-warning">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-muted-foreground">Configure your notification preferences</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-success/10 p-3 text-success">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Privacy & Security</h3>
              <p className="text-sm text-muted-foreground">Manage your privacy settings and security options</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
