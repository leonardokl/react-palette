import { render, wait } from "@testing-library/react";
import React from "react";
import Palette, { getPalette } from "../";

test("execute children with palette when its loaded", async () => {
  const children = jest.fn(() => null);
  const image = 'test'
  const palette = await getPalette(image);

  render(<Palette image={image} children={children} />);

  expect(children).not.toHaveBeenCalled();

  await wait();

  expect(children).toHaveBeenCalledTimes(1);
  expect(children).toHaveBeenCalledWith(palette);
});
