export const Dashboard = () => {
	return (
		<>
			<div className="mb-6">
				<h2 className="text-2xl font-bold mb-2">Welcome to BD Dashboard</h2>
				<p className="text-base-content/70">
					Here's what's happening with your application today.
				</p>
			</div>

			{/* Stats cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Total Users</div>
					<div className="stat-value text-primary">1,234</div>
					<div className="stat-desc">↗︎ 30 (2%)</div>
				</div>
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Active Sessions</div>
					<div className="stat-value text-secondary">10</div>
					<div className="stat-desc">↗︎ 1 (10%)</div>
				</div>
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Reports Generated</div>
					<div className="stat-value">12</div>
					<div className="stat-desc">↗︎ 1 (14%)</div>
				</div>
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Analytics Available</div>
					<div className="stat-value text-accent">8</div>
					<div className="stat-desc">↗︎ 2 (25%)</div>
				</div>
			</div>

			{/* Content cards */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h3 className="card-title">Recent Activity</h3>
						<div className="space-y-3">
							<div className="alert alert-info">
								<span>New user registered: john.doe@example.com</span>
							</div>
							<div className="alert alert-success">
								<span>Scan results for Company X completed</span>
							</div>
							<div className="alert alert-warning">
								<span>Error pulling scan results</span>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h3 className="card-title">Quick Actions</h3>
						<div className="grid grid-cols-2 gap-4">
							<button className="btn btn-primary">Add User</button>
							<button className="btn btn-secondary">Generate Report</button>
							<button className="btn btn-accent">Run Scan</button>
							<button className="btn btn-outline">View Analytics</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
