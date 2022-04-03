import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Foo bar</h1>
      </header>
      <aside className="sidebar">
        <section className="panel">
          <h2 className="panel-headline">Baz qux</h2>
          <p className="panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="panel-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="panel-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="panel-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </aside>
      <main className="main">
        <section className="panel">
          <h2 className="panel-headline">quux corge</h2>
          <p className="panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="panel-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="panel-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="panel-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="panel">
          <h2 className="panel-headline">grault garply</h2>
          <ul className="panel-list">
            <li>waldo</li>
            <li>fred</li>
            <li>plugh</li>
            <li>wyzzy</li>
            <li>thud</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
