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
					<div className="stat-desc">↗︎ 400 (22%)</div>
				</div>
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Active Sessions</div>
					<div className="stat-value text-secondary">89</div>
					<div className="stat-desc">↗︎ 90 (14%)</div>
				</div>
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Revenue</div>
					<div className="stat-value">$12,345</div>
					<div className="stat-desc">↘︎ 90 (14%)</div>
				</div>
				<div className="stat bg-base-100 rounded-lg shadow">
					<div className="stat-title">Conversion Rate</div>
					<div className="stat-value text-accent">3.2%</div>
					<div className="stat-desc">↗︎ 40 (2%)</div>
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
								<span>Payment processed: $299.99</span>
							</div>
							<div className="alert alert-warning">
								<span>Server maintenance scheduled</span>
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
							<button className="btn btn-accent">Send Newsletter</button>
							<button className="btn btn-outline">View Analytics</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
