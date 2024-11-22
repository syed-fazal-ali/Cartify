import React, { useContext } from "react";
import './items.css';
import { contextprovider } from "../Context/context";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Items = (props) =>{

  const {Addtocart} = useContext(contextprovider);
 
    return(
        <>
       <Card sx={{ maxWidth: 200 }} style={{width: '60vw', height: '50vh'}} className="shadow">
      <CardMedia
        
        sx={{ height: 140 }}
        image={props.pimage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.pname}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.pdesc}
        </Typography>
        <h5>Price: {props.pprice}/=</h5>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => Addtocart(props)}>Add to Cart</Button>
      
       </CardActions>
    </Card>
      
        
       
    </>
    )
   
}
export default Items;