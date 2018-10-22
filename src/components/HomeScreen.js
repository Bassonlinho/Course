import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/AuthActions'
import { Button } from '@material-ui/core';
export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
            <div>
                <Button
                    onClick={() => this.props.logout()}>
                    {'Logout'}
                </Button>
            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)