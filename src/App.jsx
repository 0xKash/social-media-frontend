// imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import routes from "./routes";
import { AppSidebar } from "@/components/app/sidebar/sidebar";
import { createContext } from "react";
import { useFetchAuth } from "@/hooks/auth/useFetchAuth";

// setup
export const UserContext = createContext();
const router = createBrowserRouter(routes);

function App() {
  const data = useFetchAuth();
  localStorage.sidebar_state = true;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserContext.Provider value={data}>
        <SidebarProvider
          style={{
            "--sidebar-width": "20rem",
          }}
          defaultOpen
        >
          {location.pathname != "/login" &&
            location.pathname != "/register" && (
              <>
                <AppSidebar />
                <SidebarTrigger className="m-2" />
              </>
            )}

          <main className="flex flex-col justify-center items-center w-full max-sm:overflow-hidden bg-background">
            <RouterProvider router={router} />
          </main>
        </SidebarProvider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
