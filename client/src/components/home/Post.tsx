import * as React from 'react';
import ShortTextIcon from '@mui/icons-material/ShortText';
import { useState, useEffect } from 'react';
import { Dialog } from '../../common/components/dialog/Dialog.tsx';
import { PostCard } from '../../common/components/card/PostCard.tsx';

interface IPost {

}


export const Post: React.FC<IPost> = ({ match }) => {

    return (
        <Dialog label={<ShortTextIcon />} title="user name" >
            <PostCard

            />
        </Dialog>
    );
}