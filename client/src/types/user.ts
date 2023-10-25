export interface ISignupStateToProps {
    hasAccount: boolean
}

export interface ISignupDispatchToProps {
    userHasAccount: Function;
    userCredentials: Function;
}

export interface ISigninStateToProps {
    hasAccount: boolean;
    userCredentials: any;
}

export interface ISigninDispatchToProps {
    userHasAccount: Function;
    login: Function;
    profiles: Function;
    userCredentials: Function;
}

export interface ISignOutStateToProps {
    user: any;
    isExpired: boolean;
    token: boolean;
}

export interface ISignOutDispatchToProps {
    login: Function;
    logout: Function;
    profiles: Function;
    expiredToken: Function;
}

export interface IProfileStateToProps {
    hasAccount: boolean,
    user: any // TODO: Create Iprofile
    foundUser: any // TODO: create IFoundUser
    following: any // TODO: Create IFollowing
    username: String;
}

export interface IProfileDispatchToProps {
    userHasAccount: Function;
    profiles: Function;
    profilePictures: Function;
}

export interface IShareStateToProps {
    user: any // TODO: create IUser interface
}

export interface IShareDispatchToProps {
    profiles: Function;

}