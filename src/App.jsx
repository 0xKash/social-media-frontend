// imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import routes from "./routes";
import { AppSidebar } from "@/components/app/sidebar/sidebar";

// setup
const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider
        style={{
          "--sidebar-width": "20rem",
        }}
        defaultOpen
      >
        {location.pathname != "/login" && location.pathname != "/register" && (
          <>
            <AppSidebar />
            <SidebarTrigger className="m-2" />
          </>
        )}
        <main className="flex flex-col justify-center items-center w-full max-sm:overflow-hidden bg-background">
          <RouterProvider router={router} />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
