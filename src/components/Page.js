// Page.js (modified)

import Header from "./Header";

const Page = ({ theme, onToggleTheme }) => {
  return (
    <div id="app" className={theme}> 
      <Header onToggleTheme={onToggleTheme} /> {/* Pass toggle function */}

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React.
        </p>
      </article>
    </div>
  );
};

export default Page;