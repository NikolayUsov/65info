import { ReactNode } from 'react';
import style from './style.module.scss';
import cx from 'classnames'
import { ShowAllIcon } from '../Icons/Icons';
type Props = {
    kindCar: string,
    icon: ReactNode,
    isActive: boolean,
    className?: string,
}
const KindOfCarCard = ({icon, kindCar, isActive, className}:Props) => {

    if (kindCar === 'showAll') {
        return(<div className={style.showAllRoot}>

        <p className={style.showAllText}>{'Показать все бренды'}</p>
         <div>
            <ShowAllIcon />
         </div>
        </div>
    )
    }
    return(<div className={cx(style.root, className, {[style.active]: isActive,})}>
        <div>
           {icon}
        </div>
        <p className={style.kindOfCar}>{kindCar}</p>
        <p className={style.total}>12 объявлений</p>
    </div>)
}
export default KindOfCarCard;
