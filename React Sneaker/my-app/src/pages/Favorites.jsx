function Favorites({searchValue, onChangeSearchInput}) {
  return (
    <div className="content">
      <div className="content-top">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          type="text"
          placeholder="Поиск..."
        />
      </div>
      <div className="card-main">
        тут будут мои закладки
      </div>
    </div>
  );
}

export default Favorites;
