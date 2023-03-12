import { useEffect, useState } from "react";

function Slider() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const delay = imageURL ? 2000 : 0;

    setTimeout(async () => {
      try {
        const res = await fetch(
          "https://drive.google.com/drive/folders/1qmUWjlJCOCxsAN7t6FIV5PUopEqC9ZCu"
        );
        const data = await res.json();
        setImageURL(data.message);
      } catch (e) {
        console.log("problem", e);
      }
    }, delay);
  }, [imageURL]);

  return (
    <div>
      <img src={imageURL} alt="image" />
    </div>
  );
}

export default Slider;
