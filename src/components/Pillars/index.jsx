import React from "react";
import { WePillarsContent, PillarsTitle, PillarsContent} from "./style";

export function Pillars({subtitle, paragraphy}) {
  return (
    <>
    <WePillarsContent>
        <PillarsContent>
        <PillarsTitle>
             {subtitle}
             <p>{paragraphy}</p>
        </PillarsTitle>
        </PillarsContent>
    </WePillarsContent>
    </>
  );
}