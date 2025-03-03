import React from "react"; // Importing React library
import { Suspense } from "react"; // Importing Suspense for lazy loading components
import CanvasLoader from "../Component/canvasloader"; // Importing a loading component
import { Canvas } from "@react-three/fiber"; // Importing Canvas for rendering 3D content
import { PerspectiveCamera, Ring } from "@react-three/drei"; // Importing PerspectiveCamera for 3D camera view

import HackerRoom from "../Component/HackerRoom"; // Importing the 3D model component
import { useMediaQuery } from "@mui/material"; // Importing useMediaQuery for responsive design
import { calculateSizes } from "../constant"; // Importing function to calculate responsive sizes
import Target from "../Component/Target";
import ReactLogo from "../Component/ReactLogo";
import Cube from "../Component/Cube";
import Rings from "../Component/Rings";
import HeroCamera from "../Component/HeroCamera";
import Button from "../Component/Button";

const Hero = () => {

  const isSmall = useMediaQuery('(max-width: 440px)'); // Check if screen width is ≤ 440px
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)'); // Check if screen width is between 768px and 1024px
  const isMobile = useMediaQuery('(max-width: 768px)'); // Check if screen width is ≤ 768px

  const sizes = calculateSizes(isSmall , isMobile , isTablet); // Calculate appropriate 3D model sizes

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 absolute top-0 left-0 z-20 pointer-events-none">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Bomba <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">CS pro and FaceIt lvl 5</p>
      </div>


      <div className="w-full h-full absolute inset-0"> {/* Wrapper for the 3D scene */}
        {/* <Leva/> (Commented out, possibly for UI controls) */}
        
        <Canvas className="w-full h-full"> {/* Canvas to render 3D content */}
          
          <Suspense fallback={<CanvasLoader />}> {/* Suspense for loading fallback */}  
          <PerspectiveCamera makeDefault position={[0, 0, 20]} /> {/* Setting up the default 3D camera */}

        
          <HeroCamera isMobile={isMobile}>
            <HackerRoom 
              position={sizes.deskPosition} // Positioning the 3D model
              rotation={[0 , -Math.PI , 0]} // Rotating the model 180 degrees
              scale = {sizes.deskScale} // Scaling the model dynamically
            />
          </HeroCamera>
          
            <group>
              <Target position ={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
              
            <ambientLight intensity={1} /> {/* Adding ambient light for even illumination */}
            <directionalLight position={[10, 10, 10]} intensity={0.5} /> {/* Adding directional light */}
          
          </Suspense> {/* Closing Suspense */}
        </Canvas> {/* Closing Canvas */}

        <div className="absolute bottom-7 left-0 right-0 z-10 c-space">
          <a href="#contact" className="w-fit">
            <Button name="let's work together " isBeam containerClass="sm:w-fit sm:min-w-96"/>
          </a>
        </div>
        
      </div> {/* Closing 3D scene wrapper */}
    </section> // Closing section
  );
};

export default Hero; // Exporting Hero component
