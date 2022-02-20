import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import moment from "moment";
import { Color } from '../../utils/Color';

const ExhibitionCard = ({data}: any) => {
  console.log("data",data);
  
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            data.image_url ??
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: Color.black }}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {moment(data.aic_start_at).format("DD.MM.YYYY") +
              " - " +
              moment(data.aic_end_at).format("DD.MM.YYYY")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ExhibitionCard;
