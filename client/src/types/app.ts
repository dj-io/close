export interface IHomeStateToProps {
    hasAccount: boolean
    user: any //TODO: make IUser
    following: any //TODO: make IFollowing
    isFindOpen: boolean;
}

export interface IHomeDispatchToProps {
    feed: Function;
    openFind: Function;
}

export interface IFindStateToProps {
    isFindOpen: boolean;
    foundUser: any; //TODO: make IUSER\
    following: any;
    user: any;
}

export interface IFindDispatchToProps {
    openFind: Function;
    returnFind: Function;
    profiles: Function;
}