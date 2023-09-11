import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.ts';
import { FindDrawer, FindHeader, Seperate } from './Find.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { FindFields } from '../../common/constants/formFields.ts';

interface IFindProps {

}

interface IFindState {

}

export type FindProps = IFindStateToProps & IFindDispatchToProps & IFindProps;

/**
 * Find class Component
 * @class Find @extends React.Component<FindProps>
 */
class Find extends React.Component<FindProps> {
    state: IFindState = {
        direction: 'left'
    }

    users = [{
        pic: 'https://i.pinimg.com/736x/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg',
        userName: 'chillBro',
        fullName: 'mace greplul',
    }]

    render(): JSX.Element {
        return (

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="start"
                justifyContent="start"
            >
                <FindDrawer
                    id='find-drawer'
                    height='100vh'
                    width={this.props.isFindOpen ? 360 : 10}
                    elevation={1}
                    variant='persistent'
                    anchor={this.state.direction}
                    open={this.props.isFindOpen}
                    onClose={!this.props.isFindOpen}
                >
                    <FindHeader>
                        <Grid sx={{ marginBottom: '25px', }} container direction='column' alignItems='start'>
                            <Typography sx={{ marginRight: 32, color: '#3C414270', fontWeight: 'bold' }} variant='h4'>Find </Typography >
                            {/* TODO: update form with start/end adornments use enter as submit*/}
                            <Form buttonLabel="Find" fields={FindFields} submit={() => this.props.getUsers()} initialValues={{}} />
                        </Grid>
                        <Seperate />
                    </FindHeader>
                    <Grid sx={{ marginTop: '25px', marginRight: 32 }} container direction='column' alignItems='start'>
                        {/* TODO: wrap in link to user profile using user id*/}
                        <Typography sx={{ marginRight: 32, color: '#3C414270' }} variant='button'> Recent </Typography >
                        {this.users.map((user) => (
                            <CardHeader
                                avatar={<Avatar alt="Apple" src={user.pic} />}
                                title={user.userName}
                                subheader={user.fullName}
                            />
                        ))}
                    </Grid>
                </FindDrawer>
            </Grid >
        );
    }
}

export default Find;