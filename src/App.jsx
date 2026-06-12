import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Ali Nasser Al-Ojeely</h1>
        <p className="title">Software Developer</p>
      </header>

      <main>
        <section className="card">
          <h2>About Me</h2>
          <p>
            Information Technology Graduate interested in C++, C#, SQL, React and Software Development.
          </p>
        </section>

        <section className="card">
          <h2>Projects</h2>
          <ul className="project-list">
            <li>UST Community</li>
            <li>Bank Management System</li>
            <li>Rock Paper Scissors</li>
            <li>Nexus Game Launcher</li>
          </ul>
        </section>

        <section className="card">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:alialojeely@gmail.com">alialojeely@gmail.com</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;