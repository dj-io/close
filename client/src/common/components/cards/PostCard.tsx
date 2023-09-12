import * as React from 'react';
import { Link } from 'react-router-dom';
import ShortTextIcon from '@mui/icons-material/ShortText';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ExpandMore } from './PostCard.Styles.js';
import MultiField from '../fields/MultiField.tsx';
import { commentFields } from '../../constants/formFields.ts';
import { InputLabel } from '@mui/material';


/**
 * interface for PostCard
 * @interface IPostCardProps
 * @prop {any} initialValues - sets form initial values
 */
interface IPostCardProps {
    postId: any;
    avatar: string;
    userName: string;
    media: string;
    likes: number;
    caption: string;
    commentTime: Date;
    comments: Object // make IComment interface
    expand?: boolean;
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
    commentTime,
    postId,
    expand,
}) => {

    const [expanded, setExpanded] = React.useState(expand);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{
            maxWidth: 500,
            width: '400px',
            marginTop: '32px',
            boxShadow: 'none'
        }}
        >
            <CardHeader
                avatar={<Avatar alt="Apple" src={avatar} />}
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
                height="auto"
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
                    <Link id='post-link' to={`/home/${postId}`}>
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
                <IconButton aria-label="share">{likes} likes </IconButton>
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
                    {comments?.map(comment => (
                        <CardHeader
                            avatar={<Avatar alt="Apple" src={comment.picture} />}
                            action={
                                <IconButton aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                            }
                            title={comment.userName}
                            subheader={comment.comment}
                        />
                    ))}
                    {
                        commentFields.map((field) => (
                            <MultiField
                                row={field}
                                maxRows={4}
                                isSubmitting={false}
                            />
                        ))
                    }

                </CardContent>
            </Collapse>
        </Card >
    );
}