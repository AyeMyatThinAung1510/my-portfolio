import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class Sidebar extends Component {
  state = {
    scrolling: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const scrollHeight = Math.ceil(window.scrollY / 50) * 50;
    const shouldBeScrolling = scrollHeight > 0;
    const { scrolling } = this.state;
    if (shouldBeScrolling !== scrolling) {
      this.setState(prevState => ({
        ...prevState,
        scrolling: shouldBeScrolling
      }));
    }
  };

  render() {
    // const { scrolling } = this.state;
    return (
      <div className="sidebar">
        <div className="profile-info-container">
          <div className="profile-info-me-wrap">
            <div className="profile-info-me"></div>
          </div>
          <div className="text-center">
            <h3>Aye Myat Thin Aung</h3>
            <p className="profile-info-content">
              Web Developer
              <br />
              ayemyatthinaung.1510@gmail.com
              <br />
              +959 771 908 680
            </p>
          </div>
          <ScrollspyNav
            scrollTargetIds={["aboutme", "service", "project"]}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <div>
              <ul>
                <li>
                  <a href="#aboutme">About Me</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#project">Portfolio</a>
                </li>
              </ul>
            </div>
          </ScrollspyNav>
          <div className="text-center footer">
            <p>Follow Me</p>
            <div className="py-3">
              <a
                href="https://www.facebook.com/delhi.aung"
                title="facebook"
                className="footer-icon"
              >
                <i className="fab fa-facebook-f fa-2x " />
              </a>
              <a
                href="https://www.instagram.com/ayemyat_thinaung/"
                title="IG"
                className="footer-icon"
              >
                <i className="fab fa-instagram fa-2x " />
              </a>
              <a
                href="https://github.com/AyeMyatThinAung1995"
                title="GitHub"
                className="footer-icon"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
