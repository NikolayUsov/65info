import style from './style.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...props}:Props) => {
    return<input {...props} className={style.root}/>
} 

export default Input