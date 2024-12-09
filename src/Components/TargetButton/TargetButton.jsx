import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TargetButton = ({ title, to, setWidth }) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{ width: setWidth ? "max-content" : "100%" }}
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
};

export default TargetButton;
