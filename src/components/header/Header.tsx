import { Link, Outlet } from 'react-router-dom';
import logo from 'images/Shop.png';
import car from 'images/car.svg';
import icon from 'images/icon.svg';
import trash from 'images/trash.svg';
import search from 'images/search.svg';
import { products } from 'redux/products/operations';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { category } from 'redux/products/selectors';
// import { AppDispatch, RootState } from 'redux/store';
import { useAppDispatch, useAppSelector } from 'hook';
import { IProductData } from 'redux/products/slice';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(products());
  }, []);
  // console.log(typeof category);
  // category.filter
  
    


const categoryNames: IProductData[] = useAppSelector(state =>
  state.category.categories.filter((el: IProductData) => el.name.length <= 15)
);
  const categoryName: IProductData[] = categoryNames;

  const handleClick = (): void => {
    console.log(123);
  };

  return (
    <header className="header">
      <div className="header__box-1">
        <div className="header__links">
          <a className="header__link link">Оплата і доставки</a>
          <a className="header__link link">Про магазин</a>
          <a className="header__link link">Контакти</a>
          <div>
            <a className="header__link link">Сервіс і допомога</a>
            <div className="category__item__backdrop">
              <ul className="category__item__drop">
                <li>Назва пункта</li>
                <li>Назва пункта</li>
                <li>Назва пункта</li>
                <li>Назва пункта</li>
                <li>Назва пункта</li>
              </ul>
            </div>
          </div>
          <a className="header__link link">Бренди</a>
          <a className="header__link link">Відгуки</a>
        </div>

        <div className="top-bar">
          <div className="top-bar__box">
            <svg
              className="top-bar__img-phone"
              width="20"
              height="20"
              viewBox="0 0 32 32"
            >
              <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
            </svg>
            <div className="top-bar__info">
              <a className="link">+375 20 555 10 99</a>
              <span className="top-bar__info__text">Пн-Пт c 9:00 до 13:00</span>
            </div>
          </div>
          <Link className="top-bar__box" to="/register">
            <svg className="top-bar__img-user" width="20" height="20">
              <path d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM7 6v2c0 1.657 1.343 3 3 3s3-1.343 3-3v0-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v0zM3.35 14.44c1.456 2.155 3.89 3.553 6.65 3.553s5.194-1.398 6.632-3.525l0.018-0.028c-1.951-0.918-4.238-1.453-6.65-1.453s-4.699 0.536-6.748 1.495l0.098-0.041z"></path>
            </svg>
            <span>Увійти</span>
          </Link>
        </div>
      </div>
      <div className="header__box-2">
        <div>
          <img className="logo" src={logo} alt="" />
          <span className="logo__text">Наш магазин</span>
        </div>
        <div className="header__box-2__box">
          <div className="input-box">
            <input
              className="input-box__input"
              type="text"
              placeholder="Введіть назву товару"
            />
            <div className="input-box__img-box">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="delivery">
            <div className="delivery__box">
              <div className="delivery__box__second">
                <img className="delivery__img" src={car} alt="" />
              </div>
            </div>
            <div className="delivery__text">
              <span>Безкоштовна доставка</span>
              <span className="delivery__text-grey">по всій Україні</span>
            </div>
          </div>
          <div className="delivery">
            <div className="delivery__box">
              <div className="delivery__box__second">
                <img className="delivery__img" src={icon} alt="" />
              </div>
            </div>

            <div className="delivery__text">
              <span>Ваші особисті послуги</span>
              <span className="delivery__text-grey">в нашій компанії</span>
            </div>
          </div>
          <div className="cart">
            <div className="cart__number number">
              <span className="cart__number__text">1</span>
            </div>
            <img className="cart__icon" src={trash} alt="" />
            <div>
              <span className="cart__text">Кошик</span> <br />
              <span>У вас 1 подарунок</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header__box-3 category">
        <ul className="category__list">
        {(categoryName || []).map((el: IProductData, index: number) => (
  <li className="category__item" key={index} onClick={handleClick}>
    {el.name}
    <div className="category__item__backdrop">
      <ul className="category__item__drop">
        <li>Назва пункта</li>
        <li>Назва пункта</li>
        <li>Назва пункта</li>
        <li>Назва пункта</li>
        <li>Назва пункта</li>
      </ul>
    </div>
    <div className="category__item__underlining"></div>
  </li>
))}


        </ul>
      </div>
    </header>
  );
};