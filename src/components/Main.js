import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import HomeScreen from './HomeScreen';
import { setInitialState } from '../actions/AuthActions';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token && this.props.loginSuccess) {
            this.setState({
                authenticated: true
            })
            this.props.setInitialState('loginSuccess');
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (token) {
            this.setState({
                authenticated: true
            })
        } else {
            this.setState({
                authenticated: false
            })
        }
    }

    render() {
        let content;
        const { authenticated } = this.state;
        content = <div>
            <ProtectedRoute exact path="/home" authorized={authenticated} component={HomeScreen} />
            <Route exact path="/" component={LoginPage} />
            {
                authenticated && window.location.pathname === '/' ?
                    <Redirect from='/' to="home" />
                    : null
            }
        </div>
        return (
            <div>
                {content}
            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        token: state.appReducer.token,
        user: state.appReducer.user,
        loginSuccess: state.appReducer.loginSuccess
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setInitialState: (component) => dispatch(setInitialState(component))
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main))