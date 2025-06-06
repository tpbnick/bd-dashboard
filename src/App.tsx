import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	// Apply saved theme on app load
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "dark";
		document.documentElement.setAttribute("data-theme", savedTheme);
	}, []);

	return (
		<Router>
			<div className="min-h-screen bg-base-200 flex">
				{/* Mobile sidebar backdrop */}
				{sidebarOpen && (
					<div
						className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
						onClick={() => setSidebarOpen(false)}
					/>
				)}

				<Sidebar
					isOpen={sidebarOpen}
					onClose={() => setSidebarOpen(false)}
					isCollapsed={sidebarCollapsed}
					onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
				/>

				<div className="flex-1 flex flex-col min-w-0">
					<Header onMenuClick={() => setSidebarOpen(true)} />
					<main className="flex-1 p-6 overflow-auto">
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route
								path="/analytics"
								element={<div>Analytics Page (Coming Soon)</div>}
							/>
							<Route path="/users" element={<div>Users Page (Coming Soon)</div>} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
