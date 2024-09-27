"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  const changeImageHandler = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => setPickedImage(reader.result);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && (
            <Image src={pickedImage} alt="user selected image" fill />
          )}
          {!pickedImage && <p>No Image picked yet</p>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={changeImageHandler}
        />
        <button
          className={classes.button}
          type="button"
          onClick={() => imageInputRef.current.click()}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
