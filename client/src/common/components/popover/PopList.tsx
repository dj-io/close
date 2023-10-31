import * as React from 'react';
import { useState, useEffect } from 'react';
import { PopDivide, PopListWrapper } from './Popover.Styles.ts';
import { Confirm } from '../buttons/Confirm.tsx';
import { Grid } from '@mui/material';

interface IPopOverList {
    label: string;
    action: Function;
    items: string[];
}


export const PopList: React.FC<IPopOverList> = ({ items }) => {

    return (
        <PopListWrapper>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                {items &&
                    items.map((item) => (
                        item.action &&
                        <Grid item >
                            <Confirm
                                label={item?.label}
                                func={item?.action}
                            />
                            <PopDivide />
                        </Grid>
                    ))}
            </Grid>
        </PopListWrapper>
    );
}

