import "./WorkTile.css";
import { useCallback, useEffect } from "react";
import { useState } from "react";

const WorkTile = (props) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [screenWidth, setScreenWidth] = new useState(window.innerWidth);

  const handleWindowSizeChange = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, [setScreenWidth]);

  const clickHandler = () => {
    window.open(props.link);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    import(`../../img/${props.img}`)
      .then((image) => {
        setImgSrc(image.default);
      })
      .catch((error) => {
        console.error("Error importing image: ", error);
      });
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [props.img, handleWindowSizeChange]);

  return (
    <li onClick={clickHandler} className="tile_item">
      {screenWidth <= 764 && (
        <>
          <div
            className="tile_box"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="tile_box_blur">
              <div className="tile_tag">{props.tag01}</div>
              <div className="tile_tag">{props.tag02}</div>
            </div>
          </div>
          <h2 data={props.emoji}>{props.title}</h2>
        </>
      )}
      {screenWidth >= 764 && (
        <>
          <div
            className="tile_box"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="tile_box_blur">
              <h2 data={props.emoji}>{props.title}</h2>
              <div className="tile_box_tags">
                <div className="tile_tag">{props.tag01}</div>
                <div className="tile_tag">{props.tag02}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default WorkTile;
