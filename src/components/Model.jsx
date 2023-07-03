import { Canvas, useLoader, extend } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import '../styles/Model.css';

extend({ GLTFLoader });

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
  return (
    <div className="model-container">
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
