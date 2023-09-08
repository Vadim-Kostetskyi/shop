import Checkbox  from "elements/checkbox"

export const Sidebar = (): JSX.Element => {
    const color = ['Чорний', 'Синій', 'Червоний', 'Зелений', 'Жовтий', 'Білий']
    const brands = ['ASICS', 'Navigator', 'Under Armour', 'Puma', 'Nike', 'Skechers', 'LONZA', 'Adidas', 'Adidas', 'Без бренду', 'Bona']
    const country =['Україна','Польща','Італія','Німеччина','Турція','США']
    const size = [44, 46, 48, 50, 52]

    return (
        <div className="sidebar">
            <div className="sidebar__price"></div>
            
                <form className="sidebar__color">
                    <strong>Колір</strong>
                    <Checkbox values={color} />
                </form>
    
            
                <form className="sidebar__brands">
                    <strong>Бренди</strong>
                    <Checkbox values={brands} />
                </form>
            
                <form className="sidebar__production">
                    <strong>Країна виробник</strong>
                    <Checkbox values={country} />
                </form>
           
                <form className="sidebar__size">
                    <strong>Розмір</strong>
                    <Checkbox values={size} />
                </form>
            
            <div className="sidebar__function">
                <button>Показати (N) товарів</button>
                <button>Очистити фільтр</button>
            </div>
        </div>
    )
 }