import icon from './close.png';
import { useState } from 'react';

interface CloseButtonProps {
  onClick: () => void
};

const CloseButton = ({onClick} : CloseButtonProps) => {

  const [isHover, setIsHover] = useState(false);

  return <button 
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    onClick={onClick}
    style={{
    width: 40,
    height: 40,
    backgroundImage: `url(${icon})`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "none",
    cursor: isHover ? "pointer" : "default",
    transform: isHover ? "scale(0.95)" : "none",
    transition: "0.1s ease-in"
  }}></button>
};

export default CloseButton;