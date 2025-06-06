import { Bars3Icon } from "@heroicons/react/24/outline";

interface HeaderProps {
	onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
	return (
		<header className="bg-base-100 shadow-sm border-b border-base-300 sticky top-0 z-30">
			<div className="flex items-center justify-between px-4 py-4 h-[73px]">
				<button className="btn btn-ghost btn-sm lg:hidden" onClick={onMenuClick}>
					<Bars3Icon className="h-6 w-6" />
				</button>

				<div className="flex items-center space-x-4 ml-auto">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<div className="bg-primary text-primary-content w-10 h-10 rounded-full flex items-center justify-center">
									<span className="text-sm font-medium">U</span>
								</div>
							</div>
						</label>
						<ul
							tabIndex={0}
							className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<a>Profile</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};
