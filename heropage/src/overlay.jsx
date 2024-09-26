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
            <div style={{height:"200vh"}}>
                <div class="dot">
                <h1>Headphone</h1>
              Headphones are a pair of a small loud speakers worn on or around the head over a user & apps ears
                </div>
            </div>
            <div style={{height:"200vh"}}>
            <div class="dot">
                <h1>Rocket</h1>
             A rocket(from Italian:rochetto,lit.&aos;bobbin/spool&apos;)[nb 1][1] is projectule that spacecraft aircraft or other veichle use to obtain thrust from  a rocket engiene.
                </div>
            </div>
            <div style={{height:"200vh"}}>
            <div class="dot">
                <h1>Turbine</h1>
             A turbine is a rotatory mechanical device that extracts energy frim a fluid flow and converts into useful work.
                </div>
            </div>
            <div style={{height:"200vh"}}>
            <div class="dot">
                <h1>Table</h1>
           a table is an item if furniture with a flat top and one or more legs used as a surface for working at eating from or on which to place things.
                </div>
            </div>

            <div style={{height:"200vh"}}>
            <div class="dot">
                <h1>laptop</h1>
        a laptop is a computer or notebook computer is a small portable personal computer with a screen and alphanumeric keyboard atached comapactly
                </div>
            </div>

            <div style={{height:"200vh"}}>
            <div class="dot">
                <h1>Zepplin</h1>
                A Zeppelin is a type of rigid airship named after the German inventor Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn] ⓘ) who pioneered rigid airship development at the beginning of the 20th century. Zeppelin's notions were first formulated in 1874[1] and developed in detail in 1893.[2] 
                </div>
            </div>
{/* +++++++++__________________________________________+=========== */}
<span class="caption"ref={"caption"}>
0.00

</span>

    </div>

));