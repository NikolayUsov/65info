import { PropsWithChildren, ReactNode } from "react";
import style from "./style.module.scss";
import cx from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  uiType: "primary" | "outline" | 'outlinePrimary';
  prefix?: ReactNode;
  postFix?: ReactNode;
}
export const Button = ({
  children,
  uiType,
  prefix,
  postFix,
  className,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button className={cx(style.btnDefault, className, style[uiType])} {...rest}>
      {
        <div className={cx({[style.buttonContent]: prefix || postFix})}>
          {prefix && <div className={style.prefixContainer}>{prefix}</div>}
          <div>{children}</div>
          {postFix && <div className={style.postFixContainer}>{postFix}</div>}
        </div>
      }
    </button>
  );
};
