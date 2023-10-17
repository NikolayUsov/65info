import { useState } from 'react';
import style from './style.module.scss';
import cx from 'classnames';
interface Props {
    items: string[],
    className?: string
}

const Filter = ({items, className}:Props) => {
    const [activeFilter, setFilter] = useState(items[0]);
    
    const onFilterItemClick = (activeSwitch: string) => {
        setFilter(activeSwitch);
    }
    return (<div className={`${style.root} ${className ?? ''}`}>
        {items.map((elem, index) => {
            return(<div onClick={() => onFilterItemClick(elem)} className={cx(style.filterItem, {[style.activeFilterItem]: activeFilter === elem})} key={`${index}`}>
                <p className={style.filterText}>{elem}</p>
            </div>)
        })}
    </div>)
}
export default Filter