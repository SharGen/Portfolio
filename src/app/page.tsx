
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/shargen.jpg"
              alt="Saransh Sinha Profile"
              className="shadow-dark"
            />
            <h1>Saransh Sinha</h1>
            <p>Hello I am an Ethical Hacker and a Full-Stack Web Developer</p>
            <div className="social-links">
              <a href="https://github.com/SharGen" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://linkedin.com/in/saransh-sinha-6b47b921b" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
