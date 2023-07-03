import { Canvas, useLoader, extend } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Model.css';

extend({ GLTFLoader });

gsap.registerPlugin(ScrollTrigger);

const ModelContent = () => {
  const gltf = useLoader(GLTFLoader, '/cristo.gltf');

  // Adjust the scale and position here
  gltf.scene.scale.set(0.1, 0.1, 0.1); // scale down by 1%
  gltf.scene.position.set(0, -1, 0); // slightly move the model down

  return (
    <primitive object={gltf.scene} />
  );
};

function Model() {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom top', // end after scrolling the height of the container
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      opacity: 1,
    });
  }, []);

  return (
    <div className="model-container" ref={ref}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <ModelContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Model;
