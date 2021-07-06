
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
  , Divider
} from '@material-ui/core'

import { EditOutlined } from '@material-ui/icons'

const Reservation = () => {
  return (
    <Card className="reservation">
      <CardActionArea>
        <CardContent>
          <Typography color="textPrimary" gutterBottom variant="body2" component="p" className="">
            יום שני , 7 בספטמבר  2020 |  9:00 - 10:00
          </Typography>
          <Typography variant="body2" component="p" className="">
            שופר - חדר עד 6 משתתפים
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="">
            נוצלו 15 אסימונים
          </Typography>
          <Button className="edit"><img src="/images/edit_icon.svg" alt="" /></Button>
        </CardContent>
        <Divider />
      </CardActionArea>
    </Card>
  )
}

export default Reservation