import PropTypes from "prop-types";
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal}) =>{
    return(
        <ul className={s.imageGallery}>
            {images.map((image)=>(
            <li key={image.id}>
               
              <ImageCard image={image} onClick={openModal} />

           </li>
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            urls: PropTypes.shape({
                small: PropTypes.string.isRequired,
                regular: PropTypes.string.isRequired,
            }).isRequired
        })
    ).isRequired,
    openModal: PropTypes.func.isRequired,
}

export default ImageGallery;