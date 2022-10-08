import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {md: '320px', sx: '100%'}, boxShadow: 'none', borderRadius: '0',}} >
      <Link to={`/video/${videoId}`}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: {md: '320px', sm:'100%'}, height: '180px'}}
        />
        <CardContent sx={{backgroundColor: '#360b5e', height:'105px'}} >
          <Link to={`/video/${videoId}`}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>{snippet?.title.slice(0,60)}</Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard