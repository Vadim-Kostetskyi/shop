import Checkbox  from "elements/checkbox"

export const Sidebar = (): JSX.Element => {
    const color = ['Чорний', 'Синій', 'Червоний', 'Зелений', 'Жовтий', 'Білий']
    const brands = ['ASICS', 'Navigator', 'Under Armour', 'Puma', 'Nike', 'Skechers', 'LONZA', 'Adidas', 'Adidas', 'Без бренду', 'Bona']
    const country =['Україна','Польща','Італія','Німеччина','Турція','США']
    const size = [44, 46, 48, 50, 52]

    return (
        <div className="sidebar">
            <div className="sidebar__price"></div>
            <div className="sidebar__color">
                <form>
                    <p>Колір</p>
                   <Checkbox values={color} />
                </form>
            </div>
            <div className="sidebar__brands">
                 <form>
                    <p>Бренди</p>
                   <Checkbox values={brands} />
                </form>
            </div>
            <div className="sidebar__production">
                 <form>
                    <p>Країна виробник</p>
                   <Checkbox values={country} />
                </form>
            </div>
            <div className="sidebar__size">
                 <form>
                    <p>Розмір</p>
                    <Checkbox values={size} />
                </form>
            </div>
            <div className="sidebar__function">
                <button>Показати (N) товарів</button>
                <button>Очистити фільтр</button>
            </div>
        </div>
    )
 }