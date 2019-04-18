import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mockup.webp"

const Card4 = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Video Analysis</MDBCardTitle>
                    <MDBCardText>Coming Soon..Video is a powerful coaching asset. Identify the key coachable moments that will help your athlete improve.</MDBCardText>
                    <MDBBtn href="/risingvideo" color="primary">More About Video</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Card4;
