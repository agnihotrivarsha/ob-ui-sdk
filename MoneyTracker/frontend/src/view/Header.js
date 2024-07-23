import '../App.css'

const Header = () => {
    return (
      <header aria-label="Main Header">
        <nav class="header-nav" aria-label="Main Navigation">
          <div className="logo">
            <a href="/">
              <img src="logo.png" alt="Money Tracker" aria-label="Money Tracker" />
              Money Tracker
            </a>
          </div>
          <div role="navigation">
              <ul className="nav-links">
                <li><a href="/">Dashboard</a></li>            
                <li><a href="/profile">Profile</a></li>
                <li><a href="/contact-us">Contact us</a></li>
                <li><a href="/about-us">About Us</a></li>
              </ul>
            </div>
        </nav>
      </header>
    );
  };

  export default Header
  
