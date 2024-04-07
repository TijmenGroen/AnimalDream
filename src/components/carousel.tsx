import { ChevronsLeft, ChevronsRight } from "lucide-react";
import "../css/carousel.css";
import Park1 from "/assets/img/park1.png";
import Park2 from "/assets/img/park2.png";
import Park3 from "/assets/img/park3.png";
import Park4 from "/assets/img/park4.png";
import { useState } from "react";

function Carousel() {
  const imgUrls: string[] = [Park1, Park2, Park3, Park4];
  const [imageIndex, setImageIndex] = useState(0);

  window.addEventListener("load", () => {
    autoSlider;
  });

  const autoSlider = setTimeout(nextImg, 7000);

  function nextImg() {
    setImageIndex((index) => {
      if (index === imgUrls.length - 1) return 0;
      return index + 1;
    });
    clearTimeout(autoSlider)
    autoSlider
  }

  function prevImg() {
    setImageIndex((index) => {
      if (index === 0) return imgUrls.length - 1;
      return index - 1;
    });
    clearTimeout(autoSlider)
    autoSlider
  }

  return (
    <div className="carousel">
      <div className="carousel-slider">
        {imgUrls.map((url) => (
          <img
            key={url}
            src={url}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button onClick={prevImg} className="carousel-button" style={{ left: 0 }}>
        <ChevronsLeft />
      </button>
      <button
        onClick={nextImg}
        className="carousel-button"
        style={{ right: 0 }}
      >
        <ChevronsRight />
      </button>
    </div>
  );
}

export default Carousel;