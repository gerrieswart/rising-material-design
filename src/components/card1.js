import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mockup.webp"


const Card1 = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Sign Up</MDBCardTitle>
                    <MDBCardText>Apply to become a Rising Coach. Our Beta is free until July 2019. Our Robot will assist you in creating your profile from your resume.</MDBCardText>
                    <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Card1;
