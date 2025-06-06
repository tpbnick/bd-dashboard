import { useState } from "react";
import {
	DocumentArrowDownIcon,
	DocumentMagnifyingGlassIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";

interface Report {
	id: string;
	title: string;
	description: string;
	date: string;
	status: "completed" | "processing" | "failed";
	type: "scan" | "audit" | "analysis";
	size: string;
}

// Temporary mock data - will be replaced with API call
const MOCK_REPORTS: Report[] = [
	{
		id: "1",
		title: "Security Scan Report",
		description: "Comprehensive security analysis of the main application",
		date: "2024-03-15T10:30:00",
		status: "completed",
		type: "scan",
		size: "2.4 MB",
	},
	{
		id: "2",
		title: "System Audit Q1",
		description: "Quarterly system audit report",
		date: "2024-03-14T15:45:00",
		status: "processing",
		type: "audit",
		size: "1.8 MB",
	},
	{
		id: "3",
		title: "Performance Analysis",
		description: "System performance metrics and analysis",
		date: "2024-03-13T09:15:00",
		status: "failed",
		type: "analysis",
		size: "3.2 MB",
	},
];

const statusColors = {
	completed: "badge-success",
	processing: "badge-warning",
	failed: "badge-error",
};

const typeColors = {
	scan: "badge-primary",
	audit: "badge-secondary",
	analysis: "badge-accent",
};

export const ReportViewer = () => {
	const [selectedType, setSelectedType] = useState<string>("all");
	const [selectedStatus, setSelectedStatus] = useState<string>("all");

	const filteredReports = MOCK_REPORTS.filter((report) => {
		const matchesType = selectedType === "all" || report.type === selectedType;
		const matchesStatus = selectedStatus === "all" || report.status === selectedStatus;
		return matchesType && matchesStatus;
	});

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body">
				{/* Controls: Stack vertically on mobile, row on md+ */}
				<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
					<h3 className="card-title">Reports</h3>
					<div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
						<select
							className="select select-bordered w-full sm:w-auto"
							value={selectedType}
							onChange={(e) => setSelectedType(e.target.value)}
						>
							<option value="all">All Types</option>
							<option value="scan">Scan</option>
							<option value="audit">Audit</option>
							<option value="analysis">Analysis</option>
						</select>
						<select
							className="select select-bordered w-full sm:w-auto"
							value={selectedStatus}
							onChange={(e) => setSelectedStatus(e.target.value)}
						>
							<option value="all">All Status</option>
							<option value="completed">Completed</option>
							<option value="processing">Processing</option>
							<option value="failed">Failed</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{filteredReports.map((report) => (
						<div key={report.id} className="card bg-base-200">
							<div className="card-body">
								<div className="flex justify-between items-start">
									<h4 className="card-title text-lg">{report.title}</h4>
									<div className="flex gap-1">
										<span className={`badge ${typeColors[report.type]}`}>
											{report.type}
										</span>
										<span className={`badge ${statusColors[report.status]}`}>
											{report.status}
										</span>
									</div>
								</div>
								<p className="text-sm text-base-content/70">{report.description}</p>
								<div className="text-xs text-base-content/50 mt-2">
									{new Date(report.date).toLocaleString()} • {report.size}
								</div>
								<div className="card-actions justify-end mt-4">
									<button
										className="btn btn-ghost btn-sm"
										title="View Report"
										aria-label="View Report"
									>
										<DocumentMagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
									</button>
									<button
										className="btn btn-ghost btn-sm"
										title="Download Report"
										aria-label="Download Report"
									>
										<DocumentArrowDownIcon className="h-4 w-4" aria-hidden="true" />
									</button>
									<button
										className="btn btn-ghost btn-sm text-error"
										title="Delete Report"
										aria-label="Delete Report"
									>
										<TrashIcon className="h-4 w-4" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Pagination/info: Stack vertically on mobile, row on md+ */}
				<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4">
					<div className="text-sm text-base-content/70">
						Showing {filteredReports.length} of {MOCK_REPORTS.length} reports
					</div>
					<div className="join self-start md:self-auto">
						<button className="join-item btn btn-sm">«</button>
						<button className="join-item btn btn-sm">1</button>
						<button className="join-item btn btn-sm">2</button>
						<button className="join-item btn btn-sm">»</button>
					</div>
				</div>
			</div>
		</div>
	);
}; 