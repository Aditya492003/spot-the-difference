import { useEffect, useRef, useState } from 'react';
import '../styles/GameBoard.css';
import Timer from './Timer';

export default function GameBoard({ config }) {
  const [found, setFound] = useState([]);
  const [finished, setFinished] = useState(false);
  const imgRefs = [useRef(), useRef()];

  const handleClick = (e, imgIndex) => {
    const img = imgRefs[imgIndex].current;
    const bounds = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / bounds.width;
    const scaleY = img.naturalHeight / bounds.height;
    const x = (e.clientX - bounds.left) * scaleX;
    const y = (e.clientY - bounds.top) * scaleY;

    for (let i = 0; i < config.differences.length; i++) {
      const d = config.differences[i];
      if (
        x >= d.x &&
        x <= d.x + d.width &&
        y >= d.y &&
        y <= d.y + d.height &&
        !found.includes(i)
      ) {
        setFound([...found, i]);
        break;
      }
    }
  };

  useEffect(() => {
    if (found.length === config.differences.length) {
      setFinished(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [found]);

  return (
    <div className="game-container">
      <h2>{config.gameTitle}</h2>

      <div className="status-bar">
        <div className="score">Found: {found.length} / {config.differences.length}</div>
        <Timer isFinished={finished} />
      </div>

      <div className="image-container">
        {[config.images.image1, config.images.image2].map((src, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={src}
              ref={imgRefs[index]}
              onClick={(e) => handleClick(e, index)}
              className="game-image"
              alt={`Game ${index + 1}`}
            />
            {found.map((i) => {
              const d = config.differences[i];
              const scaleX = imgRefs[index].current?.clientWidth / config.originalSize.width;
              const scaleY = imgRefs[index].current?.clientHeight / config.originalSize.height;
              return (
                <div
                  key={i}
                  className="dot"
                  style={{
                    left: d.x * scaleX,
                    top: d.y * scaleY,
                    width: d.width * scaleX,
                    height: d.height * scaleY,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {finished && (
        <div className="success-message">
           All differences found!!! Reloading...
        </div>
      )}
    </div>
  );
}
