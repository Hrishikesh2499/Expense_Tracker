import { createTheme } from "@mui/material";

const PRIMARY_DEFAULT = "#2A3B60";
const PRIMARY_DARK = "#222F4D";
const PRIMARY_MEDIUM = "#405380";
const PRIMARY_LIGHT = "#768FCB";
const TEXT_ERROR = "#A81C00";
const OBJECT_ERROR = "#D35A5A";
const ERROR_BORDER = "#EB9191";
const INPUT_FIELD_OUTLINE_BORDER = "#ECEDF8";
const INPUT_FIELD_DISABLED = "#BABDD5";
const INPUT_FIELD_ACTIVE_BORDER = "#AEC0FF";
const INPUT_FIELD_NLP_ACTIVE = "#66C6AF";
const INPUT_FIELD_NLP_INACTIVE = "#A4DED2";
const BACKGROUND_ALL = "#FBFBFD";
const BACKGROUND_DISABLED = "#F6F6FC";
const BACKGROUND_STRUCTURED_DATA = "#FCFCFD";
const BACKGROUND_INACTIVE = "#FAFBFD";
const BACKGROUND_INTERACTIVE_LIGHT = "#F0F4FE";
const MANUAL_EVIDENCE_BOX = "#6E92F1";
const NLP_EVIDENCE_BOX = "66C6B3";
const NLP_OBJECT = "#3AAA8F";
const NLP_HOVER = "#F6FFFD";
const LAYOUT_OUTLINES = "#E0E3F3";
const LAYOUT_BAR = "#F3F5FA";
const TIMELINE_INACTIVE = "#F9FAFD";
const TIMELINE_HOVERED = "#F4F7FE";
const TIMELINE_ACTIVE = "#F0F3FE";
const TIMELINE_ACTIVE_DARK = "#D1DCFB";
const TIMELINE_MEDICATION_HIGHLIGHT = "#FADDA5";
const TIMELINE_NLP_DEFAULT = "#F6FFFD";
const TIMELINE_NLP_HOVER = "#F4FAF9";
const TIMELINE_NLP_ACTIVE = "E1F6EC";
const STATES_ICON_HOVER = "#ECEDF8";
const STATES_ACTIVE = "#F4F6FF";
const STATES_MENU_HOVER = "#F4F6FB";
const STATES_NOT_ACTIVE = "#9AA5CB";
const STATES_INTERACTIVE = "#6E83F1";
const STATES_NOT_ACTIVE_TEXT = "#193167";
const STATES_INTERACTIVE_TEXT = "#214FC5";
const EVENT_ICON_THERAPY = "#7EAFF8";
const EVENT_ICON_OUTCOME = "#99A0C8";
const EVENT_ICON_PROCEDURE = "#B688EF";
const STATUS_SUCCESS = "#11826B";
const STATUS_SUCCESS_BG = "#DFF6ED";
const LIGHT_BLUE="#CCDDF8";
const DARK_BLUE = '#2c3372';
const NON_ACTIVE = '#9aa5cb';
const FONT_SIZE_14 = '14px';
const SEMI_BOLD_FONT_WEIGHT = 600;
const REGULAR_FONT_WEIGHT = 400;
const PRIMARY_MAIN = '#434e87';
const SECONDARY_MAIN = '#674ff8';
const CONTRAST_COLOR = '#fff';
const COLOR_RED = 'red';
const COLOR_WHITE = 'white';
const NLP_HIGHLIGHTED = '#f1fbf9';
const MESSAGE_TIME = '#93ACE7';
const FONT_LIST = [
  'Open Sans', 
  'sans-serif'
]

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN,
      light: "#5669a6",
      dark: "#2c3372",
      contrastText: CONTRAST_COLOR,
    },
    secondary: {
      main: SECONDARY_MAIN,
      light: "#adb4f0",
      dark: SECONDARY_MAIN,
      contrastText: CONTRAST_COLOR,
    },
  },
  typography: {
    fontFamily: FONT_LIST.join(','),
    fontSize: 14,
    h1: {
      fontSize: "16px",
      color: PRIMARY_MAIN,
      fontWeight: SEMI_BOLD_FONT_WEIGHT
    },
    h2: {
      fontSize: FONT_SIZE_14,
      color: PRIMARY_MAIN,
      fontWeight: SEMI_BOLD_FONT_WEIGHT
    },
    h3: {
      color: PRIMARY_MAIN,
      fontWeight: SEMI_BOLD_FONT_WEIGHT
    },
    h4: {
      color: PRIMARY_MAIN,
      fontWeight: SEMI_BOLD_FONT_WEIGHT
    },
    h5: {
      color: PRIMARY_MAIN,
      fontWeight: SEMI_BOLD_FONT_WEIGHT
    },
    h6: {
      color: PRIMARY_MAIN,
      fontSize: FONT_SIZE_14,
      fontWeight: REGULAR_FONT_WEIGHT
    },
    body1: {
      fontSize: FONT_SIZE_14,
      color: PRIMARY_MAIN
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({theme}) => ({
          color: theme.palette.primary.main,
          fontSize: FONT_SIZE_14
        })
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: FONT_SIZE_14,
          color: theme.palette.primary.light
        }),
        asterisk: { 
          color: COLOR_RED,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: FONT_SIZE_14,
          fontWeight: SEMI_BOLD_FONT_WEIGHT,
          color: theme.palette.primary.main
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: FONT_SIZE_14,
          fontWeight: SEMI_BOLD_FONT_WEIGHT,
          textTransform: 'none'
        },
        containedPrimary: ({ theme }) => ({
          backgroundColor: DARK_BLUE,
          color: theme.palette.primary.contrastText,
          
        }),
        outlinedPrimary: {
          color: DARK_BLUE,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({theme}) => ({
          color: NON_ACTIVE,
          fontWeight: SEMI_BOLD_FONT_WEIGHT,
          "&.Mui-selected": {
            color: theme.palette.secondary.main
          }
        }),
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: ({theme}) => ({
          color: NON_ACTIVE,
          fontWeight: SEMI_BOLD_FONT_WEIGHT,
          "&.Mui-selected": {
            color: theme.palette.secondary.main
          }
        }),
        indicator: {
          backgroundColor: SECONDARY_MAIN
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-root": {
          fontSize: FONT_SIZE_14,
          fontWeight: REGULAR_FONT_WEIGHT
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
          backgroundColor: COLOR_WHITE,
          border: `1px solid ${INPUT_FIELD_ACTIVE_BORDER}`,
          '& .MuiChip-label': {
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '18px',
            color: PRIMARY_DEFAULT
          },
          '& .MuiSvgIcon-root': {
            height: '16px',
            width: '16px',
            fill: INPUT_FIELD_ACTIVE_BORDER
          }
        }
      }
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          flexDirection: 'row'
        }
      }
    }
  },
});

