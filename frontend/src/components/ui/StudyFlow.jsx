import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// --- MAIN COMPONENT ---
export default function StudyFlow() {
	const [theme, setTheme] = useState(() => {
		const saved = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return saved || (prefersDark ? "dark" : "light");
	});

	const [schedules, setSchedules] = useState(() => JSON.parse(localStorage.getItem("schedules") || "[]"));
	const [progress, setProgress] = useState(() => JSON.parse(localStorage.getItem("progress") || "{}"));
	const [quizData, setQuizData] = useState(() => JSON.parse(localStorage.getItem("quizData") || "{}"));
	const [quizProgress, setQuizProgress] = useState(() => JSON.parse(localStorage.getItem("quizProgress") || "{}"));

	const [currentWeek, setCurrentWeek] = useState(schedules.length ? schedules.length - 1 : 0);

	const [level, setLevel] = useState("Beginner");
	const [hours, setHours] = useState("10");
	const [track, setTrack] = useState("Frontend + DSA");
	const [isGenerating, setIsGenerating] = useState(false);
	const [error, setError] = useState("");
	const [setupCollapsed, setSetupCollapsed] = useState(schedules.length > 0);

	const [chatOpen, setChatOpen] = useState(false);
	const [chatMessages, setChatMessages] = useState([
		{
			type: "bot",
			text: `Hi! I’m your study assistant. I can now <strong>instantly edit</strong> your schedule!<br><br>
             Try: "Make it 20 hours and switch to AI/ML"<br>Or: "Move arrays to Friday and make Saturday lighter"`,
		},
	]);
	const [chatInput, setChatInput] = useState("");

	// --- Persist data locally ---
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	useEffect(() => {
		localStorage.setItem("schedules", JSON.stringify(schedules));
		localStorage.setItem("progress", JSON.stringify(progress));
		localStorage.setItem("quizData", JSON.stringify(quizData));
		localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
	}, [schedules, progress, quizData, quizProgress]);

	// --- Utility ---
	const formatTime = (raw) => {
		if (raw === "-" || raw === "Rest") return "-";
		const num = typeof raw === "number" ? raw : parseFloat(raw);
		if (isNaN(num)) return raw;
		const h = Math.floor(num / 60);
		const m = num % 60;
		return `${h ? h + "hr" : ""}${m ? m + "min" : h ? "" : "0min"}`.trim();
	};

	const calculateStreak = () => {
		let streak = 0;
		for (let i = schedules.length - 1; i >= 0; i--) {
			const weekId = `week - ${i}`;
			const prog = progress[weekId] || {};
			const week = schedules[i];
			if (Object.keys(prog).length >= week.rows.length - 1) streak++;
			else break;
		}
		return streak;
	};

	// --- Generate AI Study Plan ---
	const generateSchedule = async () => {
		setIsGenerating(true);
		setError("");

		const devFocus = track === "DSA Only" ? "DSA Only" : track.replace(" + DSA", "");
		const prompt = `
Generate ONLY a clean Markdown table (7 rows: Mon-Sun) for ${level} level, ${hours} hrs/week.
Focus: ${devFocus}
Columns: | Day | DSA Topic | Dev Topic | Time |
Rules:
- Sunday: "Sunday" | "Rest" | "Rest" | "-"
- Distribute ${hours} hrs evenly across Mon-Sat
- Use realistic topics and proper time format (e.g., "1hr 30min")`;

		try {
			const res = await fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${
					import.meta.env.VITE_GEMINI_API_KEY
				}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
				}
			);

			if (!res.ok) throw new Error(res.status);
			const data = await res.json();

			const txt = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
			const lines = txt.split("\n").filter((l) => l.startsWith("|"));
			if (lines.length < 9) throw new Error("Invalid AI response");

			const rows = lines.slice(2).map((l) =>
				l
					.split("|")
					.map((c) => c.trim())
					.filter(Boolean)
			);
			const newSchedules = [...schedules, { rows, track }];

			setSchedules(newSchedules);
			setCurrentWeek(newSchedules.length - 1);
			setProgress({ ...progress, [`week - ${newSchedules.length - 1}`]: {} });
			setSetupCollapsed(true);

			setChatMessages((prev) => [...prev, { type: "bot", text: "✅ New week generated successfully!" }]);
		} catch (e) {
			console.error(e);
			setError(e.message);
		} finally {
			setIsGenerating(false);
		}
	};

	// --- Handle user progress ---
	const toggleProgress = (weekId, type, dayIndex, checked) => {
		setProgress((prev) => {
			const updated = { ...prev };
			if (!updated[weekId]) updated[weekId] = {};
			const key = type - dayIndex;
			checked ? (updated[weekId][key] = true) : delete updated[weekId][key];
			return updated;
		});
	};

	// --- Chatbot UI only ---
	const sendChatMessage = () => {
		if (!chatInput.trim()) return;
		setChatMessages((prev) => [
			...prev,
			{ type: "user", text: chatInput },
			{ type: "bot", text: '<div class="italic text-gray-400">Thinking...</div>' },
		]);
		setChatInput("");
	};

	const streak = calculateStreak();

	return (
		<div className={`w-full h-screen flex ${theme === "dark" ? "dark" : ""}`}>
			<div className="w-full h-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-8 flex flex-col overflow-hidden">
				{/* Header */}
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">SATA</h1>
					<p className="text-gray-500 text-lg">Your DSA + Dev Learning Companion</p>
				</header>

				{/* Setup Section */}
				<section className="flex-shrink-0">
					<div
						className="flex items-center justify-between cursor-pointer p-3 bg-black/5 dark:bg-white/5 rounded-xl mb-5 hover:opacity-80 transition-opacity"
						onClick={() => setSetupCollapsed(!setupCollapsed)}
					>
						<span className="font-medium">Edit Settings</span>
						{setupCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
					</div>

					<div
						className={`transition-all duration-300 overflow-hidden ${
							setupCollapsed ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
						}`}
					>
						<SetupForm
							level={level}
							hours={hours}
							track={track}
							setLevel={setLevel}
							setHours={setHours}
							setTrack={setTrack}
							generateSchedule={generateSchedule}
							isGenerating={isGenerating}
						/>
					</div>
				</section>

				{/* Schedule View */}
				{schedules.length > 0 && (
					<div className="flex-1 overflow-y-auto">
						<ScheduleView
							schedules={schedules}
							currentWeek={currentWeek}
							setCurrentWeek={setCurrentWeek}
							progress={progress}
							toggleProgress={toggleProgress}
							formatTime={formatTime}
							streak={streak}
						/>
					</div>
				)}

				{error && <div className="mt-4 p-4 bg-red-900/20 border-l-4 border-red-500 rounded-xl text-red-200">{error}</div>}

				{/* Theme Switch */}
				<div className="flex-shrink-0 text-center mt-6 pt-5 border-t border-slate-300 dark:border-slate-700">
					<label className="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							checked={theme === "dark"}
							onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="sr-only peer"
						/>
						<div className="relative w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-green-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:w-6 after:h-6 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
						<span className="ml-3 text-sm font-medium">Dark Mode</span>
					</label>
				</div>
			</div>

			{/* Chat Icon */}
			<div
				className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full flex items-center justify-center w-14 h-14 text-2xl cursor-pointer hover:scale-110 transition-transform shadow-xl z-50"
				onClick={() => setChatOpen(!chatOpen)}
			>
				💬
			</div>

			{chatOpen && <ChatBox chatMessages={chatMessages} chatInput={chatInput} setChatInput={setChatInput} sendChatMessage={sendChatMessage} />}
		</div>
	);
}

