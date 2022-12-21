import React from 'react';
import {
  MDBContainer,
  MDBStepper,
  MDBStep,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

} from "mdbreact";

class P18 extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <MDBContainer>
        <MDBStepper vertical>
          <MDBStep className="completed">
            <a href="#!">
              <span className="circle">1</span>
              <span className="label">11:30 - 13:30</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>มหานคร skywalk</MDBCardTitle>
                  <MDBCardText>

                   ตึกมหานคร

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/wqeW2EGqwV7Ng1mu7" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>

          <MDBStep className="completed">
            <a href="#!">
              <span className="circle">2</span>
              <span className="label">13:30 - 15:10</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>ไปสนามบินดอนเมือง</MDBCardTitle>
                  <MDBCardText>

                  ท่าอากาศยานดอนเมือง

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/kCFTqfjMeamTFwC6A" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
      
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">3</span>
              <span className="label">19:15-:21:00</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>ออมสินเดินทางกลับ</MDBCardTitle>
                  <MDBCardText>

                  <li>Departure Aerodrome : VTBD</li>
                    <li>Departure Time : 19:15</li>
                    <li>Destination Aerodrome : VTSS </li>
                    <li>Arrival : 21:00 </li>
                    <li>Type of Aircraft : B737-800</li>

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/hQKxiH1ZzSsZMTdX8" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>

          <MDBStep className="active">
            <a href="#!">
              <span className="circle">4</span>
              <span className="label">12:30-:15:00</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>หวาเดินทางกลับ</MDBCardTitle>
                  <MDBCardText>

                  <li>Departure Aerodrome : VTBD</li>
                    <li>Departure Time : 15:45</li>
                    <li>Destination Aerodrome : VTSG </li>
                    <li>Arrival : 17:35 </li>
                    <li>Type of Aircraft : B737-800</li>

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/wS5KcVkDHFrrybdGA" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
         
        </MDBStepper>
      </MDBContainer>

    );
  }
}

export default P18;
