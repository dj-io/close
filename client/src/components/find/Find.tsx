import * as React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.ts';
import { FindDrawer, FindHeader, FindLink, Seperate } from './Find.Styles.ts';
import { Form } from '../../common/components/form/Form.tsx';
import { FindFields } from '../../common/constants/formFields.ts';
import { find } from '../../common/api/user/Users.Api.ts';
import { Link } from 'react-router-dom';
import { UserActionTypes } from '../../common/enums/UserActionType.ts';

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
        direction: 'left',
        find: '',
    }

    initialValues = {
        find: ''
    }

    handleChange = (e) => this.setState({ find: e.target.value });


    search = async () => {
        const res = await find(this.state.find);
        this.props.returnFind(res.data);
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
                    variant='persistent'
                    anchor={this.state.direction}
                    open={this.props.isFindOpen}
                    onClose={!this.props.isFindOpen}
                >
                    <FindHeader>
                        <Grid sx={{ marginBottom: '25px', }} container direction='column' alignItems='start'>
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
                    {Object.keys(this.props.foundUser).length > 1 && (
                        <Grid sx={{ marginTop: '25px', marginRight: 32, }} container direction='column' alignItems='start'>
                            <Typography sx={{
                                marginRight: 32,
                                color: '#3C414270'
                            }}
                                variant='button'
                            >
                                {UserActionTypes.RECENT}
                            </Typography >
                            <FindLink to={`profile/${this.props.foundUser.id}`}>
                                <CardHeader
                                    sx={{ width: 300 }}
                                    avatar={
                                        <IconButton>
                                            <Avatar
                                                alt={this.props.foundUser.username}
                                                src={this.props.foundUser.picture}
                                            />
                                        </IconButton>
                                    }
                                    title={this.props.foundUser.username}
                                    subheader={this.props.foundUser.name}
                                />
                            </FindLink>

                        </Grid>
                    )}
                </FindDrawer>
            </Grid >
        );
    }
}

export default Find;