import { Canvas, useLoader, extend, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Model.css';

import { rotateModel, scaleModel, moveCamera, textAnimation } from './Animations';
import { timeline } from './Timeline';

extend({ GLTFLoader });

gsap.registerPlugin(ScrollTrigger);

const ModelContent = () => {
  const gltf = useLoader(GLTFLoader, '/cristo.gltf');
  const { camera } = useThree();
  const group = useRef();

  // Adjust the scale and position here
  gltf.scene.scale.set(0.01, 0.01, 0.01); // scale here
  gltf.scene.position.set(0, -0.3, 0); // slightly move the model down

  // To rotate the model
  let xRotation = 90 * Math.PI / 180;
  let yRotation = -90 * Math.PI / 180;
  let zRotation = 0;
  gltf.scene.rotation.set(xRotation, yRotation, zRotation);

  //Timeline


  useEffect(() => {

    //start of animation
    rotateModel(gltf.scene.rotation,
      timeline.startAnimation.start,
      timeline.startAnimation.end,
      timeline.startAnimation.rotateModel);

    scaleModel(gltf.scene.scale,
      timeline.startAnimation.start,
      timeline.startAnimation.end,
      timeline.startAnimation.scaleModel);

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
    rotateModel(gltf.scene,
      timeline.headAnimation.start,
      timeline.headAnimation.end,
      timeline.headAnimation.rotateModel);

    scaleModel(gltf.scene,
      timeline.headAnimation.start,
      timeline.headAnimation.end,
      timeline.headAnimation.scaleModel);

    moveCamera(camera,
      timeline.headAnimation.start,
      timeline.headAnimation.end,
      timeline.headAnimation.moveCamera);

    textAnimation('.head-text',
      timeline.headAnimation.start,
      timeline.headAnimation.end);




    //start of torso focus animation
    rotateModel(gltf.scene,
      timeline.torsoAnimation.start,
      timeline.torsoAnimation.end,
      timeline.torsoAnimation.rotateModel);

    scaleModel(gltf.scene,
      timeline.torsoAnimation.start,
      timeline.torsoAnimation.end,
      timeline.torsoAnimation.scaleModel);

    moveCamera(camera,
      timeline.torsoAnimation.start,
      timeline.torsoAnimation.end,
      timeline.torsoAnimation.moveCamera);

    textAnimation('.torso-text',
      timeline.torsoAnimation.start,
      timeline.torsoAnimation.end);




    //start of arms focus animation
    rotateModel(gltf.scene,
      timeline.armsAnimation.start,
      timeline.armsAnimation.end,
      timeline.armsAnimation.rotateModel);

    scaleModel(gltf.scene,
      timeline.armsAnimation.start,
      timeline.armsAnimation.end,
      timeline.armsAnimation.scaleModel);

    moveCamera(camera,
      timeline.armsAnimation.start,
      timeline.armsAnimation.end,
      timeline.armsAnimation.moveCamera);

    textAnimation('.arms-text',
      timeline.armsAnimation.start,
      timeline.armsAnimation.end);





    //start of legs focus animation
    rotateModel(gltf.scene,
      timeline.legsAnimation.start,
      timeline.legsAnimation.end,
      timeline.legsAnimation.rotateModel);

    scaleModel(gltf.scene,
      timeline.legsAnimation.start,
      timeline.legsAnimation.end,
      timeline.legsAnimation.scaleModel);

    moveCamera(camera,
      timeline.legsAnimation.start,
      timeline.legsAnimation.end,
      timeline.legsAnimation.moveCamera);

    textAnimation('.legs-text',
      timeline.legsAnimation.start,
      timeline.legsAnimation.end);





    //final animation
    rotateModel(gltf.scene,
      timeline.finalAnimation.start,
      timeline.finalAnimation.end,
      timeline.finalAnimation.rotateModel);

    scaleModel(gltf.scene,
      timeline.finalAnimation.start,
      timeline.finalAnimation.end,
      timeline.finalAnimation.scaleModel);

    moveCamera(camera,
      timeline.finalAnimation.start,
      timeline.finalAnimation.end,
      timeline.finalAnimation.moveCamera);

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
