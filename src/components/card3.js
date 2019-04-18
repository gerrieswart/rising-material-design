import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mobile_apps.jpg"

const Card3 = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves/>
                <MDBCardBody>
                    <MDBCardTitle>Payments</MDBCardTitle>
                    <MDBCardText>We are building out a convinient and easy to use payment platform. You can still use any payment platform of your choice.</MDBCardText>
                    <MDBBtn href="/payments" color="primary">Payment Model</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Card3;
