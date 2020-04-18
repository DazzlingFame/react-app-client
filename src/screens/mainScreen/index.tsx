import React from "react";
import {Button} from "../../components/button";
import './mainScreenStyles.css'
import {Loader} from "../../components/loader";
import {getMainHeader, getMainPost} from "../../utils/api";

type PropsType = {

}

type StateType = {
    apiText: string,
    isLoading: boolean,
}

export class MainScreen extends React.PureComponent<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            apiText: 'default',
            isLoading: false,
        };
    }

    componentDidMount(): void {
        this.callApi();
    }

    callApi = () => {
        this.setState({
            isLoading: true,
        });

        getMainHeader().then(response => {
            this.setState({
                apiText: response,
                isLoading: false,
            })
        });
        // getMainPost({text: 'qweqweqwe'}).then(response => {
        //     this.setState({
        //         apiText: response,
        //         isLoading: false,
        //     })
        // })
    };

    render(): React.ReactElement {
        return (
            <div className={'topContainer'}>
                {this.state.isLoading ? <Loader/> :
                    <div className={'bodyContainer'}>
                        <p className={'headerText'}>{this.state.apiText || 'MAIN'}</p>
                        <div className={'buttonsContainer'}>
                            <Button text={'SANDBOX'} onClick={() => window.open('/sandbox', '_parent')}/>
                            <Button text={'LOADER'} onClick={() => window.open('/loader', '_parent')}/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}