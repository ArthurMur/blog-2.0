"use client";
import React, { useState } from "react";
import styles from "./imgCard.module.sass";
import Image from "next/image";
import Modal from "react-modal";
import ButtonLight from "../UI/ButtonLight/ButtonLight";

type Props = { postImgUrl: string };

export default function ImgCard({ postImgUrl }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.imgContainer}>
      {postImgUrl ? (
        <>
          <div onClick={openModal}>
            <Image
              src={postImgUrl ?? ""}
              alt="image"
              fill
              className={styles.image}
            />
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
            ariaHideApp={false}
          >
            <div className={styles.modalInner}>
              <Image
                src={postImgUrl ?? ""}
                alt="image"
                fill
                className={styles.modalImage}
              />
              <button onClick={closeModal} className={styles.closeBtn}>
                ✕  
              </button>
            </div>
          </Modal>
        </>
      ) : (
        <p className={styles.noImg}>Пост без изображения</p>
      )}
    </div>
  );
}
