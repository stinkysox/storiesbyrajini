import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const initialCategories = {
  Wedding: [
    {
      imageUrl: "https://i.postimg.cc/3JZ1JWr1/Wedding-SPA04808.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/3JJqQRyQ/Wedding-SPA03924.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/rs48Cvsy/Wedding-RJK06541.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/rFv4Tkxj/Wedding-RJK06375.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/g2kWnFYF/Wedding-SPA03879.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/zBKpZLY5/Wedding-RJK03241.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/JnxkbHy4/Wedding-DSC04232.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MKn8Jkm9/Wedding-DSC00183.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/CxfB1QSN/Wedding-DSC00003.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/g0Xf13yr/Wedding-01-216.jpg",
      category: "Wedding",
    },
  ],

  Prewedding: [
    {
      imageUrl: "https://i.postimg.cc/Wz5j6gc8/Pre-wedding-RJK09138.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ncHVNVdB/Pre-wedding-RJK05280.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/kMRh9WHd/Pre-wedding-RJK03239.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/d1JRpJvS/Pre-wedding-RJK03208.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/1zL7Ntgd/Pre-wedding-RJK02767.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/YSwmGBr3/Pre-wedding-RJK02930.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/cJQFgDXw/Pre-wedding-RJK03199.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/SNS4KTbM/Pre-wedding-RJK02804.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fbZf499D/Pre-wedding-RJK09054.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/9X48YyPn/Pre-wedding-RJK05249.jpg",
      category: "Pre-wedding",
    },
  ],
  Engagement: [
    {
      imageUrl: "https://i.postimg.cc/wBWTYdmj/Engagment-RJK09919.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/yYPCwwxG/Engagment-RJK08021.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/PfVm2qzV/Engagment-RJK09880.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/tgtStTtv/Engagment-RJK08246.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/N0VWYt1g/Engagment-RJK07900.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/SNzbvdJz/Engagment-RJK07112-copy.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/HnJNhhJr/Engagment-RJK07713.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/WzTSw2Fn/Engagment-DSC09315.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Jn33439p/Engagment-06.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/jqgw6kQz/Engagment-RJK07853.jpg",
      category: "Engagement",
    },
  ],
  Sangeeth: [
    {
      imageUrl: "https://i.postimg.cc/PrGG71HP/Sangeete-RJK09652.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/DZBZg5HJ/Sangeete-DTP01106.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/yxyw9rbt/Sangeete-DSC06562-Edit.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/bJNbpGjn/Sangeete-DSC06810.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/rF61tw1B/Sangeete-DSC06641.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/wxWK6nDR/Sangeete-DSC03421.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/63gmZxcM/Sangeete-RJK06197.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/ZqL7wycv/Sangeete-DSC03468.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/k449nCYG/Sangeete-RJK05670.jpg",
      category: "Sangeeth",
    },
  ],
  "Baby Shoot": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/28/47/d6/2847d640a6f7a3eb98244e98e0a171b3.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },

    {
      imageUrl:
        "https://i.pinimg.com/736x/a6/33/db/a633db1344685ae434bb7672f5a84d52.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a9/12/35/a91235fbbbeae6a77447cf339b6c3491.jpg",
      category: "Baby Shoot",
    },
  ],
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key={activeCategory}
        >
          {initialCategories[activeCategory] &&
          initialCategories[activeCategory].length > 0 ? (
            initialCategories[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} photo ${index + 1}`}
                  className="gallery-img"
                  onClick={() => setSelectedImage(imageObj.imageUrl)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="empty-images"
              key="empty"
              variants={itemVariants}
            >
              <p className="no-images">No images available in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-image"
            />
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/pramod.photogrphy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
