import {Dimensions, PixelRatio, Platform} from 'react-native';

const Width = (widthPercent, withPX = true) => {
  const screenWidth = Dimensions.get('window').width;
  const pixelValue = PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
  return withPX ? `${pixelValue}px` : pixelValue;
};
const Height = (heightPercent, withPx = true) => {
  const screenHeight = Dimensions.get('window').height;
  const pixelValue = PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
  return withPx ? `${pixelValue}px` : pixelValue;
};

export function fontSize(size, withPx = true) {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;

  const newSize = size * scale;
  let fontValue;
  if (Platform.OS === 'ios') {
    fontValue = Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    fontValue = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
  return withPx ? `${fontValue}px` : fontValue;
}
export const Layout = {
  Width,
  Height,
};