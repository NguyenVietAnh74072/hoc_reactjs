/** @format */

import React from "react";
import PhanDuoiLienHe from "./LienHe/PhanDuoiLienHe";
import PhanTrenLienHe from "./LienHe/PhanTrenLienHe";

function LienHe() {
  return (
    <React.Fragment>
      <PhanTrenLienHe></PhanTrenLienHe>
      <PhanDuoiLienHe></PhanDuoiLienHe>
    </React.Fragment>
  );
}

export default LienHe;
