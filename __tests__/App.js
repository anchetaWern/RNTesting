import "react-native";
import React from "react";
import App from "../App";

import Card from "../src/components/Card";
import pokemonData from "./data/pokemon.json";

import renderer from "react-test-renderer";

it("App is rendered correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("card renders correctly", () => {
  const tree = renderer
    .create(<Card fetching={false} data={pokemonData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
