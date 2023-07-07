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
  gltf.scene.scale.set(0.01, 0.01, 0.01); // scale here
  gltf.scene.position.set(0, -0.3, 0); // slightly move the model down
  // To rotate the model
  gltf.scene.rotation.set(xRotation, yRotation, zRotation);

  useEffect(() => {
    gsap.to(gltf.scene.rotation, {
      scrollTrigger: {
        start: 700,
        end: 1800,
        scrub: 1,
      },
      x: 0.1,
    });

    gsap.to(gltf.scene.scale, {
      scrollTrigger: {
        start: 700,
        end: 1800,
        scrub: 1,
      },
      x: 0.1,
      y: 0.1,
      z: 0.1,
      ease: "none",
    });

    gsap.to('.title-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 1200,
        end: 1800,
        scrub: true,
      },
      opacity: 0,
    });

    //start of head focus animation
    gsap.to(gltf.scene.scale, {
      immediateRender: false,
      scrollTrigger: {
        start: 1800,
        end: 2200,
        scrub: 1,
      },
      x: 0.6,
      y: 0.6,
      z: 0.6,
      ease: "none",
    });

    gsap.to(camera.position, {
      scrollTrigger: {
        start: 1800,
        end: 2200,
        scrub: 1,
      },
      y: 20,
      x: 2,
      ease: "none",
    });

    gsap.to(gltf.scene.rotation, {
      immediateRender: false,
      scrollTrigger: {
        start: 1800,
        end: 2200,
        scrub: 1,
      },
      x: 0.2,
      z: 0.5,
    });

    gsap.from('.head-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 2000,
        end: 2500,
        scrub: true,
      },
      opacity: 0,
    });
    gsap.to('.head-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 2500,
        end: 2800,
        scrub: true,
      },
      opacity: 0,
    });

    //start of torso focus animation
    gsap.to(gltf.scene.rotation, {
      immediateRender: false,
      scrollTrigger: {
        start: 2800,
        end: 3200,
        scrub: 1,
      },
      x: -0.2,
      z: -0.5,
    });

    gsap.to(camera.position, {
      immediateRender: false,
      scrollTrigger: {
        start: 2800,
        end: 3200,
        scrub: 1,
      },
      y: 3,
      x: 3,
      z: 5,
      ease: "none",
    });

    gsap.to(gltf.scene.scale, {
      immediateRender: false,
      scrollTrigger: {
        start: 2800,
        end: 3200,
        scrub: 1,
      },
      x: 0.2,
      y: 0.2,
      z: 0.2,
      ease: "none",
    });

    gsap.from('.torso-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 3100,
        end: 3500,
        scrub: true,
      },
      opacity: 0,
    });
    gsap.to('.torso-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 3500,
        end: 3700,
        scrub: true,
      },
      opacity: 0,
    });

    //start of arms focus animation
    gsap.to(gltf.scene.rotation, {
      immediateRender: false,
      scrollTrigger: {
        start: 3700,
        end: 4100,
        scrub: 1,
      },
      x: 0,
      z: 0,
    });

    gsap.to(camera.position, {
      immediateRender: false,
      scrollTrigger: {
        start: 3700,
        end: 4100,
        scrub: 1,
      },
      y: 12,
      x: 7,
      z: 5,
      ease: "none",
    });

    gsap.to(gltf.scene.scale, {
      immediateRender: false,
      scrollTrigger: {
        start: 3700,
        end: 4100,
        scrub: 1,
      },
      x: 0.5,
      y: 0.5,
      z: 0.5,
      ease: "none",
    });

    gsap.from('.arms-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 4000,
        end: 4500,
        scrub: true,
      },
      opacity: 0,
    });
    gsap.to('.arms-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 4600,
        end: 4600,
        scrub: true,
      },
      opacity: 0,
    });

    //start of legs focus animation
    gsap.to(gltf.scene.rotation, {
      immediateRender: false,
      scrollTrigger: {
        start: 4700,
        end: 5100,
        scrub: 1,
      },
      x: 0,
      z: 0,
    });

    gsap.to(camera.position, {
      immediateRender: false,
      scrollTrigger: {
        start: 4700,
        end: 5100,
        scrub: 1,
      },
      y: 1,
      x: 0,
      z: 5,
      ease: "none",
    });

    gsap.to(gltf.scene.scale, {
      immediateRender: false,
      scrollTrigger: {
        start: 4700,
        end: 5100,
        scrub: 1,
      },
      x: 0.4,
      y: 0.4,
      z: 0.4,
      ease: "none",
    });

    gsap.from('.legs-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 5100,
        end: 5300,
        scrub: true,
      },
      opacity: 0,
    });
    gsap.to('.legs-text', {
      scrollTrigger: {
        trigger: '.body-height',
        start: 5600,
        end: 5600,
        scrub: true,
      },
      opacity: 0,
    });

    //final animation
    gsap.to(gltf.scene.rotation, {
      immediateRender: false,
      scrollTrigger: {
        start: 5700,
        end: 6500,
        scrub: 1,
      },
      x: 0.1,
      z: 0,
    });

    gsap.to(camera.position, {
      immediateRender: false,
      scrollTrigger: {
        start: 5700,
        end: 6500,
        scrub: 1,
      },
      y: 1,
      x: 0,
      z: 5,
      ease: "none",
    });

    gsap.to(gltf.scene.scale, {
      immediateRender: false,
      scrollTrigger: {
        start: 5700,
        end: 6500,
        scrub: 1,
      },
      x: 0.1,
      y: 0.1,
      z: 0.1,
      ease: "none",
    });

  }, [gltf.scene.rotation, gltf.scene.scale, camera.position]);

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
      <div className="head-text text-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus tortor, mattis vitae tincidunt ut, facilisis quis magna. Nulla scelerisque, eros eget ultricies aliquet, tellus justo fringilla tortor, et finibus tortor nulla accumsan purus. Nullam auctor tortor nec turpis volutpat, et maximus tortor molestie. Nulla varius imperdiet arcu, sit amet laoreet orci lobortis et. Ut sit amet ligula viverra, porta enim in, finibus augue. Nulla sodales libero ac diam accumsan eleifend. Nunc sit amet tempus eros, in posuere ligula. Sed id tincidunt lectus.</p>
      </div>
      <div className="torso-text text-wrapper">
        <p>Aenean id laoreet lectus. Vivamus quam purus, varius aliquet quam sed, tempus accumsan velit. Nullam sollicitudin tempus posuere. Donec pretium porttitor dui, ac lacinia dui blandit a. Mauris mattis viverra nisl, et vehicula nisi laoreet quis. Aliquam vitae nisl nunc. Phasellus eu ante nec metus rutrum condimentum. Nulla facilisi. Nullam tortor felis, consequat nec magna id, blandit aliquet nisl.</p>
      </div>
      <div className="arms-text text-wrapper">
        <p>Integer risus odio, sagittis vel diam id, dictum tincidunt justo. Fusce eleifend arcu id quam venenatis, dignissim ultricies tellus tristique. Nam laoreet orci sed sapien egestas, non eleifend ante gravida. Etiam sed libero sit amet ipsum mattis finibus ut semper ex. Quisque dapibus libero vitae lacus bibendum dapibus. Donec rhoncus turpis non leo porta, in semper ante suscipit. Mauris facilisis libero est, et accumsan massa auctor eget.</p>
      </div>
      <div className="legs-text text-wrapper">
        <p>Etiam non metus eget arcu euismod vehicula. Mauris vehicula nulla tempor lorem placerat luctus. Nulla tempus lectus non dolor rutrum rutrum. Nam risus dolor, consequat quis sodales quis, dignissim aliquam risus. Vestibulum dictum a velit sagittis bibendum. Fusce elementum tortor ut sem aliquam porta.</p>
      </div>
    </div>
  );
}

export default Model;
