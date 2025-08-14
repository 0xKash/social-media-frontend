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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarTitle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuContent />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} isLoading={isLoading} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
