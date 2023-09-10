import * as React from 'react';
import ShortTextIcon from '@mui/icons-material/ShortText';
import { useState, useEffect } from 'react';
import { ConfirmDialog } from '../../common/components/dialog/Dialog.tsx';
import { PostCard } from '../../common/components/card/PostCard.tsx';

interface IPost {

}


export const Post: React.FC<IPost> = ({ match }) => {

    return (
        <ConfirmDialog label={<ShortTextIcon />} title="user name" >
            <PostCard

            />
        </ConfirmDialog>
    );
}