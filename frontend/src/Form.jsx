import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css";

function Form() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please upload a file!");
      return;
    }

    const formData = new FormData();
    formData.append("title", name);
    formData.append("image", file);

    try {
      axios
        .post("http://localhost:8080/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
       console.log("Form request has been sent to the backend!");
       navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box className="form-container" component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" className="form-title" color="white">
        Upload an image
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input type="file" onChange={handleFileChange} className="file-input" />
      <Button type="submit" variant="contained" className="submit-button">
        Upload
      </Button>
    </Box>
  );
}

export default Form;