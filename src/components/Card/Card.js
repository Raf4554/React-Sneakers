import React from 'react';
import styles from './Card.module.scss'

function Card({title,imageUrl,price,onPlus,onFavorite }) {
 const [isAdded, setIsAdded] = React.useState(false);
 const [isFavorite , setIsFavorite] = React.useState(false);

 const onClickPlus = () => {
  onPlus({title,imageUrl,price});
  setIsAdded(!isAdded);
 };

 const onClickFavorite = () => {
  setIsFavorite(!isFavorite);
 }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "../img/lick.svg" : '../img/unlicked.svg'} alt="unlicked" />
      </div>

      <img width={133} height={112} src={imageUrl} alt="sneakers"/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
          <img className={styles.plus} onClick={onClickPlus}  src={ isAdded ? "../img/btn-check.svg" : "../img/plus.svg"} alt="plus" />
      </div>
    </div>
  );
}

export default Card;