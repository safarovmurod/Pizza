import { Button as MuiButton } from "@mui/material";

export default function Button({ variant = "gradient", sx, children, ...others }) {
  const styles = {
    gradient: {
      background: "linear-gradient(90deg, #FF9500 0%, #FF5C00 100%)",
      color: "#FFFFFF",
    },
    outline: {
      background: "transparent",
      color: "#FF7A00",
    },
  };

  return (
    <MuiButton
      sx={{
        borderRadius: "40px",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "none",
        ...styles[variant],
        ...sx,
      }}
      {...others}
    >
      {children}
    </MuiButton>
  );
}