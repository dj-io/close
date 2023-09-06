export interface IHomeStateToProps {
    hasAccount: boolean
}

export interface IHomeDispatchToProps {
    userHasAccount: Function;
}

export interface IFindStateToProps {
    isFindOpen: boolean
}

export interface IFindDispatchToProps {
    openFind: Function;
    findUsers: Functions;
}