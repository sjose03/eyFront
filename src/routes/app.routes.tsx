import React from "react";
import { Route, Routes } from "react-router-dom";
import { Candidate } from "../pages/Candidate";
import { FirstAccess } from "../pages/FirstAccess";
import { ApplicationList } from "../pages/ApplicationList";
import { FormReg } from "../pages/FormReg";
// import { useHistory } from 'react-router';
import { Login } from "../pages/Login";
import { MyProfile } from "../pages/MyProfile";
import { Upload } from "../pages/Upload";
import { UploadPicture } from "../pages/UploadPicture";
import { HomeLogin } from "../pages/HomeLogin";
// import { Container, Content } from './App.Routes.styles';
// import { Audit } from '../pages/Audit';

const AppRoutes: React.FC = () => {
  //   const history = useHistory();
  return (
    <Routes>
      <Route path="/" element={<HomeLogin></HomeLogin>} />
      <Route path="/login" element={<Login title="Login"></Login>} />
      <Route path="/first_access" element={<FirstAccess></FirstAccess>} />
      <Route path="/upload" element={<Upload></Upload>} />
      <Route path="/registerForm" element={<FormReg></FormReg>} />
      <Route path="/uploadPicture" element={<UploadPicture></UploadPicture>} />
      <Route path="/myProfile" element={<MyProfile></MyProfile>} />
      <Route path="/homeLogin" element={<HomeLogin></HomeLogin>} />
      <Route
        path="/myCandidacy"
        element={<ApplicationList></ApplicationList>}
      />
      <Route path="/wantApply" element={<Candidate></Candidate>} />
    </Routes>
  );
};

export default AppRoutes;
