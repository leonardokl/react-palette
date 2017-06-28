import React, { PureComponent } from 'react'
import getImagePalette from './utils/getImagePalette'

class Palette extends PureComponent {
  state = {
    palette: {},
    loaded: false,
    error: false
  }

  updatePalette = (image) => {
    return getImagePalette(image)
      .then(palette => this.setState({ palette, loaded: true }))
      .catch(error => {
        console.error(error);
        this.setState({ palette: {}, loaded: true, error })
      });
  }

  componentDidMount() {
    return this.updatePalette(this.props.image)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image !== this.props.image) {
      return this.updatePalette(nextProps.image)
    }
  }

  render() {
    const { children } = this.props
    const { palette, loaded } = this.state

    return loaded && children(palette)
  }
}

export default Palette
