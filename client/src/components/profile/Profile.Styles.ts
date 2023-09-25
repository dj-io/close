import { styled } from "@mui/system";
import EasyEdit from 'react-easy-edit';

export const HeaderEditor = styled('div')((props: any) => ({
    '.easy-edit-inline-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px'
    },

    '.easy-edit-component-wrapper > img': {
        cursor: 'pointer'
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


