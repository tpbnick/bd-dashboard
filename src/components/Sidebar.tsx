import {
	XMarkIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
	HomeIcon,
	ChartBarIcon,
	UsersIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
	isCollapsed: boolean;
	onToggleCollapse: () => void;
}

export const Sidebar = ({
	isOpen,
	onClose,
	isCollapsed,
	onToggleCollapse,
}: SidebarProps) => {
	const location = useLocation();

	const menuItems = [
		{ icon: HomeIcon, label: "Dashboard", path: "/" },
		{ icon: ChartBarIcon, label: "Results", path: "/results" },
		{ icon: UsersIcon, label: "Admin", path: "/admin" },
		{ icon: Cog6ToothIcon, label: "Settings", path: "/settings" },
	];

	return (
		<div
			className={`fixed inset-y-0 left-0 z-50 bg-base-100 shadow-lg transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} ${isCollapsed ? "lg:w-16" : "lg:w-64"} w-64`}
		>
			{/* Header with logo */}
			<div
				className={`flex items-center border-b border-base-300 p-4 ${
					isCollapsed ? "justify-center" : "justify-between"
				}`}
			>
				<div className="flex items-center space-x-3">
					{/* React Logo - always visible */}
					<div className="w-8 h-8 flex-shrink-0">
						<svg
							viewBox="-11.5 -10.23174 23 20.46348"
							className="w-8 h-8 text-primary"
						>
							<circle cx="0" cy="0" r="2.05" fill="currentColor" />
							<g stroke="currentColor" strokeWidth="1" fill="none">
								<ellipse rx="11" ry="4.2" />
								<ellipse rx="11" ry="4.2" transform="rotate(60)" />
								<ellipse rx="11" ry="4.2" transform="rotate(120)" />
							</g>
						</svg>
					</div>
					{/* Company name - hidden when collapsed */}
					{!isCollapsed && <h1 className="text-xl font-bold">Company</h1>}
				</div>

				{!isCollapsed && (
					<>
						{/* Mobile close button */}
						<button className="btn btn-ghost btn-sm lg:hidden" onClick={onClose}>
							<XMarkIcon className="h-6 w-6" />
						</button>

						{/* Desktop collapse button */}
						<button
							className="btn btn-ghost btn-sm hidden lg:flex"
							onClick={onToggleCollapse}
						>
							<ChevronLeftIcon className="h-6 w-6" />
						</button>
					</>
				)}

				{/* Collapse button when collapsed */}
				{isCollapsed && (
					<button
						className="btn btn-ghost btn-sm hidden lg:flex absolute top-4 right-2"
						onClick={onToggleCollapse}
					>
						<ChevronRightIcon className="h-6 w-6" />
					</button>
				)}
			</div>

			{/* Navigation */}
			<nav className={`${isCollapsed ? "p-2" : "p-4"}`}>
				<ul className="space-y-2">
					{menuItems.map((item, index) => (
						<li key={index}>
							<Link
								to={item.path}
								className={`
                  ${
																			location.pathname === item.path
																				? "bg-primary text-primary-content"
																				: "hover:bg-base-200"
																		}
                  ${
																			isCollapsed
																				? "tooltip tooltip-right flex items-center justify-center w-12 h-12 rounded-lg mx-auto"
																				: "flex items-center px-4 py-3 rounded-lg"
																		}
                  transition-colors duration-200
                `}
								data-tip={isCollapsed ? item.label : undefined}
								onClick={() => onClose()} // Close mobile sidebar on navigation
							>
								<item.icon className="h-6 w-6" />
								{!isCollapsed && <span className="ml-3">{item.label}</span>}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
