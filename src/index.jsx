import React from "react";
import { render } from "react-dom";

import LoginPage from "./components/mdr-pro/pages/LoginPage";
import Providers from "./components/mdr-pro/components/providers/Providers";

render(
  <Providers>
    <LoginPage />
  </Providers>,
  document.getElementById("root"),
);
