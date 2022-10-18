import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const BlogPost = () => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 362 }}>
      <CardActions style={{ justifyContent: 'space-between' }}>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <PhotoCamera />
        </IconButton>
        <div>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <PhotoCamera />
          </IconButton>
          <IconButton aria-label="upload picture" component="label">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="upload picture" component="label">
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>

      <CardActions style={{ flexWrap: 'wrap' }}>
        <Button size="small">tag1</Button>
        <Button size="small">tag2</Button>
        <Button size="small" color='secondary'>tag3</Button>
        <Button size="small">tag4</Button>
      </CardActions>

      <CardContent>

        <Typography variant="h5" component="div">
          Title of the Blog Post
        </Typography>

        <Typography variant="body2" gutterBottom>
          A short blurb or few initial lines of the post goes...
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          posted day : 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          by name
        </Typography>
      </CardContent>

    </Card>
  );
}

export default BlogPost;