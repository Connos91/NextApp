import Big from "big.js";
import * as C from "./constants";

Big.DP = C.DECIMAL_PLACES;
Big.RM = Big.roundHalfEven;

export const MyBig = Big;
