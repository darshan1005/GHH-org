import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TargetButton = ({ title, to, setWidth, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: setWidth ? "max-content" : "100%",
        padding: {
          xs: "4px 8px",
          sm: "6px 12px",
          md: "8px 16px",
        },
        fontSize: {
          xs: "0.8rem",
          sm: "0.9rem",
          md: "1rem",
        },
        "&:hover": {
          color: "white",
          boxShadow: "none",
        },
      }}
      onClick={onClick}
    >
      <Link to={to} style={{ color: "inherit", textDecoration: "none" }}>
        {title}
      </Link>
    </Button>
  );
};

TargetButton.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  setWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TargetButton;
