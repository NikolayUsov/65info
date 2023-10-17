import Input from "../Input/Input";
import SelectUi from "../Select/Select";
import style from "./style.module.scss";

const SELECT_OPTIONS = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CAR_FORM_INPUT_ITEMS = [
  { type: "select", placeholder: "Марка" },
  { type: "select", placeholder: "Модель" },
  { type: "select", placeholder: "Поколение" },
  { type: "select", placeholder: "Кузов" },
  { type: "select", placeholder: "Коробка" },
  {
    type: "multi",
    formIems: [
      { type: "select", placeholder: "Год от" },
      { type: "select", placeholder: "до" },
    ],
  },
  {
    type: "multi",
    formIems: [
      { type: "input", placeholder: "Цена от, ₽" },
      { type: "input", placeholder: "до" },
    ],
  },
  {
    type: "multi",
    formIems: [
      { type: "input", placeholder: "Пробег от км" },
      { type: "input", placeholder: " до" },
    ],
  },
];
const CarForm = () => {
  return (
    <div className={style.root}>
      {CAR_FORM_INPUT_ITEMS.map(({ type, placeholder, formIems }) => {
        if (type === "multi") {
          return (
            <div className={style.doubleWrapper}>
              {formIems?.map(({ type, placeholder }) => {
                return (
                  <div>
                    {type === "select" ? (
                      <SelectUi
                        option={SELECT_OPTIONS}
                        placeholder={placeholder}
                      />
                    ) : (
                      <Input placeholder={placeholder} />
                    )}
                  </div>
                );
              })}
            </div>
          );
        }

        return (
          <div>
            {type === "select" ? (
              <SelectUi option={SELECT_OPTIONS} placeholder={placeholder} />
            ) : (
              <Input placeholder={placeholder} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CarForm;
