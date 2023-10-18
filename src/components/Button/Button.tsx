import { PropsWithChildren, ReactNode } from "react";
import style from "./style.module.scss";
import cx from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  uiType: "primary" | "outline" | 'outlinePrimary';
  prefixIcon?: ReactNode;
  postFix?: ReactNode;
}
export const Button = ({
  children,
  uiType,
  prefixIcon,
  postFix,
  className,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button className={cx(style.btnDefault, className, style[uiType])} {...rest}>
      {
        <div className={cx({[style.buttonContent]: prefixIcon || postFix})}>
          {prefixIcon && <div className={style.prefixIconContainer}>{prefixIcon}</div>}
          <div>{children}</div>
          {postFix && <div className={style.postFixContainer}>{postFix}</div>}
        </div>
      }
    </button>
  );
};
