import { Alert } from "@mui/material";

function AlertMsg({ text }) {
  return (
    <Alert
      severity="info"
      sx={{
        width: "100%",
        textAlign: "center",
        m: 4,
        mt: 6,
        backgroundColor: "white",
      }}
    >
      {!text && `No results found`}
    </Alert>
  );
}

export default AlertMsg;
