import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/blogsmart.jpg"

const Card1 = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Intelligent Matchmaking</MDBCardTitle>
                    <MDBCardText>Apply to become a Rising Coach. Our Beta program is $19.99 a month for coaches and free for athletes to join.</MDBCardText>
                    <MDBBtn href="/matchmaking" color="danger">Join as a Coach</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Card1;
