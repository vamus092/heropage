import React, { forwardRef } from "react";;
//import { useTheme } from "@mui/material/styles";



export const Overlay=forwardRef(({ },ref)=>(  
    <div
        ref={ref}
        class ="scroll"
        onScroll {(e)=>{

                scroll.current=e.target.scrolltop/(e.target.scrollHeight-window.innerHeight);
                caption.current.innerText=scroll.current.toFixed(2);
        }}>


            <div style={{height:"400vh"}}>
               <div class="dot">
               <h1>Headset</h1>
               Virtual Reality (VR) is a stimulated experience that can be similar to or completely different from the real world.
               </div>
            </div>
            <div style={{height="200vh"}}>

            </div>
    </div>

));