export const colors = {
  PRIMARY_DEFAULT: PRIMARY_DEFAULT,
  PRIMARY_DARK: PRIMARY_DARK,
  PRIMARY_MEDIUM: PRIMARY_MEDIUM,
  PRIMARY_LIGHT: PRIMARY_LIGHT,
  TEXT_ERROR: TEXT_ERROR,
  OBJECT_ERROR: OBJECT_ERROR,
  ERROR_BORDER: ERROR_BORDER,
  INPUT_FIELD_OUTLINE_BORDER: INPUT_FIELD_OUTLINE_BORDER,
  INPUT_FIELD_DISABLED: INPUT_FIELD_DISABLED,
  INPUT_FIELD_ACTIVE_BORDER: INPUT_FIELD_ACTIVE_BORDER,
  INPUT_FIELD_NLP_ACTIVE: INPUT_FIELD_NLP_ACTIVE,
  INPUT_FIELD_NLP_INACTIVE: INPUT_FIELD_NLP_INACTIVE,
  BACKGROUND_ALL: BACKGROUND_ALL,
  BACKGROUND_DISABLED: BACKGROUND_DISABLED,
  BACKGROUND_STRUCTURED_DATA: BACKGROUND_STRUCTURED_DATA,
  BACKGROUND_INACTIVE: BACKGROUND_INACTIVE,
  BACKGROUND_INTERACTIVE_LIGHT: BACKGROUND_INTERACTIVE_LIGHT,
  MANUAL_EVIDENCE_BOX: MANUAL_EVIDENCE_BOX,
  NLP_EVIDENCE_BOX: NLP_EVIDENCE_BOX,
  NLP_OBJECT: NLP_OBJECT,
  NLP_HOVER: NLP_HOVER,
  LAYOUT_OUTLINES: LAYOUT_OUTLINES,
  LAYOUT_BAR: LAYOUT_BAR,
  TIMELINE_INACTIVE: TIMELINE_INACTIVE,
  TIMELINE_HOVERED: TIMELINE_HOVERED,
  TIMELINE_ACTIVE: TIMELINE_ACTIVE,
  TIMELINE_ACTIVE_DARK: TIMELINE_ACTIVE_DARK,
  TIMELINE_MEDICATION_HIGHLIGHT: TIMELINE_MEDICATION_HIGHLIGHT,
  TIMELINE_NLP_DEFAULT: TIMELINE_NLP_DEFAULT,
  TIMELINE_NLP_HOVER: TIMELINE_NLP_HOVER,
  TIMELINE_NLP_ACTIVE: TIMELINE_NLP_ACTIVE,
  STATES_ICON_HOVER: STATES_ICON_HOVER,
  STATES_ACTIVE: STATES_ACTIVE,
  STATES_MENU_HOVER: STATES_MENU_HOVER,
  STATES_NOT_ACTIVE: STATES_NOT_ACTIVE,
  STATES_INTERACTIVE: STATES_INTERACTIVE,
  STATES_NOT_ACTIVE_TEXT: STATES_NOT_ACTIVE_TEXT,
  STATES_INTERACTIVE_TEXT: STATES_INTERACTIVE_TEXT,
  EVENT_ICON_THERAPY: EVENT_ICON_THERAPY,
  EVENT_ICON_OUTCOME: EVENT_ICON_OUTCOME,
  EVENT_ICON_PROCEDURE: EVENT_ICON_PROCEDURE,
  STATUS_SUCCESS: STATUS_SUCCESS,
  STATUS_SUCCESS_BG: STATUS_SUCCESS_BG,
  NLP_HIGHLIGHTED: NLP_HIGHLIGHTED,
  MESSAGE_TIME: MESSAGE_TIME,
  COLOR_WHITE: COLOR_WHITE,
  LIGHT_BLUE
};
