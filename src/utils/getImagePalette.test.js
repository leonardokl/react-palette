import palettes from './__mocks__/palettes'
import getImagePalette from './getImagePalette'

jest.mock('node-vibrant')

describe('getImagePalette', () => {
  it('should convert the Vibrant response', async () => {
    const palette = await getImagePalette()
    
    expect(palette).toEqual(palettes.default)
  })
})
