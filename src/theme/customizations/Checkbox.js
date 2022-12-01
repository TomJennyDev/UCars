function Checkbox(theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22px",
          color: theme.palette.grey[600],
          pr: 1,
        },
      },
    },
  };
}

export default Checkbox;
