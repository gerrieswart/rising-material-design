import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import SEO from '../components/seo';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection'
import Card1 from '../components/card1'
import Card2 from '../components/card2'
import Card3 from '../components/card3'
import Card4 from '../components/card4'
import { MDBRow } from 'mdbreact'


class JoinCoach extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />
        <Carousel />
        <Intro />
        <main>
          <AboutSection />
          <section id="cardSection" >
            <h2 className="h1-responsive text-center font-weight-bold mb-5 text-white">
            Advanced Features That You Will Surely Love
            </h2>
            <p className="text-white w-responsive text-center mx-auto p-3 mt-2">
              We are currently running our Beta program and inviting Coaches and Athletes to join for free. The Rising Advantage will involve Intelligent Matchmaking, Video Analysis, Virtual Training, and more.
            </p>
            <MDBRow className="m-0" center>
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
            </MDBRow>
          </section>
        </main>
        </Layout>
      </>
    );
  }
}

export default JoinCoach;
