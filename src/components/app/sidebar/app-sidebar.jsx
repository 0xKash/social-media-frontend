// imports
import { NavUser } from "@/components/app/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarTitle } from "./sidebarTitle";
import { SidebarMenuContent } from "./sidebarMenuContent";
import { useFetchAuth } from "@/hooks/useFetchAuth";

export function AppSidebar({ name, githubBadge, avatar, ...props }) {
  return (
    location.pathname != "/login" &&
    location.pathname != "/register" && (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <SidebarTitle />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenuContent />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  );
}
