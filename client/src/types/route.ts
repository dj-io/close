export interface INavStateToProps {
    isFindOpen: boolean;
    token: string;
}

export interface INavDispatchToProps {
    openFind: Function;
    logout: Function;
}