import React from "react";
import { Route, Routes } from "react-router-dom";
import { FirstAccess } from "../pages/FirstAccess";
import HomeWithoutLogin from "../pages/HomeWithoutLogin/HomeWithoutLogin";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

const AuthRoutes: React.FC = () => {
  //   const history = useHistory();
  return (
    <Routes>
      <Route index element={<HomeWithoutLogin></HomeWithoutLogin>} />
      <Route path="/login" element={<Login title="teste"></Login>} />
      <Route path="/first_access" element={<FirstAccess></FirstAccess>} />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  );
};

export default AuthRoutes;
