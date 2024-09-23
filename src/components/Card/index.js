

function Card(props) {
    return(
        <div className="card">
            <div className="favorite">
                <img width={25} src="/img/unliked.svg" alt="Liked"/>

            </div>

            <img width={200} src={props.imageURL}alt="Sneakers"/>
            <p> {props.name} </p>
            <div className="cardButton">
                <div className="price">
                    <span>Price:</span>
                    <b>{props.price} usd</b>
                </div>
                <button className="button">
                    <img width={15} height={15} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;