import style from './style.module.scss';
import imgUrl from '../../assets/images/kindOfCar.png'
type Props = {
    type: string
}

export const TypeOfCarCard = ({type}:Props) => {
 
    return(<div className={style.root}>
        <div className={style.imgContainer}>
            <img src={imgUrl}/>
        </div>
        <p className={style.typeText}>{type}</p>
        <span className={style.total}>12 объявлений</span>
    </div>)
}