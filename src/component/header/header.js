import React from "react";

import "./header.scss";
import Image from "../../paths/images";
import Logo from "../../assets/img/Logo.png";

const Header = (props) => {
  const cover = Image(props.name);
  const style = { backgroundImage: `url(${cover})` };

  return (
    <div className="header" style={style}>
      <div className="header__front">
        <p className="header__sub">{props.jobTitle.toUpperCase()}</p>
        <img className="header__logo" src={Logo}></img>
        <p className="header__info">Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet</p>
      </div>
    </div>
  )
}

export default Header;