// imports
import {
  User2,
  ChevronsUpDown,
  LogOut,
  BadgeCheckIcon,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "../ui/badge";
import { logoutUser } from "@/api/auth/auth";

export function NavUser({ user }) {
  const { isMobile } = useSidebar();

  const handleLogout = async () => {
    logoutUser();
    window.location.reload();
    location.pathname = "/login";
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback className="rounded-lg">KH</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-sm flex items-center gap-5">
                  {`@${user.username}`}
                  {user.badgeBool && (
                    <Badge
                      variant="default"
                      className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm"
                    >
                      <BadgeCheckIcon />
                      Github
                    </Badge>
                  )}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback className="rounded-lg">KH</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold flex items-center gap-5">
                    {`@${user.username}`}
                    {user.badgeBool && (
                      <Badge
                        variant="default"
                        className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm"
                      >
                        <BadgeCheckIcon />
                        Github
                      </Badge>
                    )}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => (window.location.href = "/settings")}
              >
                <Settings />
                Settings
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => (window.location.href = `/${user.username}`)}
              >
                <User2 />
                Profile
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
