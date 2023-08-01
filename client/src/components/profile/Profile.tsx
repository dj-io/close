import * as React from 'react';
import { IProfileDispatchToProps, IProfileStateToProps } from '../../types/user.ts';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface IProfileProps {

}

interface IProfileState {

}

export type ProfileProps = IProfileStateToProps & IProfileDispatchToProps & IProfileProps;

class Profile extends React.Component<ProfileProps> {
    state: IProfileState = {

    }

    render(): JSX.Element {
        return (
            <Grid container spacing={2}>
                {/* {data.map((item) => ( */}
                <Grid item xs={8}>
                    {/* <img src={item.picture} /> */}
                </Grid>

                <Grid item xs={8}>
                    profile name
                </Grid>
                <Grid item xs={8}>
                    posts, likes
                </Grid>
                <Grid item xs={8}>
                    Bio
                </Grid>
                {/* ))} */}
                <Grid item xs={8}>
                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {/* {itemData.map((item) => ( */}
                        {/* <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem> */}
                        {/* ))} */}
                    </ImageList>
                </Grid>
            </Grid>
        )
    }
}

export default Profile;