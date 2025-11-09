import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap } from "lucide-react";

const Login = () => {
	const navigate = useNavigate();
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate login
		setTimeout(() => {
			toast({
				title: "Welcome back!",
				description: "You've successfully logged in.",
			});
			setIsLoading(false);
			navigate("/dashboard");
		}, 1000);
	};

	const handleSignup = (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate signup
		setTimeout(() => {
			toast({
				title: "Account created!",
				description: "Welcome to your learning dashboard.",
			});
			setIsLoading(false);
			navigate("/dashboard");
		}, 1000);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
			<div className="w-full max-w-md">
				{/* Header */}
				<div className="mb-8 text-center">
					<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
						<GraduationCap className="h-8 w-8 text-primary" />
					</div>
					<h1 className="text-3xl font-bold text-gradient">Learning Dashboard</h1>
					<p className="mt-2 text-muted-foreground">Track your progress, achieve your goals</p>
				</div>

				{/* Auth Card */}
				<Card className="border-primary/20 shadow-glow">
					<CardHeader>
						<CardTitle>Welcome</CardTitle>
						<CardDescription>Sign in to your account or create a new one</CardDescription>
					</CardHeader>

					<CardContent>
						<Tabs defaultValue="login" className="w-full">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="login">Login</TabsTrigger>
								<TabsTrigger value="signup">Sign Up</TabsTrigger>
							</TabsList>

							{/* Login Form */}
							<TabsContent value="login">
								<form onSubmit={handleLogin} className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="student@example.com" required />
									</div>
									<div className="space-y-2">
										<Label htmlFor="password">Password</Label>
										<Input id="password" type="password" placeholder="••••••••" required />
									</div>
									<Button type="submit" className="w-full" disabled={isLoading}>
										{isLoading ? "Signing in..." : "Sign In"}
									</Button>
								</form>
							</TabsContent>

							{/* Signup Form */}
							<TabsContent value="signup">
								<form onSubmit={handleSignup} className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="signup-name">Full Name</Label>
										<Input id="signup-name" type="text" placeholder="John Doe" required />
									</div>
									<div className="space-y-2">
										<Label htmlFor="signup-email">Email</Label>
										<Input id="signup-email" type="email" placeholder="student@example.com" required />
									</div>
									<div className="space-y-2">
										<Label htmlFor="signup-password">Password</Label>
										<Input id="signup-password" type="password" placeholder="••••••••" required />
									</div>
									<Button type="submit" className="w-full" disabled={isLoading}>
										{isLoading ? "Creating account..." : "Create Account"}
									</Button>
								</form>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Login;
