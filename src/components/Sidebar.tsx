import {
	XMarkIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
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
		{ icon: ChartBarIcon, label: "Analytics", path: "/analytics" },
		{ icon: UsersIcon, label: "Admin", path: "/admin" },
		{ icon: Cog6ToothIcon, label: "Settings", path: "/settings" },
	];

	return (
		<div
			className={`fixed inset-y-0 left-0 z-50 bg-base-100 shadow-sm transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} ${isCollapsed ? "lg:w-16" : "lg:w-64"} w-64`}
		>
			<div className="flex items-center shadow-sm border-b border-base-300 px-4 py-4 h-[73px]">
				{isCollapsed ? (
					<div className="flex items-center justify-between w-full">
						<img
							src="/src/assets/images/bd.png"
							alt="Bright Defense Logo"
							className="h-14 w-auto"
						/>
						<button
							className="btn btn-ghost btn-sm hidden lg:flex"
							onClick={onToggleCollapse}
							title="Expand sidebar"
						>
							<ChevronDoubleRightIcon className="h-5 w-5" />
						</button>
					</div>
				) : (
					<>
						<div className="flex items-center space-x-3">
							<img
								src="/src/assets/images/bd.png"
								alt="Bright Defense Logo"
								className="h-14 w-auto"
							/>
							<h1 className="text-lg text-white whitespace-nowrap">bright defense</h1>
						</div>

						<div className="flex items-center space-x-2">
							<button className="btn btn-ghost btn-sm lg:hidden" onClick={onClose}>
								<XMarkIcon className="h-6 w-6" />
							</button>
							<button
								className="btn btn-ghost btn-sm hidden lg:flex"
								onClick={onToggleCollapse}
								title="Collapse sidebar"
							>
								<ChevronDoubleLeftIcon className="h-5 w-5" />
							</button>
						</div>
					</>
				)}
			</div>

			{/* Navigation Links */}
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
						transition-all duration-300
					`}
								data-tip={isCollapsed ? item.label : undefined}
								onClick={() => onClose()}
							>
								<item.icon className="h-6 w-6 flex-shrink-0" />
								<span
									className={`ml-3 whitespace-nowrap transition-all duration-300 ${
										isCollapsed ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
									}`}
								>
									{item.label}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
