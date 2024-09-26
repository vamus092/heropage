import * as THREE from "three";
import React, {useState,useEffect,useRef} from "react"
import { useAnimations,useGLTF,perspectiveCamera } from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

const color=new THREE.Color();

export const Model=({scroll,...props})=>{

const group=useRef();
const{nodes,materials,animations }=useGLTF("/head-shot.glb");
const{animation}=useAnimations(animations,group);
const [hover, setHover] = useState(false);

const extras={
    "material-envMapInternsity":0.2,
};
useEffect(
()=>void(actions["CameraAction.005"].play().paused=true),[]
);

useEffect(()=>{

        if(hover)
            group.current.getObjectByName(hover).material.color.set("white");
        document.body.style.cursor=hover?"pointer":"auto";
},[hover]);

    useFrame((state)=>{
        actions["CameraAction.005"].time=THREE.MathUtils.lerp(actions["CameraAction.005".time,actions["CameraAction.005"].getClip().duration*scroll.current,0.05]
    );

    group.current.children[0].children.foreach((child,index)=>{
        child,material.color.lerp(color.set(hover===child.name?"tomato":"#202020"),

            hover?0.1:0.05,
    );
        const et=state.clock.elapsedTime;
        child.position.y=Math.sin((et+index*2000)/2)*1;
        child.position.x=Math.sin((et+index*2000)/3)/10;
        child.position.z=Math.sin((et+index*2000)/3)/10;

        })
    })

    return (

        <group ref={group}{...props}dispose={null}>
            <group
                onPointerOver={(e)=>(e.stopPropagation(),set(e.object.name))}
                onPointerOut={(e)=>(e.stopPropagation(),set(null))}
                position={[0.06,4.04,0.35]}
                scale={[0.2,0.25,0.25]}>

                        <mesh
                            name="Headphones"
                            geometry={NodeShaderStage.HEadphones.geometry}
                            material={materials.M_Notebook}
                            {...extras}     
                        />
                        <mesh
                        name="Zepplin"
                        geometry={NodeShaderStage.Zeppelin.geometry}
                        material={materials.M_Zeppelin}
                        
                        />
            </group>
            <group

                name="Camera"
                position={[-1.78,2.04,23.58]}
                rotation={[1.62,0.01,0.11]}>

                    <perspectiveCamera 
                    makeDefault
                    far={100}
                    near={0.1}
                    fov={0.1}
                    rotation={[-Math.PI/2,0,0]}
                    ></perspectiveCamera>
            </group>
        </group>

    )


}

