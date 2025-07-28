import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function SidebarTitle() {
  return (
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
  );
}
