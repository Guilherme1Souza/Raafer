import React from "react";
import { WePillarsContent, PillarsTitle, PillarsContent} from "./style";

export function Pillars({subtitle, children}) {
  return (
    <>
    <WePillarsContent>
        <PillarsContent>
        <PillarsTitle>
             {subtitle}
             <p>{children }</p>
        </PillarsTitle>
        </PillarsContent>
    </WePillarsContent>
    </>
  );
}