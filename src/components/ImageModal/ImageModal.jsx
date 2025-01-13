import React from "react";
import s from "./ImageModal.module.css";
import ReactModal from "react-modal";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ImageModal = ({isModalOpen, selectedImage, closeModal, children }) =>{

    useEffect(()=>{
        if (isModalOpen){
            document.body.classList.add("no-scroll");
        }else{
            document.body.classList.remove("no-scroll");
        }

        return ()=> document.body.classList.remove("no-scroll");

    },[isModalOpen]);


    useEffect(()=>{
        const handleEscape = (evt) =>{
            if (evt.key === "Escape"){
                closeModal();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return ()=> document.removeEventListener("keydown", handleEscape);
    }, [closeModal]);

    return(
        <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={s.modalImage}
        overlayClassName={s.overlay}
        ariaHideApp={false}
        >
            {selectedImage &&(
                <div className={s.contentModal}>
                    <img src={selectedImage.urls.regular}
                    alt={selectedImage.alt_description || "Image"}
                    className={s.image} />
    
                    <p className={s.description}>
                        {selectedImage.description || "No description"}
                    </p>
                    <p className={s.author}>Author: {selectedImage.user.name}</p>
                </div>
            )}
            <button onClick={closeModal} className={s.btnClose}>
             ✕
            </button>
            {children}
        </ReactModal>
    )
}

    ImageModal.proptypes = {
        isModalOpen: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        children: PropTypes.node,
    };

export default ImageModal;