import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor = () => {
	const editorRef = useRef(null);
	const [output, setOutput] = useState("");

	const handleEditorMount = (editor, monaco) => {
		editorRef.current = editor;
	};

	const handleRunCode = () => {
		const userCode = editorRef.current.getValue(); // get code from editor
		try {
			// Capture console.log outputs
			let logs = [];
			const originalLog = console.log;
			console.log = (...args) => {
				logs.push(args.join(" "));
				// originalLog(...args);
			};

			// eslint-disable-next-line no-eval
			let result = eval(userCode);
			console.log = originalLog;

			if (result !== undefined) {
				logs.push(result.toString());
			}
			setOutput(logs.join("\n"));
		} catch (error) {
			setOutput("❌ Error: " + error.message);
		}
	};

	return (
		<div className="m-5 rounded-xl overflow-hidden relative flex flex-col border border-gray-700 bg-[#1e1e1e]">
			{/* Editor */}
			<div className="w-full flex justify-end p-4">
				<button onClick={handleRunCode} className="font-bold cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
					Run
				</button>
			</div>
			<Editor
				height="50vh"
				defaultLanguage="javascript"
				defaultValue={`// Start coding here!\nconsole.log("Hello, Monaco!");`}
				theme="vs-dark"
				onMount={handleEditorMount}
			/>

			{/* Output Box */}
			<div className="bg-[#111] text-green-400 font-mono text-sm p-4 border-t border-gray-700 h-[150px] overflow-auto">
				{output ? output : "// Output will appear here..."}
			</div>
		</div>
	);
};

export default MonacoEditor;
