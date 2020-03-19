const colors = {
  darkGray: '#161616',
  black: '#000',
  blue: '#21A8F4',
  white: '#FFFFFF',
  pink: '#F204C5',
  opacityBlue: 'rgba(33, 168, 244, .2)',
  opacityPink: 'rgba(242, 4, 197, .2)',
  opacityGray: 'rgba(22, 22, 22, .2)',
  orangeSoft: '#ff504f'
};

const baseUnit = 4;

export default {
  blue: colors.blue,
  pink: colors.pink,
  white: colors.white,
  unit: baseUnit,
  header: {
    shopCartBackground: colors.orangeSoft,
    searchColor: colors.blue,
    infoContainerBackground: colors.black,
    dropdownBackground: colors.white,
    borderBottomDropdownHover: colors.blue,
    borderBottomDropdown: colors.darkGray,
    color: colors.blue,
    linkColor: colors.darkGray,
    bordersDropdown: colors.darkGray,
    cartBackground: colors.white,
    cartColor: colors.darkGray,
    burgerMenuLineBackground: colors.white,
    burgerMenuNavBackground: colors.white,
    searchDropdownBorderBottom: colors.darkGray,
    dropdownSearchBackground: colors.white,
    searchWrapperBorder: colors.darkGray
  },
  menu: {
    background: colors.white,
    color: colors.blue,
    selected: {
      background: colors.opacityBlue,
      color: colors.blue,
      borderLeft: colors.pink
    },
  },
  main: {
    sliderPopUp: {
      popUpBackgroundMediaHuge: colors.black,
      popUpColorMediaHuge: colors.white,
      popUpBackgroundMediaLow: colors.white,
      popUpColorMediaLow: colors.darkGray,
      popUpButtonBackgroundMediaHuge: colors.white,
      popUpButtonBackgroundMediaLow: colors.darkGray,
      popUpButtonColorMediaHuge: colors.black,
      popUpButtonColorMediaLow: colors.white
    }
  }
};
