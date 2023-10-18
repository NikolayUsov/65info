import { Button } from "../../components/Button/Button";
import CarForm from "../../components/CarForm/CarForm";
import Filter from "../../components/Filter/Filter";
import { ArrowDown, CloseIcon, ToyotaIcon } from "../../components/Icons/Icons";
import KindOfCarCard from "../../components/KindOfCarCard/KindOfCarCard";
import Switcher from "../../components/Switcher";
import { TypeOfCarCard } from "../../components/TypeOfCarCard/TypeOfCarCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import style from "./style.module.scss";

const SWITCHER_ITEMS = [
  "Автомобили",
  "Спецтехника",
  "Мототехника",
  "Водный транспорт",
];
const FILTER_ITEMS = ["Все", "С пробегом", "Новые", "В кредит"];
const KIND_OF_CARS_ITEMS = Array.from({ length: 9 }, (_, i) => ({
  kindCar: i === 8 ? "showAll" : "Toyota",
  icon: <ToyotaIcon />,
  isActive: i === 2,
}));
const TYPE_OF_CARS_ITEMS = [
  "Внедорожник",
  "Седан",
  "Хэтчбек",
  "Универсал",
  "Минивэн",
  "Купе",
  "Пикап",
  "Фургон",
  "Грузовик",
  "Кран-балка",
];
console.log(KIND_OF_CARS_ITEMS);
const Cars = () => {
  return (
    <div className={style.root}>
      <Wrapper hasBaner={true}>
        <div>
          <Switcher items={SWITCHER_ITEMS} />
          <div className={style.carFilterContainer}>
            <Filter items={FILTER_ITEMS} className={style.filters} />
            <div>
              <CarForm />
              <div className={style.controls}>
                <Button uiType="outline"  prefixIcon={<CloseIcon />}>Сбросить всё</Button>
                <Button uiType="outlinePrimary" className={style.filterControl} postFix={<ArrowDown />}>Расширенный фильтр</Button>
                <Button uiType="primary" className={style.totalControll} >Показать 12 560 объявлений</Button>
              </div>
            </div>
          </div>
          <div className={style.kindOfCarContainer}>
            {KIND_OF_CARS_ITEMS.map((elem) => (
              <KindOfCarCard {...elem} className={style.kindOfCarWrap} />
            ))}
          </div>
          <div className={style.typeOfCarContainer}>
            <div className={style.titleContainer}>
              <h2 className={style.containerTitle}>Автомобили по категориям</h2>
              <p className={style.totalCarsText}>12 560 объявлений</p>
            </div>

            <div className={style.typeCardsContainer}>
              {TYPE_OF_CARS_ITEMS.map((type) => (
                <TypeOfCarCard type={type} />
              ))}
            </div>
          </div>
        </div>
        <div className={style.banner}>

        </div>
      </Wrapper>
    </div>
  );
};

export default Cars;
