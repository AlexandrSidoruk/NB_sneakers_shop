

function Card() {
    return(
        <div className="card">
            <div className="favorite">
                <img width={25} src="/img/unliked.svg" alt="Liked"/>

            </div>

            <img width={200} src="/img/sneakers/1.jpeg" alt="Sneakers"/>
            <p> New Balance 574 </p>
            <div className="cardButton">
                <div className="price">
                    <span>Price:</span>
                    <b>12500 usd</b>
                </div>
                <button className="button">
                    <img width={15} height={15} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;