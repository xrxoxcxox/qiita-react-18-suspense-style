import { Suspense } from "react";
import "./App.css";

async function fetchData(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (Math.random() * 1000).toFixed(0);
}

let data: string | undefined;

function useData(): string {
  if (data === undefined) {
    throw fetchData().then((d) => (data = d));
  }
  return data;
}

function DataLoader() {
  const data = useData();
  return (
    <ul className="panel-list">
      <li>{data}</li>
      <li>Alfa</li>
      <li>Bravo</li>
      <li>Charlie</li>
      <li>Delta</li>
      <li>Echo</li>
      <li>Foxtrot</li>
      <li>Golf</li>
      <li>Hotel</li>
      <li>India</li>
      <li>Juliett</li>
      <li>Kilo</li>
      <li>Lima</li>
      <li>Mike</li>
      <li>November</li>
      <li>Oscar</li>
      <li>Papa</li>
      <li>Quebec</li>
      <li>Romeo</li>
      <li>Sierra</li>
      <li>Tango</li>
      <li>Uniform</li>
      <li>Victor</li>
      <li>Whiskey</li>
      <li>X-ray</li>
      <li>Yankee</li>
      <li>Zulu</li>
    </ul>
  );
}

function Fallback() {
  return <div className="fallback"></div>;
}

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Foo bar</h1>
      </header>
      <aside className="sidebar">
        <section className="panel">
          <h2 className="panel-headline">Baz qux</h2>
          <p className="panel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="panel-text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="panel-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="panel-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </aside>
      <main className="main">
        <section className="panel">
          <h2 className="panel-headline">quux corge</h2>
          <p className="panel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="panel-text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="panel-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="panel-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="panel">
          <h2 className="panel-headline">grault garply</h2>
          <Suspense fallback={<Fallback />}>
            <DataLoader />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default App;
