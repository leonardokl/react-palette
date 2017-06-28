import React from 'react'
import { shallow, mount } from 'enzyme'
import Palette from './Palette'
import palettes from './utils/__mocks__/palettes'
import getImagePalette from './utils/getImagePalette'

jest.mock('./utils/getImagePalette')

describe('<Palette />', () => {
  const image = 'default'

  describe('shallow', () => {
    it('should not call the children when loaded=false', () => {
      const wrapper = shallow(
        <Palette image={image} />
      )

      expect(wrapper.state('loaded')).toBeFalsy();
      expect(wrapper.children()).toHaveLength(0)
    })
  })

  describe('mount', () => {
    const children = jest.fn((palette) => <div />)
    const wrapper = mount(
      <Palette image={image}>
        {children}
      </Palette>
    )

    it('calls getImagePalette with the image prop', async () => {
      await expect(getImagePalette).toBeCalledWith(image)
    })

    it('calls the children with the palette', async () => {
      await expect(children).toBeCalledWith(palettes.default)
    })

    it('renders the children', async () => {
      await expect(wrapper.contains(<div />)).toEqual(true)
    })

    it('updates the palette when the image change', async () => {
      const newImage = 'secondary'

      wrapper.setProps({ image: newImage})

      await expect(getImagePalette).toBeCalledWith(newImage)
      await expect(children).toBeCalledWith(palettes.secondary)
    })
  });
})
