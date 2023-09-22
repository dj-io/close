export interface IHomeStateToProps {
    hasAccount: boolean
    user: any //TODO: make IUser
    following: any //TODO: make IFollowing
}

export interface IHomeDispatchToProps {
    feed: Function;
}

export interface IFindStateToProps {
    isFindOpen: boolean;
    foundUser: any; //TODO: make IUSER
}

export interface IFindDispatchToProps {
    openFind: Function;
    returnFind: Function;
}