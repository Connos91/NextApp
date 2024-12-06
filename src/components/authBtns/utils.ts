import googleLogo from "@/../public/google.png";
import githubLogo from "@/../public/github.png";

import * as C from "./constants";

export const authImageType = (type: string) =>
  type === C.AUTH_TYPE ? googleLogo : githubLogo;
