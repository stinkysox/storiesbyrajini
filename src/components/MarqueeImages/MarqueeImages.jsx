import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/3JJqQRyQ/Wedding-SPA03924.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/cJQFgDXw/Pre-wedding-RJK03199.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/d1JRpJvS/Pre-wedding-RJK03208.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/jj3kr8db/RJK04420.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/wBWTYdmj/Engagment-RJK09919.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/B6zCWqR4/Wedding-SPA04831.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/SNzbvdJz/Engagment-RJK07112-copy.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/WzTSw2Fn/Engagment-DSC09315.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/63v5fKJy/Haldi-DSC00972.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/zBKpZLY5/Wedding-RJK03241.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
