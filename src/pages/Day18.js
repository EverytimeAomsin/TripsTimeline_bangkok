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
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,

} from "mdbreact";
import P17 from './P17';
import P18 from './P18';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    activeItemOuterTabs: "2",
    activeItemInnerPills: "2",
  };

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" color="primary">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" >
             17 ธันวาคม
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" >
              18 ธันวาคม
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card mb-5"
          activeItem={this.state.activeItemOuterTabs}
        >
          <MDBTabPane tabId="1" role="tabpanel">
         <P17/>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
         <P18/>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>

    );
  }
}

export default HomePage;
