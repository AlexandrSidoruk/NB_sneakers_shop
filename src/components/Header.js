function Header() {
    return(
        <header>
            <div  className="headerLeft">
                <img width={60} height={60} src="/img/logo.png" alt="Logo" />
                <div className="headerInfo">
                    <h3>Sneakers</h3>

                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img width={18} height={18} src="/img/cart.png" alt="Cart" />
                    <span>1250 usd</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.png" alt="User"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;