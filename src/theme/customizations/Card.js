export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          "&:hover": {
            boxShadow: theme.shadows[4],
          },
          border: `1px solid ${theme.palette.grey[300]}`,
          boxShadow: "none",
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
          fontFamily: "Poppins",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          backgroundPosition: "center center",
          transform: "scale(102%)",
        },
      },
    },
  };
}
