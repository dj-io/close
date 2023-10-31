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
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
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
import { CardWrapper, Content, ExpandMore, PostLink } from './PostCard.Styles.ts';
import MultiField from '../fields/MultiField.tsx';
import { commentFields } from '../../constants/formFields.ts';
import { Pop } from '../popover/Pop.tsx';
import { excerpt } from '../../utils/global.ts';
import { UserActionTypes } from '../../enums/UserActionType.ts';
import { profilePicUrl } from '../../api/user/Users.Api.ts';
import { deletePost, postImageUrl } from '../../api/user/Post.Api.ts';
import { Confirm } from '../buttons/Confirm.tsx';
import { PopList } from '../popover/PopList.tsx';
import { FriendCard } from './FriendCard.tsx';


/**
 * interface for PostCard
 * @interface IPostCardProps
 * @prop {any} initialValues - sets form initial values
 */
interface IPostCardProps {
    page: string;
    func: Function;
    like: Function;
    follow: Function;
    popItems: any; // TODO: make IPopListItems
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
    currentUser,
    value,
    page,
    func,
    like,
    follow,
    popItems,
    change,
    expand,
}) => {

    const [expanded, setExpanded] = React.useState(expand);
    const [more, setMore] = React.useState(false);

    let numOfComments = 0;
    let numOfLikes = 0;

    const comments = post?.comment?.forEach(comment => numOfComments += 1);
    const likes = post?.like?.forEach(like => numOfLikes += 1);

    const postCreated = new Date(post?.created).toDateString();
    const postLiked = post?.like?.map((like) => like).find(id => id?.user_id === currentUser?.id)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSeeMore = () => {
        setMore(!more)
    };

    return (
        <CardWrapper expanded={expanded} >
            <CardHeader
                avatar={
                    <Link to={`/${user?.username}`}>
                        <Avatar
                            alt="Apple"
                            src={profilePicUrl(user?.id)}
                        />
                    </Link>
                }
                action={
                    <Pop
                        tip="More"
                        label={<MoreVertIcon />}
                        children={<PopList items={popItems} />}
                    />
                }
                title={
                    <PostLink to={`/${user?.username}`}>
                        {user?.username} ∙ {`${postCreated}`}
                    </PostLink>
                }
                subheader={excerpt(user?.biography, UserActionTypes.CHAR_MAX)}
            />
            <CardMedia
                component={post?.mediaType || "img"}
                autoPlay={expanded}
                loop
                controls
                height="auto"
                image={postImageUrl(post?.id)}
                sx={{ border: '1px solid #3C414260', borderRadius: 1 }}
                alt={post?.caption}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <PostLink to={`/${user?.username}`}>
                        <span style={{ fontWeight: 'bold', color: '#238636' }}>{user?.username}</span>
                    </PostLink> {excerpt(post?.caption, UserActionTypes.CHAR_MAX)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip
                    TransitionComponent={Fade}
                    title='like'
                    TransitionProps={{ timeout: 600 }}
                    enterDelay={1500}
                    placement='bottom'
                >
                    <IconButton onClick={like} aria-label="like post">
                        <FavoriteIcon color={postLiked && 'error'} />
                    </IconButton>
                </Tooltip>
                <Typography
                    sx={{
                        marginTop: '5px',
                        marginRight: '5px',
                        color: '#238636'
                    }}
                    variant="subtitle1"
                    color="text.secondary"
                >
                    <Tooltip
                        TransitionComponent={Fade}
                        title={`${expanded ? 'viewing' : 'view'} all ${numOfComments} comments`}
                        TransitionProps={{ timeout: 600 }}
                        enterDelay={1500}
                        placement="bottom"
                    >
                        <PostLink id='post-link' to={!expanded && `/${page}/${post?.id}`}>
                            <ShortTextIcon />
                        </PostLink>
                    </Tooltip>
                </Typography>
                <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    enterDelay={1500}
                    title={`Save Posts Coming Soon`}
                    placement="bottom"
                >

                    <BookmarkTwoToneIcon disabled />
                </Tooltip>
                <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    enterDelay={1500}
                    title={`Share Posts Coming Soon`}
                    placement="bottom"
                    sx={{ marginLeft: 'auto' }}
                >
                    <SendTwoToneIcon disabled />
                </Tooltip>
            </CardActions>
            <CardContent sx={{ marginLeft: 2, marginTop: -2, p: 0 }}>
                <Pop
                    tip="View Likes"
                    label={
                        <Typography variant="body2" color="text.secondary">
                            <span style={{ fontWeight: 'bold', color: '#238636' }}>
                                {numOfLikes > 0 && `${numOfLikes}`} {numOfLikes > 0 && (numOfLikes > 1 ? 'likes' : 'like')}
                            </span>
                        </Typography>
                    }
                    children={
                        post?.like &&
                        post?.like?.map((user) => (
                            <FriendCard
                                user={user}
                                currentUser={currentUser}
                                follow={follow}
                                width={270}
                            />
                        ))
                    }
                />
            </CardContent>
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
                    {post?.comment?.map(comment => (
                        <CardHeader
                            avatar={
                                <Link to={`/${comment?.username}`}>
                                    <Avatar alt="Apple" src={profilePicUrl(comment?.user_id)} />
                                </Link>
                            }
                            action={
                                <Tooltip
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                    enterDelay={1500}
                                    title={`Comment Likes Coming Soon`}
                                    placement="bottom"
                                    sx={{ marginLeft: 'auto' }}
                                >
                                    <IconButton sx={{ cursor: 'default' }} disableRipple aria-label="settings">
                                        <FavoriteTwoToneIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                            title={
                                <Typography variant="body1" color="text.primary">
                                    <span style={{ fontWeight: 'bold', color: '#238636' }}>
                                        <PostLink to={`/${comment?.username}`}> {comment?.username} </PostLink>
                                    </span>
                                    <span> {comment?.comment} </span>
                                </Typography>
                            }
                            subheader={
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    {`${comment?.likes} likes`}
                                </Typography>
                            }
                        />
                    ))}

                </Content>
            </Collapse>
        </CardWrapper >
    );
}