import { Home, TrendingUp, Calendar, Code2, Target, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
	{ title: "Dashboard", url: "/dashboard", icon: Home },
	{ title: "Progress", url: "/progress", icon: TrendingUp },
	{ title: "Study Plan", url: "/study-plan", icon: Calendar },
	{ title: "Coding Lab", url: "/coding-lab", icon: Code2 },
	{ title: "Goals", url: "/goals", icon: Target },
	{ title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
	const { state } = useSidebar();
	const collapsed = state === "collapsed";

	return (
		<Sidebar collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="mt-4 mb-2">
						<div className="flex items-center gap-2">
							{/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
								<span className="text-sm font-bold text-primary-foreground">SA</span>
							</div> */}
							{!collapsed && (
								<div className="flex flex-col">
									<span className="text-sm font-semibold text-foreground">SATA</span>
									<span className="text-xs text-muted-foreground">Your Learning Companion</span>
								</div>
							)}
						</div>
					</SidebarGroupLabel>
					<SidebarGroupContent className="mt-4">
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<NavLink
											to={item.url}
											end={item.url === "/"}
											className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
											activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
										>
											<item.icon className="h-4 w-4" />
											{!collapsed && <span>{item.title}</span>}
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
