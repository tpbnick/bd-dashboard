import { useState } from "react";
import { UserViewer } from "../components/UserViewer";
import { ReportViewer } from "../components/ReportViewer";

type Tab = "users" | "reports";

export const Admin = () => {
	const [activeTab, setActiveTab] = useState<Tab>("users");

	return (
		<div className="space-y-6">
			<div className="mb-6">
				<h2 className="text-2xl font-bold mb-2">Admin Dashboard</h2>
				<p className="text-base-content/70">
					Manage users and view system reports.
				</p>
			</div>

			<div className="tabs tabs-boxed">
				<button
					className={`tab ${activeTab === "users" ? "tab-active" : ""}`}
					onClick={() => setActiveTab("users")}
				>
					Users
				</button>
				<button
					className={`tab ${activeTab === "reports" ? "tab-active" : ""}`}
					onClick={() => setActiveTab("reports")}
				>
					Reports
				</button>
			</div>

			<div className="mt-4">
				{activeTab === "users" ? <UserViewer /> : <ReportViewer />}
			</div>
		</div>
	);
};
