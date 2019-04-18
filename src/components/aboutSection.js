import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import { MDBAnimation } from "mdbreact";

const FeaturesPage = () => {
    return (
        <MDBContainer tag="section"  className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
            Rising Connects You With Coaches You Can Trust
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
            Learn the skills needed to take your game to the next level from qualified coaches who are eager to help you.
            </p>
            <MDBRow>
            
                <MDBCol md="4">
                <   MDBAnimation reveal type="fadeInLeft">
                    <MDBIcon icon="search" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Search.</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        
                    Enter your location and sport. Our Robot will help identify the coach that best fits your needs. For the best matchmaking create a free Athlete profile. Learn the skills needed to take your game to the next level from a Coach that inspires you and who is willing to coach at your skill level.
                    
                    </p>
                    </MDBAnimation>
                </MDBCol>
               
                
                <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                    <MDBIcon icon="book" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Book.</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        
                    From the coach’s profile, click the “Message Coach” button if you have additional questions for the coach, or click the “Book Now” button if you are ready to start training. After you book your coach, you'll receive each other’s contact information; call or email your coach to set up your first training session.
                    
                    </p>
                    </MDBAnimation>
                </MDBCol>
                
                
                <MDBCol md="4">
                <MDBAnimation reveal type="fadeInRight">
                    <MDBIcon far icon="user" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Train.</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        
                    With every session, you’ll improve your game, learn new skills and gain confidence. Receive actionable feedback from your coach to work on between training sessions. Remember, you're in good hands with our dedicated customer support team.
                    
                    </p>
                    </MDBAnimation>
                </MDBCol>
               
            </MDBRow>
        </MDBContainer>
    );
}

export default FeaturesPage;
