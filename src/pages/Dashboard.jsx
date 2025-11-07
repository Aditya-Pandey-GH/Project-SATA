import { StatCard } from "@/components/dashboard/StatCard";
import { WeeklyProgress } from "@/components/dashboard/WeeklyProgress";
import { TodaySchedule } from "@/components/dashboard/TodaySchedule";
import { WeeklyTimetable } from "@/components/dashboard/WeeklyTimetable";
import { AIMentorTip } from "@/components/dashboard/AIMentorTip";
import { Flame, Clock, CheckCircle, Trophy } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Alex! 👋</h1>
        <p className="mt-2 text-muted-foreground">
          Here's your learning progress and today's personalized study plan
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Current Streak"
          value="12"
          subtitle="days in a row"
          change="↑ 3 days vs last week"
          changeType="positive"
          icon={Flame}
          iconColor="bg-info/10 text-info"
        />
        <StatCard
          title="Study Hours"
          value="47.5"
          subtitle="this week"
          change="↑ 8.5 hours vs last week"
          changeType="positive"
          icon={Clock}
          iconColor="bg-primary/10 text-primary"
        />
        <StatCard
          title="Tasks Completed"
          value="24/30"
          subtitle="this week"
          change="↑ 4 tasks vs last week"
          changeType="positive"
          icon={CheckCircle}
          iconColor="bg-success/10 text-success"
        />
        <StatCard
          title="Achievements"
          value="18"
          subtitle="badges earned"
          change="↑ 2 new vs last week"
          changeType="positive"
          icon={Trophy}
          iconColor="bg-warning/10 text-warning"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyProgress />
        </div>
        <div>
          <TodaySchedule />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyTimetable />
        </div>
        <div>
          <AIMentorTip />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
