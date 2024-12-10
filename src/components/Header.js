// Header.js (modified)

const Header = ({ onToggleTheme }) => {
    return (
      <header>
        <h1>Demo Website</h1>
        <button onClick={onToggleTheme}>Toggle Theme</button> 
      </header>
    );
  };
  
  export default Header;