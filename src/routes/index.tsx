import React, { useContext } from "react";
import AuthContext from "../contexts/authContext";

import AuthRoutes from "./auth.route";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
  // const [signed, setSigned] = useState(false);
  const { signed } = useContext(AuthContext);
  // useEffect(() => {
  //   function loadStorageData() {
  //     const storageUser = localStorage.getItem("user");
  //     const storageToken = localStorage.getItem("token");

  //     if (storageToken && storageUser) {
  //       setSigned(true);
  //     }
  //   }
  //   loadStorageData();
  // }, [signed]);
  console.log(signed);
  // const signed = true;
  return signed ? <AppRoutes /> : <AuthRoutes></AuthRoutes>;
};

export default Routes;
