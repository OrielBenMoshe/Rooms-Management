
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
  ,Divider }     from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import {EditOutlined} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
root: {
margin: theme.spacing(3),
width: '100%',
padding : '6px'
},
media: {
height: 140,
},
title: {
color: theme.palette.primary.main
},
HebrewtextAlgin : {
  textAlign: 'right'
}
}))

const Item = () => {
const classes = useStyles()

return (
<Card className={classes.root}>
 <CardActionArea>

   <CardContent>
     <Typography color="textPrimary" gutterBottom variant="body2" component="p" className={classes.title, classes.HebrewtextAlgin}>
       יום שני , 7 בספטמבר  2020 |  9:00 - 10:00
     </Typography>
    
     <Typography variant="body2"  component="p" className = {classes.HebrewtextAlgin}>
    שופר - חדר עד 6 משתתפים
     </Typography>
     <div style = {{display : 'flex',justifyContent : 'space-between',alignItems : 'center',marginLeft : '3.2rem'}}>
      <Button> <EditOutlined fontSize = 'small' style={{ color: '#00AAAF' }} variant = 'outline'/></Button>
     <Typography variant="body2" color="textSecondary" component="p" className = {classes.HebrewtextAlgin}>
   נוצלו 15 אסימונים
     </Typography>
     

     </div>
     
   </CardContent>
 </CardActionArea>
 <Divider variant="inset" component="li" />

 
</Card>
)
}

export default Item