import { ReactNode } from 'react';
import style from './style.module.scss';

type Props = {
  children: ReactNode;
  hasBaner?: boolean;
};

const Wrapper = ({ children, hasBaner = false }: Props) => {
  return (
    <div className={hasBaner ? style.rootWithBanner : style.root}>
      {children}
    </div>
  );
};

export default Wrapper;