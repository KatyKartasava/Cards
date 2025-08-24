import {Button} from '../button/Button';
import s from './Card.module.scss';

// type LabelPropsType = "Free" | "Sale" | "";

type CardPropsType = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  widthLabel: string;
}

export const Card = (props: CardPropsType) => {
  return (
      <article className={s.card}>
        <img className={s.image} src={props.imgSrc} alt="Desert" />
        <div className="cardText">
          <h1 className={s.title}>{props.title}</h1>
          <p className={s.text}>{props.description}</p>
          <div className="buttonsWrapper">
            <Button title={"See More"} />
            <Button title={"Save"} />
          </div>
        </div>
      </article>
  )
}

export default Card;