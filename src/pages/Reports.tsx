import { ReportViewer } from "../components/ReportViewer";

export const Reports = () => {
	return (
		<div className="space-y-6">
			<div className="mb-6">
				<h2 className="text-2xl font-bold mb-2">Your Reports</h2>
				<p className="text-base-content/70">
					Download your available reports below.
				</p>
			</div>
			<ReportViewer mode="download-only" />
		</div>
	);
} 