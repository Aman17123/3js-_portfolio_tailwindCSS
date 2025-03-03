import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constant/index.js'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Component/canvasloader.jsx'
import AGENT from '../Component/AGENT.jsx'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'


const Experience = () => {

  const [animationName, setAnimationName] = useState('idle');
  return (
    <section className='c-space my-20'>
      <div className='w-full text-white-600'>
        <h3 className='head-text'>My Experience</h3>

        <div className='work-container'>
          <div className='work-canvas'>
          <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} target={[0, 0, 0]} />
              <perspectiveCamera 
                position={[0, 0, -5]}
                fov={75}
                aspect={2}
                far={100}
                near={0.1}
                
                />

              <Suspense fallback={<CanvasLoader />}>
                <AGENT position-y={-0.9} scale={2} animationName={animationName} />
              </Suspense>
            </Canvas>

          </div>

          <div className='work-content'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
              {workExperiences.map(({id, name, pos, duration, title, animation, icon}) => (
                <div key={id} className='work-content_container group'
                  onClick={() => setAnimationName(animation.toLowerCase())} 
                  onPointerOver={() => setAnimationName(animation.toLowerCase())} 
                  onPointerOut={() => setAnimationName('idle')}>
                  <div className='flex flex-col h-full justify-start items-center py-2'>
                    <div className='work-content_logo'>
                      <img src={icon} alt='logo' className='w-full h-full'/>
                    </div>
                    <div className='work-content_bar'/>
                  </div>
                  <div className='sm:p-5 px-2.5 py-5'>
                    <p className='font-bold text-white-800'>{name}</p>
                    <p className='text-sm mb-5'>{pos} -- {duration}</p>
                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
