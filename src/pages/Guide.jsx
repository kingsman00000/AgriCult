import React from "react";
import GuideDiv from "../components/GuideDiv";

const Guide = () => {
  return (
    <div className="grid grid-cols-3">
      <GuideDiv linkIt="/guide/marketing" datta="Agricultural marketing" />
      <GuideDiv linkIt="/guide/census" datta="Agricultural census" />
      <GuideDiv linkIt="/guide/credit" datta="Credit" />
      <GuideDiv linkIt="/guide/cropsnsfm" datta="Crops & NFSM" />
      <GuideDiv linkIt="/guide/drought" datta="Drought Management" />
      <GuideDiv
        linkIt="/guide/investment"
        datta="Investment and price support Division"
      />
    </div>
  );
};

export default Guide;
