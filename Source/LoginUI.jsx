import { Col, Container, Form, FormControl, FormGroup, FormLabel, Modal, Row } from "react-bootstrap"
import JupiterWeatherLogo from "../Images/jupiterweatherlogo.jpg"

const LoginUI = () => {

    return (
        <Container style={{ background: "#46b7e3", height: "inherit", width: "inherit", borderStyle: "solid", borderRadius: "25px", borderColor: "#46b7e3" }}>
            <Form>
                <Col lg="12" >
                    <Row style={{textAlign:"center"}}>
                        <img src={JupiterWeatherLogo} style={{ width: "200px", height: "auto" }} />
                    </Row>
                    <Row>
                        <FormGroup className="mb-3">
                            <FormLabel>
                                Username
                            </FormLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormControl type="password"/>
                        </FormGroup>
                    </Row>
                </Col>
            </Form>
        </Container>
    );

}

export default LoginUI;