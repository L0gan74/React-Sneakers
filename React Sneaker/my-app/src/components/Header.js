import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <div className="headerLeft">
      <Link to="/">
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </Link>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={18} height={17} src="/img/cart.svg" alt="" />
          <span className="price">1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="/img/like.svg" alt="" />
          </Link>
        </li>
        <li>
          <img width={18} height={17} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
