import React from 'react';
import { connect } from 'react-redux';
import { Paper, Button, TextField } from '@material-ui/core';
import { login } from '../actions/AuthActions'
export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    loginPressed() {
        if (this.state.username && this.state.password) {
            this.props.login(this.state.username, this.state.password)
        } else {

        }
    }


    render() {

        return (
            <Paper>
                <div style={{
                    textAlign: 'center',
                }}>
                    <TextField
                        label={'Username'}
                        required
                        onChange={(event) => this.setState({ username: event.target.value })}
                    />
                    <br />
                    <TextField
                        type="password"
                        label={'Password'}
                        required
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />
                    <br />
                    <Button
                        onClick={() => this.loginPressed()}>
                        {'Login'}
                    </Button>
                </div>
            </Paper>
        )
    }
}




function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)