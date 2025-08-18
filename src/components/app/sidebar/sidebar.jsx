// imports
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarTitle } from "../../sidebar/sidebarTitle";
import { SidebarMenuContent } from "../../sidebar/sidebarMenuContent";
import { UserContext } from "@/App";
import { useContext } from "react";

export function AppSidebar({ name, githubBadge, avatar, ...props }) {
  const { user, isLoading } = useContext(UserContext);

  return (
    localStorage.sidebar_state != "false" && (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <SidebarTitle />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenuContent user={user} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={user} isLoading={isLoading} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  );
}
