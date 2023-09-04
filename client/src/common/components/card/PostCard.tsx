import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShortTextIcon from '@mui/icons-material/ShortText';
import { ExpandMore } from './PostCard.Styles.ts';


/**
 * interface for PostCard
 * @interface IPostCardProps
 * @prop {any} initialValues - sets form initial values
 */
interface IPostCardProps {
    avatar: string;
    userName: string;
    media: string;
    likes: number;
    caption: string;
    commentTime: Date;
    comments: Object // make IComment interface
}

/**
 * Common Card Functional component
 * Reusable Card component 
 * @param props @interface IPostCardProps 
 * @returns 
 */
export const PostCard: React.FC<IPostcardProps> = ({
    avatar,
    userName,
    media,
    likes,
    caption,
    comments,
    commentTime
}) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={userName}
                subheader=""
            />
            <CardMedia
                component="img"
                height="194"
                image={media}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <Link id='post-link' to={`/posts/${comment}`}>
                        {/* <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    > */}
                        <ShortTextIcon />
                        {/* </ExpandMore> */}
                    </Link>
                </IconButton>
                {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore> */}
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {Object.values(comments).map(comment) => (
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="profile-pic">
                                {avatar}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <FavoriteIcon />
                            </IconButton>
                        }
                        title={userName}
                        title={comment}
                        subheader={commentTime}
                    />
                    )}
                </CardContent>
            </Collapse>
        </Card >
    );
}