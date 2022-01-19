import './App.css';
// import PhotoGallery from './PhotoGallery.js';

function App() {
  return (
    <div className="App">

      <div id="navBar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>

      <div id="contactBar">
        <a id="resume" href="%PUBLIC_URL%/Files/Resume.pdf" target="_blank" rel="noreferrer">
          My Resume
        </a> 

        <a className="icon" href="mailto:kaylin.punotai@gmail.com">
          <img
                src= "Images/email-icon.png"
                alt="kaylin.punotai@gmail.com"
                width="35px"
                height="35px"
          />
        </a>
        <a className="icon" href="https://www.linkedin.com/in/kaylin-punotai/" target="_blank" rel="noreferrer">
          <img
                src= "Images/linkedin-icon.png"
                alt="https://www.linkedin.com/in/kaylin-punotai/"
                width="35px"
                height="35px"
          />
        </a>
        <a className="icon" href="https://github.com/kaylinpunotai" target="_blank" rel="noreferrer">
          <img
                src= "Images/github-icon.png"
                alt="https://github.com/kaylinpunotai"
                width="35px"
                height="35px"
          />
        </a>
      </div>

      <div className="app-section" id="home">
        <div className="home-left">
          <img id="headshot"
            src= "Images/headshot.jpg"
            alt="Kaylin Punotai Headshot"
          />
          <div id="headshot-block"></div>
        </div>
        <div className="home-right">
          <div id="title-name">Kaylin Punotai</div>
          <div id="title-sub">Software Engineer in San Francisco</div>
        </div>
      </div>
      
      <div className="app-section" id="about">
        <div className="header">About</div>
        <div className="content">
          Hi, I'm Kaylin! I'm a self-taught software engineer with experience in React, 
          JavaScript, and C#.

          I am currently a process engineer at Intel and seeking opportunities to break
          into the programming field.
        </div>
      </div>

      <div className="app-section" id="education">
        <div className="header">Education</div>
        <div className="content">
          <div className="content-title">University of Colorado Boulder</div>
          <div className="content-sub">M.S. in Electrical Engineering</div>
          <div className="content-sub">Jan 2020 - Jun 2021</div>
        </div>
        <div className="content">
          <div className="content-title">Cornell University</div>
          <div className="content-sub">B.S. in Chemical Engineering</div>
          <div className="content-sub">Aug 2015 - May 2019</div>
        </div>
      </div>

      <div className="app-section" id="experience">
        <div className="header">Experience</div>
        <div className="content">
          <div className="content-title">Intel Corporation</div>
          <div className="content-sub">Wafer Sort Process Engineer</div>
          <div className="content-sub">Jul 2019 - Present</div>
        </div>
        <div className="content">
          <div className="content-title">The Hershey Company</div>
          <div className="content-sub">Research and Development Intern</div>
          <div className="content-sub">May 2018 - Aug 2018</div>
        </div>
        <div className="content">
          <div className="content-title">US Department of Agriculture - Agricultural Research Service</div>
          <div className="content-sub">Physical Science Technician Intern</div>
          <div className="content-sub">Jun 2017 - Aug 2017</div>
        </div>
      </div>

      <div className="app-section" id="skills">
        <div className="header">Skills</div>
        <div className="content">
          <div className="content-title">Programming</div>
          <div className="content-sub">C#</div>
          <div className="content-sub">CSS</div>
          <div className="content-sub">HTML</div>
          <div className="content-sub">JavaScript</div>
          <div className="content-sub">Python</div>
          <div className="content-sub">React</div>
          <div className="content-sub">VBScript</div>
          <div className="content-sub">Windows Batch Scripting</div>
        </div>
        <div className="content">
          <div className="content-title">Hardware</div>
          <div className="content-sub">Verilog</div>
          <div className="content-sub">VHDL</div>
        </div>
        <div className="content">
          <div className="content-title">Data Analysis</div>
          <div className="content-sub">JMP/JSL</div>
          <div className="content-sub">Matlab</div>
          <div className="content-sub">SQLPathFinder</div>
          <div className="content-sub">Wolfram Mathematica</div>
        </div>
        <div className="content">
          <div className="content-title">Design</div>
          <div className="content-sub">AutoCAD (2D)</div>
          <div className="content-sub">SketchUp (3D)</div>
        </div>
      </div>

      <div className="app-section" id="projects">
        <div className="header">Projects</div>
      </div>
    </div>
  );
}

export default App;
