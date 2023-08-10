import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import './sub.css';


export default function MultiActionAreaCard(props) {


  return (
    <Card sx={{ width: 200  }} style={{height:400}}>
      <CardActionArea color={props.color}>
        {props.price}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={props.color}>
            {props.title}
          </Typography>
          <Typography variant="body2" color={props.color}>
            {props.des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button type="button" className="btn btn-success" style={{ width: '100%' }}>
          Buy
        </button>
      </CardActions>

      <CardActions>
      <ul>
          {props.listItems && props.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardActions>
    </Card>
  );
}
