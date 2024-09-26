import React,{Suspense, useRef } from "react";
import {Canvas} from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import{Model} from "./model";
import {Overlay} from "./overlay"
import "./app.css"

i//mport { Suspense } from "react";
const App=()=>{

    const overlay=useRef();
    const caption=useRef();
    const scroll=useRef(0);
   
    return(
        <>
    <Canvas
        shadows
        eventSource={document.getElementById("root")}
        eventPrefix={"client"}
        >
<ambientLight intensity={1}/>
<Suspense fallback={null}>
    <Model scroll={scroll}/>
    <Environment preset="city"/>
</Suspense>
    </Canvas>
    <Overlay caption={caption} scroll={scroll} ref={overlay}/>
    </>
    );
}

export default App;