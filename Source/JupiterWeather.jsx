
const { Component, Fragment } = require("react");
import Cookies from "universal-cookie";
import cnst from "./Constants";
import REQUEST from "../Components/Request";
import { Button, Container, Modal } from "react-bootstrap";
import LoginUI from "./LoginUI";

class JupiterWeather extends Component {

    cookies = new Cookies();

    constructor(props) {

        super(props);

        this.state = {

            current_app_contents: cnst.cnst_current_app_content.none,
            app_ui_layout: <h1>Welcome</h1>

        }

    }

    checkUserLogin = (user_session) => { //tells the app what state to start in 

        if (user_session) {
            return cnst.cnst_current_app_content.app;
        } else {
            return cnst.cnst_current_app_content.login;
        }

    }

    componentDidMount = () => {

        const user_session = this.cookies.get(cnst.cnst_cookies.user_session);
        const current_app_contents = this.checkUserLogin(user_session);
        let app_ui_layout = "";

        if (current_app_contents == cnst.cnst_current_app_content.none) {

            //nothing happens, show error message

        } else if (current_app_contents == cnst.cnst_current_app_content.login) {

            app_ui_layout = this.ui_login_layout();

        } else if (current_app_contents == cnst.cnst_current_app_content.setup) {

            //guide user to setup their settings

        } else if (current_app_contents == cnst.cnst_current_app_content.app) {

            //app

        }

        this.setState({
            current_app_contents,
            app_ui_layout
        });

    }

    ui_login_layout = () => {

        return <LoginUI />

    }

    render = () => {

        return (
            <Fragment>
                <Container className="align-items-center" style={{ height: "600px", width: "500px", marginTop: "100px", marginBottom: "auto", marginLeft: "auto", marginRight: "auto"}}>
                    {this.state.app_ui_layout}
                </Container>
            </Fragment>
            );
    };

}

export default JupiterWeather;