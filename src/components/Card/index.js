import styles from './Card.module.scss'
import {useState} from "react";


function Card({onFavorite, name, price, imageURL, onPlus,}) {
    const [isAdded, setIsAdded] = useState(false);
    const onClickPlus = () => {
        setIsAdded(!isAdded)
        onPlus({name, price, imageURL})
    }

    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img width={25} src="/img/unliked.svg" alt="Liked"/>

            </div>

            <img width={200} src={imageURL}alt="Sneakers"/>
            <p> {name} </p>
            <div className={styles.cardButton}>
                <div className={styles.price}>
                    <span>Price:</span>
                    <b>{price} usd</b>
                </div>
                <img className={styles.plus}
                     onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
                {/*<button className={styles.button} onClick={onPlus}>
                    <img width={15} height={15} src="/img/plus.svg" alt="Plus"/>
                </button>*/}
            </div>
        </div>
    );
}

export default Card;