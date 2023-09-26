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
import { InputLabel, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Content, ExpandMore, PostLink } from './PostCard.Styles.ts';
import MultiField from '../fields/MultiField.tsx';
import { commentFields } from '../../constants/formFields.ts';
import { Pop } from '../popover/Pop.tsx';
import { excerpt } from '../../utils/global.ts';
import { UserActionTypes } from '../../enums/UserActionType.ts';


/**
 * interface for PostCard
 * @interface IPostCardProps
 * @prop {any} initialValues - sets form initial values
 */
interface IPostCardProps {
    page: string;
    func: Function;
    change: Function;
    value: string;
    expand?: boolean;
}

/**
 * Common Card Functional component
 * Reusable Card component 
 * @param props @interface IPostCardProps 
 * @returns 
 */
export const PostCard: React.FC<IPostcardProps> = ({
    post,
    user,
    value,
    page,
    func,
    change,
    expand,
}) => {

    const [expanded, setExpanded] = React.useState(expand);
    const [more, setMore] = React.useState(false);

    let numOfComments = 0;

    const comments = post?.comment?.forEach(comment => numOfComments += 1);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSeeMore = () => {
        setMore(!more)
    }

    return (
        <Card sx={{
            maxWidth: 500,
            width: !expanded ? 375 : 500,
            marginTop: '32px',
            boxShadow: 'none'
        }}
        >
            <CardHeader
                avatar={<Link to={`/${user?.username}`}> <Avatar alt="Apple" src={user?.picture} /> </Link>}
                action={<Pop tip="More" label={<MoreVertIcon />} children="Follow" />}
                title={<PostLink to={`/${user?.username}`}> {user?.username} </PostLink>}
                subheader={excerpt(user?.biography, UserActionTypes.CHAR_MAX)}
            />
            <CardMedia
                component="img"
                height="auto"
                image={post.picture}
                sx={{ border: '1px solid #3C414260', borderRadius: 1 }}
                alt="Paella dish"
            />
            <CardContent>
                <PostLink to={`/${user?.username}`}>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{ fontWeight: 'bold', color: '#238636' }}>{user?.username}</span> {excerpt(post.caption, UserActionTypes.CHAR_MAX)}
                    </Typography>
                </PostLink>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton disabled={true} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Typography sx={{ marginTop: '5px', marginRight: '5px', color: '#238636' }} variant="subtitle1" color="text.secondary">
                    <PostLink id='post-link' to={!expanded && `/${page}/${post.id}`}>
                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={`view all ${numOfComments} comments`} placement="bottom">
                            <ShortTextIcon />
                        </Tooltip>
                    </PostLink>
                </Typography>
                <Typography
                    sx={{ fontWeight: 'bold' }}
                    variant="subtitle2"
                    color="text.secondary"
                >
                    {post.likes} likes
                </Typography>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {
                        commentFields.map((field) => (
                            <MultiField
                                row={field}
                                maxRows={4}
                                isSubmitting={false}
                                change={change}
                                func={func}
                                value={value}
                            />
                        ))
                    }
                </CardContent>
                <Content>
                    {post.comment?.map(comment => (
                        <CardHeader
                            avatar={<Link to={`/${comment?.username}`}> <Avatar alt="Apple" src={comment.picture} /> </Link>}
                            action={
                                <IconButton disabled={true} aria-label="settings">
                                    <FavoriteIcon />
                                </IconButton>
                            }
                            title={
                                <Typography variant="body1" color="text.primary">
                                    <span style={{ fontWeight: 'bold', color: '#238636' }}>
                                        <PostLink to={`/${comment?.username}`}> {comment.username} </PostLink>
                                    </span>
                                    <span> {comment.comment} </span>
                                </Typography>
                            }
                            subheader={
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    {`${comment.likes} likes`}
                                </Typography>
                            }
                        />
                    ))}

                </Content>
            </Collapse>
        </Card >
    );
}