import * as React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.ts';
import { FindDrawer, FindHeader, FindLink, Seperate } from './Find.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { FindFields } from '../../common/constants/formFields.ts';
import { find, profilePicUrl } from '../../common/api/user/Users.Api.ts';
import { Link } from 'react-router-dom';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';
import { Suggested } from './Suggested.tsx';
import withWindowDimensions from '../../common/hooks/WithWindowDimensions.tsx';
import { Confirm } from '../../common/components/buttons/Confirm.tsx';

interface IFindProps {

}

interface IFindState {
    direction: string;
    find: string;
    found: boolean;
}

export type FindProps = IFindStateToProps & IFindDispatchToProps & IFindProps;

/**
 * Find class Component
 * @class Find @extends React.Component<FindProps>
 */
class Find extends React.Component<FindProps> {
    state: IFindState = {
        find: '',
        found: true,
    }

    initialValues = {
        find: ''
    }

    handleChange = (e) => this.setState({ find: e.target.value });

    search = async () => {
        const res = await find(this.state.find);

        if (res.data) {
            this.props.returnFind(res.data);
            this.setState({ found: true })
        }

        if (!res.data) this.setState({ found: false })

    }

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
                    isFindOpen={this.props.isFindOpen}
                    variant='persistent'
                    anchor={this.props.isMobile ? 'bottom' : 'left'}
                    open={this.props.isFindOpen}
                    onClose={!this.props.isFindOpen}
                >
                    <FindHeader>
                        <Grid sx={{ marginBottom: '25px', }} container direction='column' alignItems='center'>
                            <Typography sx={{ marginRight: 32, color: '#3C414270', fontWeight: 'bold' }} variant='h4'>Find </Typography >
                            {/* TODO: update form with start/end adornments use enter as submit*/}
                            <Form
                                buttonLabel="Find"
                                disableValue='find'
                                fields={FindFields}
                                submit={this.search}
                                change={this.handleChange}
                                initialValues={this.initialValues}
                            />
                        </Grid>
                        <Seperate />
                    </FindHeader>
                    <Grid sx={{ marginTop: '25px', marginRight: 32, }} container direction='column' alignItems='start'>
                        {Object.keys(this.props.foundUser).length > 1 && (
                            <>
                                <Typography sx={{ marginRight: 32, p: 2, color: '#3C414270' }} variant='button'>
                                    {UserActionTypes.RECENT}
                                </Typography >
                                <FindLink to={`/${this.props.foundUser.username}`}>
                                    <CardHeader
                                        sx={{ width: 300 }}
                                        onClick={() => this.props.openFind(!this.props.isFindOpen)}
                                        avatar={
                                            <IconButton>
                                                <Avatar
                                                    alt={this.props.foundUser.username}
                                                    src={profilePicUrl(this.props?.foundUser?.id)}
                                                />
                                            </IconButton>
                                        }
                                        title={this.props.foundUser.username}
                                        subheader={this.props.foundUser.name}
                                    />
                                </FindLink>
                            </>
                        )}
                    </Grid>
                    {!this.state.found && (
                        <Grid container direction='column' alignItems='center' >
                            <Typography
                                sx={{ fontWeight: 'bold' }}
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                No Friends Found
                            </Typography>
                        </Grid>
                    )}
                    {!this.props.following.length &&
                        !Object.keys(this.props.foundUser).length && (
                            <Suggested
                                currentUser={this.props.user}
                                following={this.props.following}
                                profiles={this.props.profiles}
                                feed={this.props.feed}
                            />
                        )}
                </FindDrawer>
            </Grid >
        );
    }
}

export default withWindowDimensions(Find);