// --- COMPONENTS ---
function SetupForm({ level, hours, track, setLevel, setHours, setTrack, generateSchedule, isGenerating }) {
	return (
		<div className="space-y-5 mb-6">
			{[
				{ label: "Your Level", value: level, setter: setLevel, options: ["Beginner", "Intermediate", "Advanced"] },
				{
					label: "Hours per Week",
					value: hours,
					setter: setHours,
					options: ["5", "10", "15", "20", "25", "30"].map((h) => h + "hrs"),
				},
				{
					label: "Learning Track",
					value: track,
					setter: setTrack,
					options: [
						"Frontend + DSA",
						"Backend + DSA",
						"Full Stack + DSA",
						"AI/ML + DSA",
						"DevOps + DSA",
						"Data Science + DSA",
						"Cybersecurity + DSA",
						"DSA Only",
					],
				},
			].map(({ label, value, setter, options }, idx) => (
				<div key={idx}>
					<label className="block mb-2 font-semibold text-sm">{label}</label>
					<select
						value={value}
						onChange={(e) => setter(e.target.value)}
						className="w-full p-3.5 border-2 border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
					>
						{options.map((opt, i) => (
							<option key={i} value={opt.replace(" hrs", "")}>
								{opt}
							</option>
						))}
					</select>
				</div>
			))}

			<button
				onClick={generateSchedule}
				disabled={isGenerating}
				className="w-full p-4 mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-xl transition-colors disabled:opacity-50"
			>
				{isGenerating ? "Generating..." : "Generate My Schedule"}
			</button>
		</div>
	);
}

