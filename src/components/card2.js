import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/blog1.jpeg"

const Card2 = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Uprising</MDBCardTitle>
                    <MDBCardText>It's Time To Step Up Your Game - Our Uprising blog has tryout tips, success stories, nutritional information.</MDBCardText>
                    <MDBBtn href="/uprising" color="primary">Go to our Blog</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Card2;
