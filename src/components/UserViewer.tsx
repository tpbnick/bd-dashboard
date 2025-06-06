import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface User {
	id: string;
	name: string;
	email: string;
	role: string;
	status: "active" | "inactive" | "pending";
	lastLogin: string;
}

// Temporary mock data - will be replaced with API call
const MOCK_USERS: User[] = [
	{
		id: "1",
		name: "John Doe",
		email: "john.doe@example.com",
		role: "Admin",
		status: "active",
		lastLogin: "2024-03-15T10:30:00",
	},
	{
		id: "2",
		name: "Jane Smith",
		email: "jane.smith@example.com",
		role: "User",
		status: "active",
		lastLogin: "2024-03-14T15:45:00",
	},
	{
		id: "3",
		name: "Bob Johnson",
		email: "bob.johnson@example.com",
		role: "User",
		status: "inactive",
		lastLogin: "2024-03-10T09:15:00",
	},
];

const statusColors = {
	active: "badge-success",
	inactive: "badge-error",
	pending: "badge-warning",
};

export const UserViewer = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedRole, setSelectedRole] = useState<string>("all");

	const filteredUsers = MOCK_USERS.filter((user) => {
		const matchesSearch =
			user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			user.email.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesRole = selectedRole === "all" || user.role === selectedRole;
		return matchesSearch && matchesRole;
	});

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body">
				<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
					<h3 className="card-title">Users</h3>
					<div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
						<div className="relative w-full">
							<input
								type="text"
								placeholder="Search users..."
								className="input input-bordered w-full pr-10"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							{!searchQuery && (
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none">
									<MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
								</span>
							)}
						</div>
						<select
							className="select select-bordered w-full sm:w-auto"
							value={selectedRole}
							onChange={(e) => setSelectedRole(e.target.value)}
						>
							<option value="all">All Roles</option>
							<option value="Admin">Admin</option>
							<option value="User">User</option>
						</select>
					</div>
				</div>

				<div className="overflow-x-auto">
					<table className="table table-zebra min-w-full">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Status</th>
								<th>Last Login</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredUsers.map((user) => (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
									<td>
										<span className={`badge ${statusColors[user.status]}`}>
											{user.status}
										</span>
									</td>
									<td>{new Date(user.lastLogin).toLocaleString()}</td>
									<td>
										<div className="flex gap-2">
											<button className="btn btn-ghost btn-xs">Edit</button>
											<button className="btn btn-ghost btn-xs text-error">
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4">
					<div className="text-sm text-base-content/70">
						Showing {filteredUsers.length} of {MOCK_USERS.length} users
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