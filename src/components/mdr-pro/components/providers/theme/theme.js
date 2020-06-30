const hexToRgb = (input) => {
  const color = input.replace("#", "").toUpperCase();
  const regex = /[0-9A-Fa-f]/g;
  if (!regex.test(color) || (color.length !== 3 && color.length !== 6)) {
    throw new Error(`Color: ${color} is not a valid Hex Color`);
  }
  const first = color.length === 3 ? color[0] + color[0] : color[0] + color[1];
  const second = color.length === 3 ? color[1] + color[1] : color[2] + color[3];
  const last = color.length === 3 ? color[2] + color[2] : color[4] + color[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(
    last,
    16,
  )}`;
};

const palette = {
  primary: ["#3386c7", "#4b96ce", "#2b79ba", "#0c3c78"],
  secondary: ["#e92f42", "#e44759", "#da2640", "#bb1333"],
  warning: ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"],
  danger: ["#f44336", "#ef5350", "#e53935", "#f55a4e"],
  success: ["#4caf50", "#66bb6a", "#43a047", "#5cb860"],
  info: ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"],
  gray: [
    "#999",
    "#777",
    "#3C4858",
    "#AAAAAA",
    "#D2D2D2",
    "#DDD",
    "#555555",
    "#333",
    "#eee",
    "#ccc",
    "#e4e4e4",
    "#E5E5E5",
    "#f9f9f9",
    "#f5f5f5",
    "#495057",
    "#e7e7e7",
    "#212121",
    "#c8c8c8",
    "#505050",
  ],
  whiteColor: "#fff",
  blackColor: "#000",
  twitter: "#55acee",
  facebook: "#3b5998",
  google: "#dd4b39",
  linkedIn: "#0976b4",
  pinterest: "#cc2127",
  youtube: "#e52d27",
  tumblr: "#35465c",
  behance: "#1769ff",
  dribble: "#ea4c89",
  reddit: "#ff4500",
};
const drawerWidth = { default: 260, mini: 80 };
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};
const containerDefault = {
  paddingRight: 15,
  paddingLeft: 15,
  marginRight: "auto",
  marginLeft: "auto",
  "&:before,&:after": {
    display: "table",
    content: '" "',
  },
  "&:after": {
    clear: "both",
  },
};

const containerMedia = {
  "@media (min-width: 768px)": {
    width: 750,
  },
  "@media (min-width: 992px)": {
    width: 970,
  },
  "@media (min-width: 1200px)": {
    width: 1170,
  },
};

const container = {
  default: {
    ...containerDefault,
    ...containerMedia,
  },
  fluid: {
    ...containerDefault,
  },
};

const font = {
  default: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: 1.5,
  },
};

const boxShadow = {
  default: {
    boxShadow: `0 10px 30px -12px rgba(${hexToRgb(
      palette.blackColor,
    )}, 0.42), 0 4px 25px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(palette.blackColor)}, 0.2)`,
  },
  primary: {
    boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, .14), 0 7px 10px -5px rgba(${hexToRgb(palette.primary[0])}, .4)`,
  },
  secondary: {
    boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, .14), 0 7px 10px -5px rgba(${hexToRgb(palette.secondary[0])}, .4)`,
  },
  info: {
    boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, .14), 0 7px 10px -5px rgba(${hexToRgb(palette.info[0])}, .4)`,
  },
  success: {
    boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, .14), 0 7px 10px -5px rgba(${hexToRgb(palette.success[0])}, .4)`,
  },
  warning: {
    boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, .14), 0 7px 10px -5px rgba(${hexToRgb(palette.warning[0])}, .4)`,
  },
  danger: {
    boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, .14), 0 7px 10px -5px rgba(${hexToRgb(palette.danger[0])}, .4)`,
  },
};
const cardHeader = {
  warning: {
    background: `linear-gradient(60deg, ${palette.warning[1]}, ${palette.warning[2]})`,
    ...boxShadow.warning,
  },
  success: {
    background: `linear-gradient(60deg, ${palette.success[1]}, ${palette.success[2]})`,
    ...boxShadow.success,
  },
  danger: {
    background: `linear-gradient(60deg, ${palette.danger[1]}, ${palette.danger[2]})`,
    ...boxShadow.danger,
  },
  info: {
    background: `linear-gradient(60deg, ${palette.info[1]}, ${palette.info[2]})`,
    ...boxShadow.info,
  },
  primary: {
    background: `linear-gradient(60deg, ${palette.primary[1]}, ${palette.primary[2]})`,
    ...boxShadow.primary,
  },
  secondary: {
    background: `linear-gradient(60deg, ${palette.secondary[1]}, ${palette.secondary[2]})`,
    ...boxShadow.secondary,
  },
};
const styles = {
  boxShadow: {
    border: 0,
    borderRadius: 3,
    boxShadow: `0 10px 20px -12px rgba(${hexToRgb(
      palette.blackColor,
    )}, 0.42), 0 3px 20px 0 rgba(${hexToRgb(
      palette.blackColor,
    )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(palette.blackColor)}, 0.2)`,
    padding: "10px 0",
    transition: "all 150ms ease 0s",
  },
  title: {
    color: palette.gray[2],
    textDecoration: "none",
    fontWeight: 300,
    marginTop: 30,
    marginBottom: 25,
    minHeight: 32,
    "& small": {
      color: palette.gray[1],
      fontWeight: 400,
      lineHeight: 1,
    },
  },
};
const tooltip = {
  padding: "10px 15px",
  minWidth: 130,
  color: palette.whiteColor,
  lineHeight: 1.7,
  background: `rgba(${hexToRgb(palette.gray[6])}, 0.9)`,
  border: "none",
  borderRadius: 3,
  opacity: "1 !important",
  boxShadow: `0 8px 10px 1px rgba(${hexToRgb(
    palette.blackColor,
  )}, 0.14), 0 3px 14px 2px rgba(${hexToRgb(
    palette.blackColor,
  )}, 0.12), 0 5px 5px -3px rgba(${hexToRgb(palette.blackColor)}, 0.2)`,
  maxWidth: 200,
  textAlign: "center",
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: 12,
  fontWeight: 400,
  textShadow: "none",
  textTransform: "none",
  letterSpacing: "normal",
  wordBreak: "normal",
  wordSpacing: "normal",
  wordWrap: "normal",
  whiteSpace: "normal",
  lineBreak: "auto",
};
const card = {
  actions: {
    margin: "0 20px 10px",
    paddingTop: 10,
    borderTop: `1px solid ${palette.gray[8]}`,
    height: "auto",
    ...font.default,
  },
  header: {
    margin: "-20px 15px 0",
    borderRadius: 3,
    padding: 15,
  },
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: `0 1px 4px 0 rgba(${hexToRgb(palette.blackColor)}, 0.14)`,
    borderRadius: 6,
    color: `rgba(${hexToRgb(palette.blackColor)}, 0.87)`,
    background: palette.whiteColor,
  },
  title: {
    ...styles.title,
    marginTop: 0,
    marginBottom: 3,
    minHeight: "auto",
    "& a": {
      ...styles.title,
      marginTop: "0.625rem",
      marginBottom: "0.75rem",
      minHeight: "auto",
    },
  },
  subTitle: {
    marginTop: "-.375rem",
  },
  link: {
    "& + $cardLink": {
      marginLeft: "1.25rem",
    },
  },
};

const dashboard = {
  palette,
  font,
  drawerWidth,
  transition,
  container,
  boxShadow,
  cardHeader,
  card,
  styles,
  tooltip,
  hexToRgb,
};

const theme = { dashboard };

export default theme;
