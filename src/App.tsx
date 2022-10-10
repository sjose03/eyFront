import React from "react";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "./contexts/authContext";
import Routes from "./routes";

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>
      </MantineProvider>
    </>
  );
}

export default App;
