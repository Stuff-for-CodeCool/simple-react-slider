import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

//  Styles
import "@picocss/pico/css/pico.min.css";
import "./style.css";

//  Used images
import image10 from "./slider_images/10-900x400.jpg";
import image11 from "./slider_images/11-900x400.jpg";
import image12 from "./slider_images/12-900x400.jpg";
import image13 from "./slider_images/13-900x400.jpg";
import image14 from "./slider_images/14-900x400.jpg";

const Slider = () => {
    //  First shown image
    const [index, setIndex] = useState(0);

    //  Find the current image to be displayed
    const imageClass = (currentIndex, globalIndex) =>
        currentIndex === globalIndex ? "active" : null;

    //  Array of HTML properties for all images
    const images = [
        {
            src: image10,
            className: imageClass(0, index),
            alt: "https://picsum.photos/id/10/900/400",
        },
        {
            src: image11,
            className: imageClass(1, index),
            alt: "https://picsum.photos/id/11/900/400",
        },
        {
            src: image12,
            className: imageClass(2, index),
            alt: "https://picsum.photos/id/12/900/400",
        },
        {
            src: image13,
            className: imageClass(3, index),
            alt: "https://picsum.photos/id/13/900/400",
        },
        {
            src: image14,
            className: imageClass(4, index),
            alt: "https://picsum.photos/id/14/900/400",
        },
    ];

    //  Use a function to prevent flicker
    setTimeout(() => {
        //  Increase index, wrapping around to the start
        setIndex(() => (index + 1) % images.length);
    }, 2000);

    return (
        <>
            <div className="slider">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        className={img.className}
                        alt={img.alt}
                    />
                ))}
            </div>
        </>
    );
};

const root = document.getElementById("root");
root.classList.add("container");
//  pico.css container class

createRoot(root).render(
    <StrictMode>
        <Slider />
    </StrictMode>
);
