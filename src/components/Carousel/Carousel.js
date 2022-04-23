import { useState } from "react";
import { carouselData } from "../../data/carouselData";

export const Carousel = () => {
  const [images, setImages] = useState(1);

  if (images > 1) {
    const handleImg = () => {
      let popped = carouselData.pop();
      carouselData.unshift(popped);
      console.log(popped);
      console.log(carouselData);
    };
    handleImg();
    console.log("handle!");
  }

  return (
    <div className="carousel__ofDiv">
      <div
        className="carousel__parentDiv"
        onAnimationIteration={() => setImages(images + 1)}
      >
        {carouselData.map((data) => {
          return (
            <div className="carousel__childDiv" key={data.id}>
              <img
                className="carousel__img"
                src={`/assets/Fondos/${data.src}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
