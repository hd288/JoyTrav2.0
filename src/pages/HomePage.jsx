//import libs
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

//import components
import HomeCarousel from "../components/carousel/Carousel";
import Posts from "../components/posts/Posts";
import RightSideBar from "../components/sidebar/RightSideBar";
import LeftSideBar from "../components/sidebar/LeftSideBar";

function HomePage() {
  // async function reloadSdkFb() {
  //   if (window.FB) {
  //     window.FB.XFBML.parse();
  //   }
  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://connect.facebook.net/vi_VN/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");
  // }
  // useEffect(() => {
  //   reloadSdkFb();
  // }, []);
  return (
    <>
      <HomeCarousel />

      {/* <div
        class="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width="1024"
        data-numposts="10"
      ></div> */}

      <div className="m-5">
        <Row>
          <Col className="d-none d-sm-block">
            <LeftSideBar />
          </Col>
          <Col xs={12} sm={7}>
            <Posts />
          </Col>
          <Col className="d-none d-md-block">
            <RightSideBar />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage;
