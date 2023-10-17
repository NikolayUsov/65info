import Select from "react-select";
import style from './style.module.scss'

const SelectUi = ({ ...props }) => {
  return (
    <Select
      {...props}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: '48px',
          borderRadius:'8px',
            border: `1px solid #D3D6D9)`,
            background: '#FFF',
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default SelectUi;
