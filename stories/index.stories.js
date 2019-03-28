import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../src/component/button/buttonStorie";
import Card from "../src/component/card/cardStorie";
import Header from "../src/component/header/headerStorie";

storiesOf("Card System", module).add("Introdução", () => {
  const style = { color: "#000" };
  return (
    <div style={style}>
      <h1>Valtech Test Front-end</h1>
      <p>Documentação de repositório de componentes criados para este projeto.
        Componentes trabalham de forma isolada, respeitando as classes criadas para controle de grid,
        seguindo as especifícações do mockup enviado.
      </p>
      <h2>Sistema Grid</h2>
      <p>
          <h3>Classes</h3>
          <strong>Mobile</strong>
          <ul>
            <li>.col--mb-1 = 25%</li>
            <li>.col--mb-2 = 50%</li>
            <li>.col--mb-3 = 100%</li>
          </ul>

          <strong>Desktop</strong>
          <ul>
            <li>.col--dk-1 = 25%</li>
            <li>.col--dk-2 = 50%</li>
            <li>.col--dk-3 = 100%</li>
          </ul>
      </p>
    </div>
  );
});

storiesOf("Header", module)
  .add("Default Header", () => {
    return (
      <Header jobTitle={"Front-end"} name={"Lagoa"}></Header>)
  })

storiesOf("Button", module)
  .add("Default Button", () => {
    return (
      <Button class="btn" onClick={action("clicked")} text={"Explore More"}></Button>)
  })
  .add("Default Primary", () => {
    return (
      <Button class="btn--primary" onClick={action("clicked")} text={"Explore More"}></Button>)
  })

storiesOf("Card", module)
  .add("Card 1 cell", () => <Card cell={1} name={"London"} country={"United Kingdon"} showApp={linkTo("Card")} />)
  .add("Card 2 cells", () => <Card cell={2} name={"London"} country={"United Kingdon"} showApp={linkTo("Card")} />);
