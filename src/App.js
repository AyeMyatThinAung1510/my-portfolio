import React from "react";
import Layout from "./components/Layout/Layout";
import AboutMe from "./pages/aboutme";
import Project from "./pages/project";
import Service from "./pages/service";
const App = () => {
  return (
    <div>
      <Layout>
        <div>
          <AboutMe />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <Project />
        </div>
      </Layout>
    </div>
  );
};

export default App;
