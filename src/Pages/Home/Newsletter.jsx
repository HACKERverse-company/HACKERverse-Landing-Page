import React, { useEffect } from "react";

const Newsletter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22582640",
          formId: "168d704a-5179-4312-a317-b61c6e0f8718",
          css: '',
          target: "#hubspotForm", // Specify the target element where the form will be rendered
        });
        const interval = setInterval(() => {
          const iframe = document.getElementById("hs-form-iframe-1");
          if (iframe) {
            const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            const button = innerDoc.querySelector('input[type="submit"]');
            if (button) {
              button.style.marginLeft = "72px";
              clearInterval(interval); // Clear interval once the button is found and styled
            }
          }
        }, 100);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {" "}
      <section className="bg-transparent" style={{ marginTop: 50 }}>
        <div className=" px-4 mx-auto max-w-screen-xl  lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl  lg:text-3xl font-rubik uppercase tracking-tight font-extrabold leading-tight text-gray-300  hover-underline">
              Subscribe to our Newslettter
            </h2>
            <p className="mb-6 font-light font-poppins text-gray-500 dark:text-gray-400 md:text-lg">
              Join the Uprising. Get Access to the the Rebel Dispatch.
            </p>
          </div>
          <form className="flex items-center justify-center max-w-sm mx-auto">
            <div id="hubspotForm" className="flex">
              {/* This div will be replaced by the HubSpot form */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
