import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DentistCard = ({ elemento }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 345, height: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQvKUToj7R0VkMVym1LkJerzY3goYjM1rHQ&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {elemento.username}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DentistCard;
