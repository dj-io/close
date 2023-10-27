import { Card, CardHeader, ImageList, Typography } from "@mui/material";
import { styled } from "@mui/system";
import EasyEdit from 'react-easy-edit';
import { Link } from "react-router-dom";


export const CustomImageList = styled(ImageList)(() => ({
    '&&': {
        width: 600,
        height: 500,
        marginTop: '32px',
        overflowY: 'inherit',


        '@media (max-width: 790px)': {
            width: 355,
            maxHeight: '100vh',
            height: 582,
            marginTop: '20px',
            overflowY: 'auto',
            overflowX: 'hidden',
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarHeight: 'none',
            '::-webkit-scrollbar': {
                display: 'none',
            },
        }
    }
}))

export const Source = styled('source')(() => ({
    '&&': {
        width: 220,
        height: 395,

        '@media (max-width: 790px)': {
            height: 295,
            width: '100%',
        },
    }
}));

export const Video = styled('video')(() => ({
    '&&': {
        width: 220,
        height: 395,

        '@media (max-width: 790px)': {
            width: 120,
            height: 295,
        },
    }
}));

export const PostLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: 'inherit',
        height: 395,

        '@media (max-width: 790px)': {
            height: 295,
            width: '100%',
        },
    }
}));

export const CustomCardHeader = styled(CardHeader)(() => ({
    '&&': {

        '@media (max-width: 790px)': {
            width: 355,
            overflowX: 'auto',
            overflowY: 'hidden',
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarHeight: 'none',
            '::-webkit-scrollbar': {
                display: 'none',
            },
        }
    }
}));

export const HeaderText = styled(Typography)(() => ({
    '&&': {
        fontWeight: 'bold',
        color: '#3C414270',
        fontFamily: "'Ruda', sans-serif",

        '@media (max-width: 790px)': {
            fontSize: '1.925rem',
        },
    }
}))

// REACT-EASY-EDIT STYLES

export const HeaderEditor = styled('div')((props: any) => ({
    '.easy-edit-inline-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
    },

    '.easy-edit-component-wrapper > img': {
        cursor: 'pointer',
    },

    '.easy-edit-component-wrapper input[type=text]': {
        border: 'none',
        color: '#3C414270',
        margin: 0,
        fontFamily: "'Ruda', sans-serif",
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
        fontWeight: 600,
        width: '210px',
        cursor: 'pointer',

        '::placeholder': {
            color: '#3C414260',
        },

        ':focus-visible': {
            outline: 'none',
        },

        '@media (max-width: 790px)': {
            width: '130px',
            fontSize: '1.825rem',
        },

    },

    '.easy-edit-button-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        margin: 0
    },
    '.easy-edit-button': {
        background: 'none',
        cursor: 'pointer',
    },

    '.easy-edit-hover-on': {
        cursor: 'default',
        fontStyle: 'normal',
        cursor: 'default'
    },

    '.easy-edit-not-allowed': {
        cursor: 'default',

        '& .MuiAvatar-root': {
            width: 204,
            height: 204,

            '@media (max-width: 790px)': {
                width: 140,
                height: 140,
            }
        },
    }
}));


export const BodyEditor = styled('div')(() => ({
    '.easy-edit-inline-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px'
    },

    '.easy-edit-component-wrapper input[type=text]': {
        border: 'none',
        margin: 0,
        fontFamily: "'Ruda', sans-serif",
        fontWeight: 400,
        fontSize: '0.875rem',
        letterSpacing: '0.01071em',
        color: 'rgba(0, 0, 0, 0.6)',
        textTransform: 'uppercase',
        width: '210px',
        cursor: 'pointer',

        ':focus-visible': {
            outline: 'none',
        },

        '@media (max-width: 790px)': {
            width: '130px',
        },
    },

    '.easy-edit-button-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        margin: 0
    },
    '.easy-edit-button': {
        background: 'none',
        cursor: 'pointer',
    },

    '.easy-edit-hover-on': {
        cursor: 'default',
        fontStyle: 'normal',
        cursor: 'default'
    },

    '.easy-edit-not-allowed': {
        cursor: 'default'
    }
}));


