// theme.js
export const Colors = {
  light: {
    primary: '#2ECC71',
    secondary: '#F39C12',
    background: '#FFFFFF',
    surface: '#F6F8FA',
    textPrimary: '#1E1E1E',
    textSecondary: '#6B6B6B',
    border: '#E0E0E0',
    error: '#E74C3C',
    success: '#27AE60',
    borderColor: '#f8f8f8'
  },
  dark: {
    primary: '#27AE60',
    secondary: '#F5B041',
    background: '#222222',
    surface: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#2C2C2C',
    error: '#E74C3C',
    success: '#2ECC71',
    borderColor: '#f8f8f8'
  },
};

// Define full theme objects (add mode property)
export const lightTheme = {
  mode: 'light',
  colors: Colors.light,
};

export const darkTheme = {
  mode: 'dark',
  colors: Colors.dark,
};

export const colors = {
  backdrop: "rgba(105,157,126, 0.5)",
  buttonColor: "rgb(125,187,146)",
  textColor: "rgb(105,157,126)",
  titleColor: "#1A1A1A",
  headingColor: "#0D0D0D",
  subtitleColor: "",
  white: "#fff",
  timeColor: "#7f8c8d"
};
