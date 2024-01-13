import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title title="our" subTitle="services" />
      </div>
      <div className="section-center services-center">
        {services.map(({ id, text, para, icon }) => {
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{text}</h4>
                <p className="service-text">{para}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
