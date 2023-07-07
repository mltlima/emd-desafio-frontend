import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function rotateModel(model, start, end, rotationValue) {
    console.log("rotateModel", model, start, end, rotationValue)
    gsap.to(model, {
        immediateRender: false,
        scrollTrigger: {
            start: start,
            end: end,
            scrub: 1,
        },
        x: rotationValue.x, // rotate the model around the x-axis
        y: rotationValue.y, // rotate the model around the y-axis
        z: rotationValue.z, // rotate the model around the z-axis
    });
}

function moveCamera(camera, start, end, positionValue) {
    gsap.to(camera, {
        immediateRender: false,
        scrollTrigger: {
            start: start,
            end: end,
            scrub: 1,
        },
        x: positionValue.x, // move the camera to the right
        y: positionValue.y, // move the camera up
        z: positionValue.z, // move the camera away
        ease: "none"
    });
}

function scaleModel(model, start, end, scaleValue) {
    gsap.to(model, {
        immediateRender: false,
        scrollTrigger: {
            start: start,
            end: end,
            scrub: 1,
        },
        x: scaleValue.x, // scale the model on the x-axis
        y: scaleValue.y, // scale the model on the y-axis
        z: scaleValue.z, // scale the model on the z-axis
        ease: "none"
    });
}

function textAnimation(selector, start, end) {
    gsap.from(selector, {
        immediateRender: false,
        scrollTrigger: {
            start: start,
            end: end,
            scrub: 1,
        },
        opacity: 0,
    });

    gsap.to(selector, {
        immediateRender: false,
        scrollTrigger: {
            start: end,
            end: end,
            scrub: 1,
        },
        opacity: 0,
    });
}

export { rotateModel, scaleModel, moveCamera, textAnimation };
