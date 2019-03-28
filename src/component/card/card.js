import React from "react";
import Button from "../button/button";

import "./card.scss";
import Image from "../../paths/images";


const Card = (props) => {
  const cover = Image(props.name);
  const style = { backgroundImage: `url(${cover})` };

  return (
    <div className={props.class}>
      <div className="card" style={style}>
        <div className="card__front">
          <p className="card__sub">{props.country.toUpperCase()}</p>
          <p className="card__title">{props.name.toUpperCase()}</p>
          <p className="card__info">"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet"</p>
        </div>
        <div className="card__button">
          <Button text={"Explore More"} class="btn--primary"></Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
