export const theme = {
  primary: "#4ecca3",
  secondary: "#eeeeee",
  bgPrimary: "black",
  bgSecondary: "#232931",
};

const size = {
  phoneOnly: "599px",
  tabletPortrait: "600px",
  tabletLandscape: "900px",
  desktop: "1200px",
  bigDesktop: "1800px",
};

export const device = {
  phoneOnly: `(max-width: ${size.phoneOnly})`,
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  desktop: `(min-width: ${size.desktop})`,
  bigDesktop: `(min-width: ${size.bigDesktop})`,
};
