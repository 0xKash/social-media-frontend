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
import { useFetchAuth } from "@/hooks/auth/useFetchAuth";

export function AppSidebar({ name, githubBadge, avatar, ...props }) {
  const { user, error } = useFetchAuth();

  return (
    error && (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <SidebarTitle />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenuContent />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  );
}
