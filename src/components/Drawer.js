function Drawer() {
    return(
        <div style={{display: "none"}} className="overlay">
        <div className="drawer">
            <h2>My Cart <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/></h2>
            <div className="list">
                <div className="cartItem">
                    <img width={100} height={70} src="/img/sneakers/1.jpeg" alt="Sneakers"/>
                    <div>
                        <p>New Balance 574</p>
                        <b>12500$</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem">
                    <img width={100} height={70} src="/img/sneakers/1.jpeg" alt="Sneakers"/>
                    <div>
                        <p>New Balance 574</p>
                        <b>12500$</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem">
                    <img width={100} height={70} src="/img/sneakers/1.jpeg" alt="Sneakers"/>
                    <div>
                        <p>New Balance 574</p>
                        <b>12500$</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>

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