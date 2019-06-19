import { getPalette } from "../";

test("return camelCased values", async () => {
  const actual = await getPalette("test");

  expect(actual).toMatchSnapshot();
});
