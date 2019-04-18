import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import { MDBAnimation } from "mdbreact";

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "15vh", marginBottom: "50vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                <MDBAnimation type="fadeInLeft">
                    <h1 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5 text-uppercase">Matching Coaches and Athletes</h1>
                    </MDBAnimation>
                    <hr className="hr-light my-4 w-75" />
                    <MDBAnimation type="fadeInRight">
                    <h2 className="subtext-header h1-responsive mt-2 mb-4 text-uppercase orange-text">Amazing Platform</h2>
                    <div className="w-100">
                    <p className="w-responsive text-center mx-auto p-3 mt-2">We use Artificial Intelligence to intelligently match athletes, from kids to budding stars, with the perfect private coach for them. No matter your skill level our platform will find a coach that fits your needs. Simply sign up and get matched!
</p>
                    </div>
                    <div className="w-100 my-4"></div>
                    </MDBAnimation>
                    <MDBBtn color="primary" ><MDBIcon icon="search" className="mr-2" />Find a Coach</MDBBtn>
                    <MDBBtn color="danger" ><MDBIcon icon="check-circle" className="mr-2" />Join as a Coach</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
