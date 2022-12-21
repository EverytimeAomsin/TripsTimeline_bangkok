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
import { Link } from "react-router-dom";

class P17 extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <MDBContainer>
        <MDBStepper vertical>
          <MDBStep className="completed">
            <a href="#!">
              <span className="circle">1</span>
              <span className="label">ออมสินเดินทาง 06:00 - 08:30</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>06:45 <MDBIcon icon="plane" /> 08:30</MDBCardTitle>
                  <MDBCardText>

                    <li>Departure Aerodrome : VTCC</li>
                    <li>Departure Time : 06:45</li>
                    <li>Destination Aerodrome : VTBS </li>
                    <li>Arrival : 08:05 </li>
                    <li>Type of Aircraft : A320</li>

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/wS5KcVkDHFrrybdGA" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">2</span>
              <span className="label">หวาเดินทาง</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>08:00 <MDBIcon icon="plane" /> 09:25</MDBCardTitle>
                  <MDBCardText>

                    <li>Departure Aerodrome : VTSG</li>
                    <li>Departure Time : 06:45</li>
                    <li>Destination Aerodrome : VTBS </li>
                    <li>Arrival : 08:05 </li>
                    <li>Type of Aircraft : A320</li>

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/wS5KcVkDHFrrybdGA" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">3</span>
              <span className="label">10:00 - 10:45</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle><h4 className='blue-text'>10:00 <MDBIcon icon="subway" /> <MDBIcon icon="angle-double-right" /> 10:35</h4>
                    <h4 className='teal-text'>10:40 <MDBIcon icon="subway" /> <MDBIcon icon="angle-double-right" /> 10:55</h4></MDBCardTitle>
                  <MDBCardText>

                    เดินทางไปยัง MBK ด้วย Airport link และ BTS

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/cphSVrHuMbLRvQsRA" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">3</span>
              <span className="label">11:00 - 13:00</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>MBK + Mega plaza</MDBCardTitle>
                  <MDBCardText>

                    *เดินทางไป MBK + Mega plaza
                    *กินข้าวที่เยาวราช

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/KXCwawcKYS6EsN9p7" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">4</span>
              <span className="label">12:00-15:00</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>ไม่มีข้อมูล</MDBCardTitle>
                  <MDBCardText>



                  </MDBCardText>
                  {/* <MDBBtn color="primary" href='https://goo.gl/maps/wS5KcVkDHFrrybdGA'>ตำแหน่งปลายทาง</MDBBtn> */}
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">5</span>
              <span className="label">16:00-19:00</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>FINAL FANTASY Music</MDBCardTitle>
                  <MDBCardText>


                    ณ หอประชุมมหิดลสิทธาคาร มหาวิทยาลัยมหิดล ศาลายา

                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/gfr5vrmFHQkuUT2C8" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
          <MDBStep className="active">
            <a href="#!">
              <span className="circle">6</span>
              <span className="label">19:00-XXX</span>
            </a>
            <div className="step-content grey lighten-4" style={{ marginLeft: '2.5rem' }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>ไปที่พัก</MDBCardTitle>
                  <MDBCardText>
                  โรงแรมคอนราด กรุงเทพ


                  </MDBCardText>
                  <MDBBtn href="https://goo.gl/maps/qKrZw6HRgKgQ2CTk7" target="_blank" size='sm'><span style={{ fontSize: '140%' }}> <MDBIcon icon="map-marker-alt" /> ตำแหน่งปลายทาง</span></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBStep>
        </MDBStepper>
      </MDBContainer>

    );
  }
}

export default P17;