function ScheduleView({ schedules, currentWeek, setCurrentWeek, progress, toggleProgress, formatTime, streak }) {
	return (
		<div className="space-y-6">
			{/* Week Navigation */}
			<div className="flex items-center justify-between">
				<button
					onClick={() => setCurrentWeek(Math.max(0, currentWeek - 1))}
					disabled={currentWeek === 0}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
				>
					Previous Week
				</button>
				<div className="text-center">
					<div className="text-xl font-bold">Week {currentWeek + 1}</div>
					<div className="text-sm text-gray-500">🔥 {streak} Week Streak</div>
				</div>
				<button
					onClick={() => setCurrentWeek(Math.min(schedules.length - 1, currentWeek + 1))}
					disabled={currentWeek === schedules.length - 1}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
				>
					Next Week
				</button>
			</div>

			{/* Schedule Table */}
			<div className="overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-slate-100 dark:bg-slate-800">
							<th className="p-4 text-left">Day</th>
							<th className="p-4 text-left">DSA Topic</th>
							<th className="p-4 text-left">Dev Topic</th>
							<th className="p-4 text-left">Time</th>
							<th className="p-4 text-center">Progress</th>
						</tr>
					</thead>
					<tbody>
						{schedules[currentWeek]?.rows.map((row, idx) => {
							const weekId = `week-${currentWeek}`;
							const isDSACompleted = progress[weekId]?.[`dsa-${idx}`];
							const isDevCompleted = progress[weekId]?.[`dev-${idx}`];

							return (
								<tr key={idx} className="border-b border-slate-200 dark:border-slate-700">
									<td className="p-4 font-medium">{row[0]}</td>
									<td className="p-4">{row[1]}</td>
									<td className="p-4">{row[2]}</td>
									<td className="p-4">{formatTime(row[3])}</td>
									<td className="p-4">
										{row[1] !== "Rest" && (
											<div className="flex justify-center gap-4">
												<label className="inline-flex items-center">
													<input
														type="checkbox"
														checked={isDSACompleted}
														onChange={(e) => toggleProgress(weekId, "dsa", idx, e.target.checked)}
														className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
													/>
													<span className="ml-2">DSA</span>
												</label>
												<label className="inline-flex items-center">
													<input
														type="checkbox"
														checked={isDevCompleted}
														onChange={(e) => toggleProgress(weekId, "dev", idx, e.target.checked)}
														className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
													/>
													<span className="ml-2">Dev</span>
												</label>
											</div>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function ChatBox({ chatMessages, chatInput, setChatInput, sendChatMessage }) {
	return (
		<div className="fixed bottom-24 right-5 w-96 h-[520px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-300 dark:border-slate-700">
			<div className="p-4 bg-blue-500 text-white font-semibold text-center rounded-t-2xl">StudyFlow Assistant</div>
			<div className="flex-1 p-4 overflow-y-auto space-y-3">
				{chatMessages.map((msg, i) => (
					<div
						key={i}
						className={`max-w-[80%] p-3 rounded-2xl text-sm ${
							msg.type === "user"
								? "ml-auto bg-blue-100 dark:bg-blue-900 text-slate-800 dark:text-slate-200"
								: "bg-slate-100 dark:bg-slate-700"
						}`}
						dangerouslySetInnerHTML={{ __html: msg.text }}
					/>
				))}
			</div>
			<div className="p-3 border-t border-slate-300 dark:border-slate-700 flex gap-2">
				<input
					type="text"
					value={chatInput}
					onChange={(e) => setChatInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
					placeholder="Type your request..."
					className="flex-1 p-3 border-2 border-slate-300 dark:border-slate-600 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
				/>
				<button onClick={sendChatMessage} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
					Send
				</button>
			</div>
		</div>
	);
}
