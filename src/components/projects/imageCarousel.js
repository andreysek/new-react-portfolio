import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import images from "./images";

import "react-carousel-animated/dist/style.css";



function Carousel() {
  return (
    <div className="container">
      <ReactCarousel
        carouselConfig={{
          transform: {
            rotateY: {
              [BEFORE]: () => "rotateY(25deg)",
              [CENTER]: () => "rotateY(0deg)",
              [AFTER]: () => "rotateY(-25deg)"
            }
          }
        }}
        itemBackgroundStyle={{
          backgroundColor: "#fff",
          borderRadius: "3px",
          boxShadow: "8px 12px 14px -6px black"
        }}
        containerBackgroundStyle={{
          filter: "blur(7px)",
          backgroundColor: "#968e8e"
        }}
        itemMaxWidth={50}
        carouselHeight="350px"
      >
       
        {images[0].map((image, index) => (
          <img
           
            key={index}
            src={image.src}
            alt="test"
            style={{
              maxHeight: "300px",
              maxWidth: "400px",
              borderRadius: "20px",
              boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
              margin: ".5rem"
            }}
        
          />
         
        ))}
        
      </ReactCarousel>
    </div>
  );
}

export default Carousel;