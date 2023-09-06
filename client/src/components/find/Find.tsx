import * as React from 'react';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.ts';
import { FindDrawer, FindHeader, Seperate } from './Find.Styles.ts';
import { Grid } from '@mui/material';
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

    }

    render(): JSX.Element {
        return (
            <FindDrawer
                id='find-drawer'
                height='calc(100vh - 52px)'
                width={400}
                elevation={1}
                variant='persistent'
                anchor='top'
                open={this.props.isFindOpen}
            >
                <FindHeader>
                    <Grid container direction='row' alignItems='center'>
                        Search
                        // TODO: update form with start/end adornments use enter as submit
                        <Form buttonLabel="Find" fields={FindFields} submit={this.props.getUsers()} initialValues={{}} />
                        <Seperate />
                    </Grid>
                    <Grid container direction='column' alignItems='center'>
                        // TODO: wrap in link to user profile using user id
                        Recent
                        {this.props.users.map((user) => (
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="profile-pic">
                                        {user.pic}
                                    </Avatar>
                                }
                                action={ }
                                title={user.userName}
                                subheader={user.fullName}
                            />
                        ))}
                    </Grid>
                </FindHeader>

            </FindDrawer>
        );
    }
}

export default Find;