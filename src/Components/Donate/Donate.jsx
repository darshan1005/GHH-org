import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  Slide,
  IconButton,
  Stack,
} from "@mui/material";
import TargetButton from "../TargetButton/TargetButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Donate = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState({});

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = (id, value) => {
    navigator.clipboard.writeText(value);
    setCopied((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const upiDetails = [
    { id: 1, name: "UPI", value: "7382745053@ybl" },
    { id: 2, name: "Phone", value: "7382745053" },
  ];

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
            Donate to below QR or UPI
          </Typography>

          <Box textAlign="center">
            <Typography
              variant="bodyM"
              sx={{ fontWeight: "bold", fontSize: "large" }}
            >
              Payment Details
            </Typography>
            {upiDetails.map((detail) => (
              <Stack
                key={detail.id}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="bodyL" sx={{ width: "max-content" }}>
                  {detail.name} : <strong>{detail.value}</strong>
                </Typography>
                <IconButton
                  onClick={() => handleCopy(detail.id, detail.value)}
                  sx={{
                    width: "max-content",
                  }}
                  title="copy"
                >
                  {copied[detail.id] ? (
                    <CheckCircleOutlineIcon color="success" />
                  ) : (
                    <ContentCopyIcon />
                  )}
                </IconButton>
              </Stack>
            ))}
            <Typography variant="bodyS" sx={{ width: "max-content" }}>
              <b>Banking name</b> : <strong>DASETTI HEMALATHA</strong>
            </Typography>
          </Box>

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
