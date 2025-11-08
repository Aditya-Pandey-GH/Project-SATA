import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import StudyPlan from "./pages/StudyPlan";
import CodingLab from "./pages/CodingLab";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			<TooltipProvider>
				{/* Global Toasters */}
				<Toaster />
				<Sonner />

				{/* Routing */}
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/dashboard"
							element={
								<Layout>
									<Dashboard />
								</Layout>
							}
						/>
						<Route
							path="/progress"
							element={
								<Layout>
									<Progress />
								</Layout>
							}
						/>
						<Route
							path="/study-plan"
							element={
								<Layout>
									<StudyPlan />
								</Layout>
							}
						/>
						<Route
							path="/coding-lab"
							element={
								<Layout>
									<CodingLab />
								</Layout>
							}
						/>
						<Route
							path="/goals"
							element={
								<Layout>
									<Goals />
								</Layout>
							}
						/>
						<Route
							path="/settings"
							element={
								<Layout>
									<Settings />
								</Layout>
							}
						/>
						{/* Catch-All Route for 404 */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</ThemeProvider>
	</QueryClientProvider>
);

export default App;
