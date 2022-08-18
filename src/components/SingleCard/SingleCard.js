import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function SingleCard({imageInfo}) {
    const [expanded, setExpanded] = React.useState(false);
    const imageDate= new Date(imageInfo.created_at)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dateFormatter = (num)=>{
        return num < 10 ? '0' + (num + 1) : num
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={imageInfo.user.profile_image.small} >
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={imageInfo.user.username}
                subheader={`${dateFormatter(imageDate.getDay())}.${dateFormatter(imageDate.getMonth())}.${dateFormatter(imageDate.getFullYear())} `}
            />
            <CardMedia
                component="img"
                height="194"
                image={imageInfo.urls.small}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot u
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
