import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Security analyst */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Security analyst</h4>
          <p>
            I am a Security Analyst. I have a good knowledge of various security tools and technologies.
          </p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Python Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Python Development</h4>
          <p>
            I am a Python Developer. I have a good knowledge of various Python tools and technologies.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: Network Security */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-wifi" /></div>
          <h4>Network Security</h4>
          <p>
            I am a Network Security. I have a good knowledge of various Network tools and technologies.
          </p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4:System Administrator */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-server" /></div>
          <h4>System Administration</h4>
          <p>
            I am a System Administrator. I have a good knowledge of various System tools and technologies.
          </p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Custom Web Design</h4>
          <p>Create a stunning online presence with our custom web design services. Wel will tailor a website that
            not only
            looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
          </p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Web Development</h4>
          <p>Turn your digital ideas into reality with our web development solutions. We specialize in crafting
            robust
            and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
