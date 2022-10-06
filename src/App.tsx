import React from "react";
// import {Login} from "./pages/Login";
// import {FirstAccess} from "./pages/FirstAccess";
// import { MyProfile } from "./pages/MyProfile";
import { HomeLogin } from "./pages/HomeLogin";
// import { UploadPicture } from "./pages/UploadPicture";
// import {Home} from "./pages/Home"
// import {FormReg} from "./pages/FormReg"
// import GlobalStyle from './styles/global';
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <Login></Login> */}
        <HomeLogin></HomeLogin>
      </MantineProvider>
    </>
  );
}

export default App;
