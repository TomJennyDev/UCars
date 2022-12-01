import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./contexts/storeContext";
import Router from "./routers";
import ThemeProvider from "./theme";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>
            <Router />
          </StoreProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
