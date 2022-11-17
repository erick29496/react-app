import './card.styles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FilmCard = ({ film }) => {
  const title = film.Title;
  const year = film.Year;
  const img = film.Poster;

  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardMedia
        component="img"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
