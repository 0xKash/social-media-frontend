// imports
import { NavUser } from "@/components/app/sidebar/nav-user";
import { Home, Settings, Contact, Flame } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { SidebarTitle } from "./sidebarTitle";
import { SidebarMenuContent } from "./sidebarMenuContent";

export function AppSidebar({ name, githubBadge, avatar, ...props }) {
  // This is sample data.
  const data = {
    user: {
      name: "0xKash",
      githubBadge: true,
      avatar: "https://github.com/shadcn.png",
    },
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarTitle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuContent />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
