import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor = () => {
	const [fullScreen, setFullScreen] = useState(false);
	const editorRef = useRef(null);
	const containerRef = useRef(null);
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

	// Fullscreen toggle handler
	const handleToggleFullscreen = () => {
		if (!fullScreen) {
			if (containerRef.current.requestFullscreen) {
				containerRef.current.requestFullscreen();
			} else if (containerRef.current.webkitRequestFullscreen) {
				containerRef.current.webkitRequestFullscreen();
			} else if (containerRef.current.mozRequestFullScreen) {
				containerRef.current.mozRequestFullScreen();
			} else if (containerRef.current.msRequestFullscreen) {
				containerRef.current.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
		setFullScreen(!fullScreen);
	};

	// Listen for fullscreen change to update state
	// This ensures the UI stays in sync with actual fullscreen state
	// and works with ESC key or browser exit
	// Only add listener once
	// eslint-disable-next-line react-hooks/exhaustive-deps
	if (typeof window !== "undefined") {
		window.onfullscreenchange = () => {
			setFullScreen(!!document.fullscreenElement);
		};
		window.onwebkitfullscreenchange = () => {
			setFullScreen(!!document.webkitFullscreenElement);
		};
		window.onmozfullscreenchange = () => {
			setFullScreen(!!document.mozFullScreenElement);
		};
		window.MSFullscreenChange = () => {
			setFullScreen(!!document.msFullscreenElement);
		};
	}

	return (
		<div
			ref={containerRef}
			className={`m-5 rounded-xl overflow-hidden relative flex flex-col border border-gray-700 bg-[#1e1e1e]${
				fullScreen && "fixed inset-0 z-50 m-0 rounded-none h-screen w-fit"
			}`}
		>
			{/* Editor */}
			<div className="w-full flex justify-between p-4">
				<button
					onClick={handleToggleFullscreen}
					className="font-bold cursor-pointer px-3 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-md text-white"
					title={fullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 fill-white">
						<path d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z" />
					</svg>
				</button>
				<button onClick={handleRunCode} className="font-bold cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
					Run
				</button>
			</div>
			<div className="flex justify-center pb-4">
				<Editor
					width={fullScreen ? "98vw" : "80vw"}
					height={fullScreen ? "calc(100vh - 210px)" : "50vh"}
					defaultLanguage="javascript"
					defaultValue={`// Your code goes here!\n`}
					theme="vs-dark"
					onMount={handleEditorMount}
					// className="rounded-xl overflow-hidden"
				/>
			</div>

			{/* Output Box */}
			<div className="bg-[#111] text-green-400 font-mono text-sm p-4 border-t border-gray-700 h-[150px] overflow-auto">
				{output ? output : "// Output will appear here..."}
			</div>
		</div>
	);
};

export default MonacoEditor;
