function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  };
}

export default Button;
