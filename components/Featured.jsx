
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/palm.jpeg",
    "/img/eggs.jpeg",
    "/img/beans.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <AiOutlineLeft layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <AiOutlineRight layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;