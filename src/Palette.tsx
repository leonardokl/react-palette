import { PureComponent, ReactNode } from "react";
import { getPalette, PaletteColors } from "./getPalette";

type PaletteState = {
  palette: PaletteColors;
  loaded: boolean;
  error?: Error;
};

export type PaletteProps = {
  image: string;
  children(palette: any): ReactNode;
};

export class Palette extends PureComponent<PaletteProps, PaletteState> {
  state = {
    palette: {},
    loaded: false,
    error: undefined
  };

  updatePalette = image => {
    getPalette(image)
      .then(palette => this.setState({ palette, loaded: true }))
      .catch(error => {
        console.error(error);
        this.setState({ palette: {}, loaded: true, error });
      });
  };

  componentDidMount() {
    this.updatePalette(this.props.image);
  }

  componentDidUpdate(prevProps) {
    const { image } = this.props;

    if (prevProps.image !== image) {
      this.updatePalette(image);
    }
  }

  render() {
    const { children } = this.props;
    const { palette, loaded } = this.state;

    return loaded && children(palette);
  }
}

export default Palette;
