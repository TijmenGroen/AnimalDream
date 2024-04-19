import "../css/about.css";
import Placeholder from "/assets/img/placeholder.svg";

function About(): JSX.Element {
  return (
    <div className="aboutBody">
      <h1>Lorem Ipsum</h1>
      <section className="aboutContainer">
        <p className="aboutContent">
          <img src={Placeholder} alt="placeholder" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptatibus, magnam similique labore magni beatae, veniam accusantium
          neque debitis aspernatur, blanditiis odit. Ad autem voluptatem
          incidunt perspiciatis accusamus repudiandae odio.
        </p>
        <p className="aboutContent">
          <img src={Placeholder} alt="placeholder" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptatibus, magnam similique labore magni beatae, veniam accusantium
          neque debitis aspernatur, blanditiis odit. Ad autem voluptatem
          incidunt perspiciatis accusamus repudiandae odio.
        </p>
      </section>
    </div>
  );
}

export default About;
