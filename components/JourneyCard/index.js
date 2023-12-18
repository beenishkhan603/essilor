import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
export default function JourneyCard(props) {
  const { topHeading, mainHeading, imgUrl, buttonText } = props;
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#eff0f1" }}>
      <CardContent>
        <Typography className="top-small-heading">{topHeading}</Typography>
        <Typography className="main-heading">{mainHeading}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          className="start-button"
          sx={{
            "&:hover": {
              backgroundColor: "#18b1ae",
            },
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
      <div style={{display:"flex", justifyContent: "center"}}>
      <CardMedia
        style={{ height: 300, width: 350 }}
        // "/img/lens.avif"
        image={imgUrl}
        title="green iguana"
      />
      </div>
    </Card>
  );
}