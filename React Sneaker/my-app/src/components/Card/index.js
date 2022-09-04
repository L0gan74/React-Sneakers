import styles from "./Card.module.scss";
import React from "react";

function Card({ title, imageUrl, price, onFavorite, onkPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onkPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={onFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/likeKlick.svg" : "/img/likeN0Cklick.svg"}
          alt=""
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <p className="kross-name">{title}</p>
      <div className="card-block">
        <div className="card-price">
          <span>Цена:</span>
          <p>{price}</p>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={11}
          height={11}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btnPlus.svg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
