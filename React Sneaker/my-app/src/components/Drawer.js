function Drawer({onClose, onRemove, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt=""
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div>
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <b>21 534 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <b>1075 руб.</b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
