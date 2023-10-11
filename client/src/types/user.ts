export interface ISignupStateToProps {
    hasAccount: boolean
}

export interface ISignupDispatchToProps {
    userHasAccount: Function;
}

export interface ISigninStateToProps {
    hasAccount: boolean
}

export interface ISigninDispatchToProps {
    userHasAccount: Function;
    login: Function;
    profiles: Function;
}

export interface IProfileStateToProps {
    hasAccount: boolean,
    user: any // TODO: Create Iprofile
    foundUser: any // TODO: create IFoundUser
    following: any // TODO: Create IFollowing
}

export interface IProfileDispatchToProps {
    userHasAccount: Function;
    profiles: Function;
}

export interface IShareStateToProps {
    user: any // TODO: create IUser interface
}

export interface IShareDispatchToProps {
    profiles: Function;

}