import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Target, TrendingUp, Zap, Brain, Clock } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Landing() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
			{/* Header */}
			<header className="border-b border-border/50 backdrop-blur-sm">
				<div className="container mx-auto flex items-center justify-between px-6 py-4">
					<div className="flex items-center gap-2">
						<GraduationCap className="h-8 w-8 text-primary" />
						<span className="text-2xl font-bold text-gradient">StudyFlow AI</span>
					</div>
					<div className="flex items-center gap-2">
						<Button onClick={() => navigate("/login")} variant="outline">
							Login
						</Button>
						<ThemeToggle />
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-6 py-20">
				<div className="mx-auto max-w-4xl space-y-6 text-center">
					<h1 className="text-5xl font-bold tracking-tight md:text-6xl">
						Your AI-Powered <span className="text-gradient">Learning Companion</span>
					</h1>
					<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
						Track progress, master skills, and achieve your learning goals with personalized insights and smart scheduling.
					</p>
					<div className="flex justify-center gap-4 pt-4">
						<Button size="lg" onClick={() => navigate("/login")} className="shadow-glow">
							Get Started Free
						</Button>
						<Button size="lg" variant="outline" onClick={() => navigate("/login")}>
							Sign In
						</Button>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="container mx-auto grid gap-8 px-6 py-20 md:grid-cols-3">
				<Card className="border-primary/20">
					<CardContent className="space-y-3 pt-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Brain className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">AI Mentor Tips</h3>
						<p className="text-muted-foreground">Get personalized study recommendations and learning insights powered by AI.</p>
					</CardContent>
				</Card>

				<Card className="border-primary/20">
					<CardContent className="space-y-3 pt-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<TrendingUp className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">Progress Tracking</h3>
						<p className="text-muted-foreground">Visualize your learning journey with detailed charts and achievement metrics.</p>
					</CardContent>
				</Card>

				<Card className="border-primary/20">
					<CardContent className="space-y-3 pt-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Clock className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">Smart Scheduling</h3>
						<p className="text-muted-foreground">Optimize your study time with intelligent timetables and task management.</p>
					</CardContent>
				</Card>

				<Card className="border-primary/20">
					<CardContent className="space-y-3 pt-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Target className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">Goal Setting</h3>
						<p className="text-muted-foreground">Set, track, and achieve your learning objectives with milestone tracking.</p>
					</CardContent>
				</Card>

				<Card className="border-primary/20">
					<CardContent className="space-y-3 pt-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Zap className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">Streak System</h3>
						<p className="text-muted-foreground">Stay motivated with daily streaks and unlock achievements as you learn.</p>
					</CardContent>
				</Card>

				<Card className="border-primary/20">
					<CardContent className="space-y-3 pt-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<GraduationCap className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">Coding Lab</h3>
						<p className="text-muted-foreground">Practice coding skills with integrated tools and track your progress.</p>
					</CardContent>
				</Card>
			</section>

			{/* CTA Section */}
			<section className="container mx-auto px-6 py-20">
				<Card className="border-primary/20 shadow-glow">
					<CardContent className="space-y-6 py-12 text-center">
						<h2 className="text-3xl font-bold md:text-4xl">Ready to Level Up Your Learning?</h2>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Join thousands of learners who are achieving their goals with StudyFlow AI.
						</p>
						<Button size="lg" onClick={() => navigate("/login")} className="shadow-glow">
							Start Your Journey
						</Button>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
