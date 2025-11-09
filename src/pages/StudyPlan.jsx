// // import { Card } from "@/components/ui/card";
// // import { Calendar } from "lucide-react";
import StudyFlow from "../components/ui/StudyFlow";

// const StudyPlan = () => {
// 	return (
// 		<div className="space-y-8">
// 			{/* Header Section */}
// 			<div>
// 				<h1 className="text-3xl font-bold">Study Plan</h1>
// 				<p className="mt-2 text-muted-foreground">Editable study schedule with drag-and-drop task planner</p>
// 			</div>

// 			<StudyFlow />
// 		</div>
// 	);
// };

// export default StudyPlan;

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { BookOpen, ArrowRight } from "lucide-react";

const StudyPlan = () => {
	return (
		<StudyFlow />
		// <Card className="p-6">
		// 	<div className="mb-4 flex items-center gap-2">
		// 		<BookOpen className="h-5 w-5 text-primary" />
		// 		<div>
		// 			<h3 className="text-lg font-semibold">Study Plans</h3>
		// 			<p className="text-sm text-muted-foreground">Generate personalized plans exclusive for yourself</p>
		// 		</div>
		// 	</div>
		// 	<div className="grid grid-cols-1 lg:grid-cols-3 rounded-lg p-6">
		// 		<div className="w-full py-4 flex flex-col justify-center items-center">
		// 			<div className="w-full sm:w-3/4">
		// 				<span className="relative left-0">Your Level</span>
		// 				<div className="w-full relative">
		// 					<select id="" className="appearance-none w-full h-10 px-3 pr-9 rounded border">
		// 						<option value="Beginner">Beginners</option>
		// 						<option value="Medium">Medium</option>
		// 						<option value="Advanced">Advanced</option>
		// 					</select>
		// 					<span className="absolute right-3 top-1/4">▼</span>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="w-full py-4 flex flex-col justify-center items-center">
		// 			<div className="w-full sm:w-3/4">
		// 				<span className="relative left-0">Hours per Week</span>
		// 				<div className="w-full relative">
		// 					<select id="" className="appearance-none w-full h-10 px-3 pr-9 rounded border">
		// 						<option value="5">5</option>
		// 						<option value="10" selected>
		// 							10
		// 						</option>
		// 						<option value="15">15</option>
		// 						<option value="20">20</option>
		// 						<option value="25">25</option>
		// 						<option value="30">30</option>
		// 					</select>
		// 					<span className="absolute right-2 top-1/4">▼</span>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="w-full py-4 flex flex-col justify-center items-center">
		// 			<div className="w-full sm:w-3/4">
		// 				<span className="relative left-0">Learning Track</span>
		// 				<div className="w-full relative">
		// 					<select id="" className="appearance-none w-full h-10 px-3 pr-9 rounded border">
		// 						<option value="Frontend + DSA">Frontend + DSA</option>
		// 						<option value="Backend + DSA">Backend + DSA</option>
		// 						<option value="Full Stack + DSA">Full Stack + DSA</option>
		// 						<option value="Mobile Dev + DSA">Mobile Dev + DSA</option>
		// 						<option value="AI/ML + DSA">AI/ML + DSA</option>
		// 						<option value="Data Science + DSA">Data Science + DSA</option>
		// 						<option value="Dev Ops + DSA">Dev Ops + DSA</option>
		// 						<option value="Game Dev + DSA">Game Dev + DSA</option>
		// 						<option value="Cyber Security + DSA">Cyber Security + DSA</option>
		// 						<option value="DSA Only">DSA Only</option>
		// 					</select>
		// 					<span className="absolute right-2 top-1/4">▼</span>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<Button variant="link" className="mt-4 w-full justify-between p-0 text-primary">
		// 		Next Tip
		// 		<ArrowRight className="h-4 w-4" />
		// 	</Button>
		// </Card>
	);
};

export default StudyPlan;
