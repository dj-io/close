export interface INavStateToProps {
    isFindOpen: boolean;
    token: string;
    user: any; // TODO: Create IUSER
}

export interface INavDispatchToProps {
    openFind: Function;
    logout: Function;
}