import { render, wait } from "@testing-library/react";
import React from "react";
import { Palette, getPalette } from "../";

test("execute children with palette", async () => {
  const children = jest.fn(() => null);
  const src = "test";
  const palette = await getPalette(src);

  render(<Palette src={src} children={children} />);

  expect(children).toHaveBeenCalledWith({
    loading: true,
    error: undefined,
    data: {}
  });

  await wait();

  expect(children).toHaveBeenCalledWith({
    loading: false,
    error: undefined,
    data: palette
  });
});
