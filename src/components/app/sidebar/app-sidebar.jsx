import { NavUser } from "@/components/app/sidebar/nav-user";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Contact,
  Flame,
} from "lucide-react";
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

export function AppSidebar({ name, githubBadge, avatar, ...props }) {
  // This is sample data.
  const data = {
    user: {
      name: "0xKash",
      githubBadge: true,
      avatar: "https://github.com/shadcn.png",
    },
  };

  const items = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Trending",
      url: "#",
      icon: Flame,
    },
    {
      title: "Following",
      url: "#",
      icon: Contact,
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <rect width="200" height="200" rx="30" fill="#111111" />
                    <text
                      x="50%"
                      y="55%"
                      textAnchor="middle"
                      fill="white"
                      fontSize="120"
                      fontFamily="Segoe UI, sans-serif"
                      fontWeight="600"
                      dy=".35em"
                    >
                      K
                    </text>
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-lg">Kash.social</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
