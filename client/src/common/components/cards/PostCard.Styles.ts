import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    // return <IconButton { ...other } />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const PostLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: 'inherit',
    }
}))

export const Content = styled(CardContent)(() => ({
    '&&': {
        borderTop: '1px solid #3C414270',
        maxHeight: 300,
        overflowY: 'auto',
        overflowX: 'hidden',
        msOverflowStyle: 'none',  /* IE and Edge */
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
            display: 'none',
        },


    }
}));

export const CardWrapper = styled(Card)((props: any) => ({
    '&&': {
        maxWidth: 500,
        width: !props.expanded ? 375 : 500,
        marginTop: '32px',
        boxShadow: 'none',

        '@media (max-width: 790px)': {
            width: !props.expanded ? 335 : 'auto',
            marginTop: '0'
        }
    }
}))