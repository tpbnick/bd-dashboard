import {
	XMarkIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	HomeIcon,
	ChartBarIcon,
	UsersIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";
import bdLogo from "/src/assets/images/bd.png";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
	isCollapsed: boolean;
	onToggleCollapse: () => void;
}

interface MenuItem {
	icon: React.ComponentType<{ className?: string }>;
	label: string;
	path: string;
}

const MENU_ITEMS: MenuItem[] = [
	{ icon: HomeIcon, label: "Dashboard", path: "/" },
	{ icon: ChartBarIcon, label: "Reports", path: "/reports" },
	{ icon: UsersIcon, label: "Admin", path: "/admin" },
	{ icon: Cog6ToothIcon, label: "Settings", path: "/settings" },
];

const MenuItem = ({ item, isActive, isCollapsed, onClose }: {
	item: MenuItem;
	isActive: boolean;
	isCollapsed: boolean;
	onClose: () => void;
}) => {
	const baseClasses = "flex items-center rounded-lg transition-all duration-300";
	const activeClasses = isActive ? "bg-primary text-primary-content" : "hover:bg-base-200";
	const sizeClasses = isCollapsed
		? "tooltip tooltip-right justify-center w-12 h-12 mx-auto"
		: "px-4 py-3";

	return (
		<Link
			to={item.path}
			className={`${baseClasses} ${activeClasses} ${sizeClasses}`}
			data-tip={isCollapsed ? item.label : undefined}
			onClick={onClose}
			aria-current={isActive ? "page" : undefined}
		>
			<item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
			{!isCollapsed && (
				<span className="ml-3 whitespace-nowrap transition-opacity duration-300">
					{item.label}
				</span>
			)}
		</Link>
	);
};

export const Sidebar = ({
	isOpen,
	onClose,
	isCollapsed,
	onToggleCollapse,
}: SidebarProps) => {
	const location = useLocation();

	const sidebarClasses = `
		fixed inset-y-0 left-0 z-50 bg-base-100 shadow-sm transform transition-all duration-300 ease-in-out
		lg:translate-x-0 lg:static lg:inset-0
		${isOpen ? "translate-x-0" : "-translate-x-full"}
		${isCollapsed ? "lg:w-16" : "lg:w-64"} w-64
	`;

	return (
		<div className={sidebarClasses}>
			<div className="flex items-center px-4 py-4 h-[73px] border-b border-base-300">
				{isCollapsed ? (
					<div className="flex items-center justify-between w-full">
						<img src={bdLogo} alt="Bright Defense Logo" className="h-14 w-auto" />
						<button
							className="btn btn-ghost btn-sm hidden lg:flex"
							onClick={onToggleCollapse}
							title="Expand sidebar"
							aria-label="Expand sidebar"
						>
							<ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</div>
				) : (
					<>
						<div className="flex items-center space-x-3">
							<img src={bdLogo} alt="Bright Defense Logo" className="h-14 w-auto" />
							<h1 className="text-lg text-base-content whitespace-nowrap">
								bright defense
							</h1>
						</div>

						<div className="flex items-center space-x-2">
							<button 
								className="btn btn-ghost btn-sm lg:hidden" 
								onClick={onClose}
								aria-label="Close sidebar"
							>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
							<button
								className="btn btn-ghost btn-sm hidden lg:flex"
								onClick={onToggleCollapse}
								title="Collapse sidebar"
								aria-label="Collapse sidebar"
							>
								<ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</>
				)}
			</div>

			<div className="h-full border-r border-base-300">
				<nav className={`${isCollapsed ? "p-2" : "p-4"} h-full`}>
					<ul className="space-y-2">
						{MENU_ITEMS.map((item, index) => (
							<li key={index}>
								<MenuItem
									item={item}
									isActive={location.pathname === item.path}
									isCollapsed={isCollapsed}
									onClose={onClose}
								/>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};
