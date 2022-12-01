export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {},
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
