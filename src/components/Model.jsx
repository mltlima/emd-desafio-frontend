import { Canvas, useLoader, extend, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Model.css';

extend({ GLTFLoader });

gsap.registerPlugin(ScrollTrigger);

const ModelContent = () => {
  const gltf = useLoader(GLTFLoader, '/cristo.gltf');
  const { camera } = useThree();
  const group = useRef();

  let xRotation = 90 * Math.PI / 180;
  let yRotation = -90 * Math.PI / 180;
  let zRotation = 0;

  // Adjust the scale and position here
  gltf.scene.scale.set(0.01, 0.01, 0.01);
  gltf.scene.position.set(0, -0.3, 0); // slightly move the model down
  // To rotate the model
  gltf.scene.rotation.set(xRotation, yRotation, zRotation);

  useEffect(() => {
    gsap.to(gltf.scene.rotation, {
      scrollTrigger: {
        trigger: ".map-container",
        start: "bottom center", // when the top of the trigger hits the center of the viewport
        end: "+=1000", // end after scrolling 1000px down
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      x: 0.1, // rotate the model 360 degrees around the y-axis
    });

    gsap.to(gltf.scene.scale, {
      scrollTrigger: {
        trigger: '.map-container',
        start: "bottom center",
        end: "+=1000",
        scrub: 1,
      },
      x: 0.1, // target scale values
      y: 0.1,
      z: 0.1,
      ease: "none", // linear movement
    });

    gsap.from('.title-text', {
      scrollTrigger: {
        trigger: '.title-text',
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -10000, // for a slide in effect
    });

    /*
    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: ".model-container",
        start: "top center", // when the top of the trigger hits the center of the viewport
        end: "+=1000", // end after scrolling 1000px down
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: 1,
      ease: "none", // linear movement
    });
    */
  }, [gltf.scene.rotation, gltf.scene.scale]);

  return (
    <group ref={group}>
      <primitive object={gltf.scene} />
    </group>
  );
};

function Model() {
  return (
    <div className="model-container">
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <ModelContent />
        </Suspense>
      </Canvas>
      <div className="title-text">
        <h1>Lorem Ipsum</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      </div>
    </div>
  );
}

export default Model;
