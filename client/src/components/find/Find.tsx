import * as React from 'react';
import { IFindDispatchToProps, IFindStateToProps } from '../../types/app.ts';


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
        return (  );
    }
}

export default Find;