function Drawer({onClose, items = []}) {
    return(
        <div  className="overlay">
        <div className="drawer">
            <h2>My Cart <img className="removeBtn"  onClick={onClose} src="/img/btn-remove.svg" alt="Remove"/></h2>
            <div className="list">
                {items.map((obj) => (
                    <div className="cartItem"   key={obj.imageURL}>

                        <img width={100} height={70} src={obj.imageURL} alt="Sneakers"/>

                        <div>
                            <p>{obj.name}</p>
                            <b>{obj.price}$</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                ))}
            </div>

            <ul>
                <span>Order Total</span>
                <b>12500 $</b>
            </ul>
            <button>Payment</button>
        </div>
        </div>
    );
}

export default Drawer;