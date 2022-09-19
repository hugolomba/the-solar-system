import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./GalleryPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import nasaLogo from "../img/nasa-logo.png";

import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { AiFillCloseCircle } from "react-icons/ai";

const GalleryPage = ({ planet, clickHandler }) => {
  const [planetGallery, setPlanetGallery] = useState();
  const [planetImages, setPlanetImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const planetId = useParams();

  const translateName = (name) => {
    switch (name) {
      case "Sol":
        return "sun";
        break;
      case "Mercúrio":
        return "mercury";
        break;
      case "Vênus":
        return "venus";
        break;
      case "Terra":
        return "earth";
        break;
      case "Marte":
        return "mars";
        break;
      case "Júpiter":
        return "jupiter";
        break;
      case "Saturno":
        return "saturn";
        break;
      case "Urano":
        return "uranus";
        break;
      case "Netuno":
        return "neptune";
        break;
      case "Plutão":
        return "pluto";
        break;
    }
  };

  let images = [];

  planetGallery &&
    planetGallery.collection.items.map((item) => {
      images.push({
        src: item.links[0].href,
        original: item.links[0].href,
        caption: item.data[0].title,
        customOverlay: (
          <div className="custom-overlay__caption">
            <div>{item.data[0].title}</div>
          </div>
        ),
      });
    });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://images-api.nasa.gov/search?q=${translateName(
          planet.name
        )}&media_type=image`
      )
      .then((response) => {
        setPlanetGallery(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // .finally(() => setPlanetImages(images));
  }, [planetId]);

  // novo

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // novo

  console.log(images);

  return (
    <div className="gallery-container-bg">
      <AiFillCloseCircle onClick={clickHandler} />
      <div className="gallery-reference">
        <span>
          Provide by{" "}
          <a href="https://api.nasa.gov/" target="_blank">
            NASA Image and Video Library
          </a>
        </span>
        <img src={nasaLogo} alt="nasa-logo" />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="gallery-container">
          {/* {console.log(planetGallery.collection.items)} */}

          {/* // console.log(item.links[0].href);
          // console.log(item.data[0].title); */}

          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
