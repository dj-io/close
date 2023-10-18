import { Drawer } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const FindDrawer = styled(Drawer)((props: any) => ({
    '&&': {
        height: props.height,
        width: props.width,
        position: 'fixed',
        left: '150px !important',
        transition: 'all 0.099s ease-in-out',
        zIndex: 100,
        overflow: 'hidden',
        borderRight: '1px solid #3C414240',
        borderRadius: '5px',
        boxShadow: '3px 0 4px rgba(0, 0, 0,.15)',

        ' & .MuiDrawer-paper': {
            position: 'absolute',
            height: props.height,
            width: '100%',
            top: 'initial',
            overflow: 'hidden',
            overflowY: 'auto',
            bottom: 0,
            boxShadow: '4px 0 24px rgba(0, 0, 0,.15)',
        }
    }
}));

export const Divide = styled('div')(() => ({
    borderRight: '1px solid #228B22',
    width: '100px',
    opacity: '0.2',
    margin: 0,
}))

export const Seperate: any = styled('div')((props) => ({
    borderBottom: '1px solid #228B22',
    width: 'calc(100% - 3px)',
    opacity: '0.2',
    margin: 0,
}));

export const FindHeader = styled('div')((props: any) => ({
    '&&': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '14px',
    }
}))

export const FindLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: 'inherit',

        '&:hover': {
            background: '#3C414240'
        }
    }
}))

export const SuggestedLink = styled(Link)(() => ({
    '&&': {
        textDecoration: 'none',
        color: 'inherit',

        '&:hover': {
            background: 'none'
        }
    }
}))