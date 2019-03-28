import React from "react";
import Button from "../button/button";

import "./card.scss";
import "../App.scss";
import Image from "../../paths/images";


const Card = (props) => {
    const cover = Image(props.name);
    const style = { backgroundImage: `url(${cover})` };

    if (props.cell == 1) {
        return (
            <div className="row">
                <div className="col col--mb-3 col--dk-1">
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
            </div>
        );
    }
    if (props.cell == 2) {
        return (
            <div className="row">
                <div className="col col--mb-3 col--dk-2">
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
            </div>
        );
    }
}

export default Card;