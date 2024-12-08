import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Dialog,
  Slide,
  CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormInput = ({
  label,
  value,
  onChange,
  type = "text",
  multiline = false,
  rows,
}) => (
  <TextField
    label={label}
    variant="outlined"
    fullWidth
    value={value}
    onChange={onChange}
    type={type}
    multiline={multiline}
    rows={rows}
    required
  />
);

export const TalkWithUs = () => {
  const [open, setOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Feedback state
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Open/close dialog
  const handleClickOpen = () => {
    setSuccess(false);
    setError("");
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const serviceID = "service_la0ueib";
    const templateID = "template_bled62i";
    const publicKey = "e8_krUrIuF3wLcOUt";

    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      to_name: "Grace Helping Hands",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setLoading(false);
        setError("There was an error sending the email. Please try again.");
      });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ width: "max-content" }}
      >
        Talk With Us
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
          onSubmit={handleSubmit}
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
            Talk with Us
          </Typography>

          {success && (
            <Alert severity="success">Email sent successfully!</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}

          <FormInput
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            label="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <FormInput
            label="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={4}
          />

          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              sx={{ width: "150px" }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send Email"
              )}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
