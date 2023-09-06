import { Drawer } from "@mui/material";
import { styled } from "@mui/system";

export const FindDrawer = styled(Drawer)((props: any) => ({
    '&&': {
        height: props.height,
        width: props.width,
        position: 'absolute',
        left: '0px !important',
        transition: 'all 0.3s ease-in-out',
        zIndex: 100,
        overflow: 'hidden',
        display: props.open ? 'block' : 'none',

        ' & .MuiDrawer-paper': {
            position: 'absolute',
            height: props.height,
        }
    }
}));

export const Seperate: any = styled('div')(() => ({
    borderBottom: '1px solid #fff',
    width: 'calc(100% - 3px)',
    opacity: '0.2',
    margin: 0,
}));

export const FindHeader = styled('div')((props: any) => ({
    '&&': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        padding: '14px',
    }
}))