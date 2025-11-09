// import { Card } from "@/components/ui/card";
// import { Code2 } from "lucide-react";
import MonacoEditor from "../components/ui/MonacoEditor";

const CodingLab = () => {
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold">Coding Lab</h1>
				<p className="mt-2 text-muted-foreground">Integrated coding environment for practice and projects</p>
			</div>

			<MonacoEditor />
			{/* <Card className="">
				<Code2 className="mb-4 h-16 w-16 text-muted-foreground" />
				<h3 className="mb-2 text-xl font-semibold">Coding Environment Coming Soon</h3>
				<p className="text-center text-muted-foreground">
					An IDE-like interface with code editor, compiler, and testing tools will be available here.
				</p>
			</Card> */}
		</div>
	);
};

export default CodingLab;
