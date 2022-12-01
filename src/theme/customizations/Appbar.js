function Appbar(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[800],
        },
      },
    },
  };
}

export default Appbar;
