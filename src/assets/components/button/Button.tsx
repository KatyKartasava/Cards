import s from './Button.module.scss';

type ButtonPropsType = {
  title: string
}

export const Button = ({title}: ButtonPropsType) => {
  return (
      <button className={s.button}>{title}</button>
  )
}

export default Button;