import React, { useState } from "react";
import { Box, Button, Typography, Dialog, Slide } from "@mui/material";

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
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ width: "max-content" }}
      >
        Donate to
      </Button>

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
            Donate
          </Typography>

          <Typography variant="h5" textAlign="center" color="text.secondary">
            Below QR or UPI
          </Typography>

          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "150px" }}
              onClose={handleClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
