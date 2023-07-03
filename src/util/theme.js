export const colors = {
    accentColor: '#fe980f',
    secondColor: '#F0F0E9',
    gray: '#828181',
    lightGray: '#b3b1b1',
    lightBlack: '#363432',
    black: 'black',
    limeGreen: '#9de848',
    lightRed: '#f23f35',
    red: 'red',
    white: 'white',
    dirtyWhite: '#fafdff',
};


export const fontWeight = {
    light: '100',
    medium: '400',
    mediumBold: '600',
    bold: '800',
};


export const fontSize = {
    xSmall: '10px',
    small: '12px',
    optimal: "13px",
    smallPlus: '14px',
    normal: '16px',
    medium: '18px',
    large: '24px',
    largeG: '30px',
    xLarge: '36px',
};



export const fontFamily = {
    LatoBlack: 'LatoBlack',
    LatoBlackItalic: 'LatoBlackItalic',
    LatoBold: 'LatoBold',
    LatoBoldItalic: 'LatoBoldItalic',
    LatoItalic: 'LatoItalic',
    LatoLight: 'LatoLight',
    LatoLightItalic: 'LatoLightItalic',
    LatoRegular: 'LatoRegular',
    LatoThin: 'LatoThin',
    LatoThinItalic: 'LatoThinItalic',
    MontserratBlack: 'MontserratBlack',
    MontserratBlackItalic: 'MontserratBlackItalic',
    MontserratBold: 'MontserratBold',
    MontserratBoldItalic: 'MontserratBoldItalic',
    MontserratExtraBold: 'MontserratExtraBold',
    MontserratExtraLight: 'MontserratExtraLight',
}

export function generateId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }



