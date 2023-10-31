import { Popover } from "@mui/material";
import { styled } from "@mui/system";

export const PopListWrapper = styled('div')(() => ({
    '&&': {
        width: 100,
        height: 'auto',
        padding: 2,
    }
}));

export const PopDivide: any = styled('div')((props) => ({
    borderBottom: '1px solid #228B22',
    width: 110,
    opacity: '0.2',
    margin: 0,
}));