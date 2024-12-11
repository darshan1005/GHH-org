import React, { useState } from "react";
import { Box, Button, Typography, Dialog, Slide } from "@mui/material";
import TargetButton from "../TargetButton/TargetButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Donate = () => {
  const [open, setOpen] = useState(false);

  // Open/close dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <TargetButton
        title={"Donate"}
        onClick={handleClickOpen}
        setWidth={true}
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 4,
            backgroundColor: "background.paper",
          }}
        >
          {/* Title */}
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            Donate to
          </Typography>

          <Typography variant="h6" textAlign="center" color="text.secondary">
            Below QR or UPI
          </Typography>

          <Box textAlign="center">Payment Details</Box>

          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "150px" }}
              onClose={handleClose}
            >
              Thank you!
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
