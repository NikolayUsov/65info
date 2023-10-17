import { useState } from 'react';
import style from './style.module.scss';
import cx from 'classnames';
interface Props {
    items: string[],
    className?: string
}

const Switcher = ({items, className}:Props) => {
    const [activeSwitch, setActiveSwitch] = useState(items[0]);
    const onSwitchItemClick = (activeSwitch:string) => {
        setActiveSwitch(activeSwitch);
    }
    
    return (<div className={`${style.root} ${className ?? ''}`}>
        {items.map((elem, index) => {
            return(<div onClick={() => onSwitchItemClick(elem)} className={cx(style.switcherItem, {[style.activeSwitchItem]: activeSwitch === elem})} key={`${index}`}>
                <p className={style.switcherText}>{elem}</p>
            </div>)
        })}
    </div>)
}
export default Switcher