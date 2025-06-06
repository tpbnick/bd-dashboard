import { useState, useEffect } from "react";
import {
	ArrowTopRightOnSquareIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/24/outline";

interface Theme {
	name: string;
	colors: {
		primary: string;
		secondary: string;
		accent: string;
	};
}

const THEMES: Theme[] = [
	"light",
	"dark",
	"cupcake",
	"bumblebee",
	"emerald",
	"corporate",
	"synthwave",
	"retro",
	"cyberpunk",
	"valentine",
	"halloween",
	"garden",
	"forest",
	"aqua",
	"lofi",
	"pastel",
	"fantasy",
	"wireframe",
	"black",
	"luxury",
	"dracula",
	"cmyk",
	"autumn",
	"business",
	"acid",
	"lemonade",
	"night",
	"coffee",
	"winter",
].map(name => ({
	name,
	colors: {
		primary: "bg-primary",
		secondary: "bg-secondary",
		accent: "bg-accent",
	},
}));

interface ThemePreviewProps {
	theme: Theme;
	isSelected: boolean;
	onSelect: (theme: string) => void;
}

const ThemePreview = ({ theme, isSelected, onSelect }: ThemePreviewProps) => {
	return (
		<div
			className={`cursor-pointer border-2 rounded-lg p-3 transition-all hover:scale-105 ${
				isSelected
					? "border-primary shadow-lg"
					: "border-base-300 hover:border-base-content/20"
			}`}
			onClick={() => onSelect(theme.name)}
			data-theme={theme.name}
			role="button"
			aria-pressed={isSelected}
			aria-label={`Select ${theme.name} theme`}
		>
			<div className="space-y-2">
				<div className="flex space-x-1">
					<div className={`w-3 h-3 rounded ${theme.colors.primary}`} aria-hidden="true" />
					<div className={`w-3 h-3 rounded ${theme.colors.secondary}`} aria-hidden="true" />
					<div className={`w-3 h-3 rounded ${theme.colors.accent}`} aria-hidden="true" />
				</div>
				<div className="space-y-1">
					<div className="h-2 bg-base-content/20 rounded" aria-hidden="true" />
					<div className="h-2 bg-base-content/10 rounded w-3/4" aria-hidden="true" />
				</div>
			</div>

			<p className="text-xs font-medium mt-2 capitalize text-center">
				{theme.name}
			</p>

			{isSelected && (
				<div className="text-center mt-1">
					<span className="text-xs text-primary font-bold">✓ Selected</span>
				</div>
			)}
		</div>
	);
};

interface SystemInfoItemProps {
	label: string;
	value: React.ReactNode;
}

const SystemInfoItem = ({ label, value }: SystemInfoItemProps) => (
	<div className="flex justify-between items-center">
		<span className="text-base-content/70">{label}</span>
		{value}
	</div>
);

export const Settings = () => {
	const [currentTheme, setCurrentTheme] = useState(() => {
		return localStorage.getItem("theme") || "dark";
	});
	const [isThemeGridOpen, setIsThemeGridOpen] = useState(false);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", currentTheme);
		localStorage.setItem("theme", currentTheme);
	}, [currentTheme]);

	const handleThemeChange = (theme: string) => {
		setCurrentTheme(theme);
	};

	const formatDate = (dateString: string) => {
		try {
			return new Date(dateString).toLocaleDateString();
		} catch {
			return "Unknown";
		}
	};

	return (
		<div className="space-y-6">
			<div className="mb-6">
				<h2 className="text-2xl font-bold mb-2">Settings</h2>
				<p className="text-base-content/70">
					Manage your application preferences and system settings.
				</p>
			</div>

			<div className="card bg-base-100 shadow-xl">
				<div className="card-body">
					<h3 className="card-title">Theme Settings</h3>
					<p className="text-base-content/70 mb-4">
						Choose your preferred theme for the application.
					</p>

					<div className="alert alert-success mb-4">
						<span>
							Current theme: <strong className="capitalize">{currentTheme}</strong>
						</span>
					</div>

					<div className="collapse bg-base-200">
						<input
							type="checkbox"
							checked={isThemeGridOpen}
							onChange={(e) => setIsThemeGridOpen(e.target.checked)}
							aria-label="Toggle theme grid"
						/>
						<div className="collapse-title text-xl font-medium flex items-center justify-between cursor-pointer">
							<span>Browse All Themes</span>
							{isThemeGridOpen ? (
								<ChevronUpIcon className="w-5 h-5" aria-hidden="true" />
							) : (
								<ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
							)}
						</div>
						<div className="collapse-content">
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-4">
								{THEMES.map((theme) => (
									<ThemePreview
										key={theme.name}
										theme={theme}
										isSelected={currentTheme === theme.name}
										onSelect={handleThemeChange}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="card bg-base-100 shadow-xl">
				<div className="card-body">
					<h3 className="card-title">System Information</h3>
					<div className="space-y-3">
						<SystemInfoItem
							label="Application Version"
							value={
								<a
									href={`https://github.com/tpbnick/bd-dashboard/commit/${__GIT_COMMIT_HASH__}`}
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium font-mono text-sm text-primary hover:text-primary-focus underline transition-colors flex items-center gap-1"
								>
									{__GIT_COMMIT_HASH__}
									<ArrowTopRightOnSquareIcon className="w-3 h-3" aria-hidden="true" />
								</a>
							}
						/>
						<SystemInfoItem
							label="Build Date"
							value={<span className="font-medium">{formatDate(__GIT_COMMIT_DATE__)}</span>}
						/>
						<SystemInfoItem
							label="Environment"
							value={
								<span className="font-medium">
									{import.meta.env.MODE === "development" ? "Development" : "Production"}
								</span>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
