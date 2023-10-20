import React, { useEffect } from "react";
import { Container, Image, Modal } from "react-bootstrap";

export default function Post(props) {
  async function reloadSdkFb() {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      // Load Facebook SDK if not already loaded
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "531489719133990", // Replace with your Facebook App ID
          xfbml: true,
          version: "v12.0",
        });
        window.FB.XFBML.parse();
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }

  useEffect(() => {
    reloadSdkFb();
  }, []);

  return (
    <Modal {...props} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.post.picture} className="w-100 object-fit-cover" />

        <>
          <p>{props.post.intro}</p>
          {props.post.sections.map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}
        </>

        <div
          className="fb-comments w-100 d-flex justify-content-center"
          data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
          data-width="700"
          data-numposts="10"
        ></div>
      </Modal.Body>
    </Modal>
  );
}
