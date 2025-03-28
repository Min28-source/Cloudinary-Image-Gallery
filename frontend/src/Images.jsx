import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import "./images.css";

export default function Images() {
  const [images, setImages] = useState([]);
  async function getImages() {
    try {
      const response = await axios.get("http://localhost:8080/");
      setImages(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="container">
        {images.map((image) => (
          <Card key={image._id} sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={image.url} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {image.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
