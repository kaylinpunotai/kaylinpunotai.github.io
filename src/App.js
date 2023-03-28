import './App.css';
import PhotoGallery from './PhotoGallery.js';
import HamburgerMenu from './HamburgerMenu.js';
import { IoMailSharp as EmailIcon, IoLogoLinkedin as LinkedInIcon, IoLogoGithub as GithubIcon} from 'react-icons/io5';

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

      <div id="resumeButton">
        <a id="resume" href="Files/Resume.pdf" target="_blank" rel="noreferrer" >View My Resume</a>
      </div>

      <div id="hamburgerMenu">
        <HamburgerMenu>
          <div 
            title="Email"
            link="mailto:kaylin.punotai@gmail.com"
          />
          <div 
            title="Github"
            link="https://github.com/kaylinpunotai"
          />
          <div 
            title="LinkedIn"
            link="https://www.linkedin.com/in/kaylin-punotai/"
          />
          <div 
            title="View My Resume"
            link="Files/Resume.pdf"
          />
        </HamburgerMenu>
      </div>

      <div id="contactBar">
        <a href="mailto:kaylin.punotai@gmail.com">
          <EmailIcon/>
        </a>
        <a href="https://github.com/kaylinpunotai" target="_blank" rel="noreferrer">
          <GithubIcon/>
        </a>
        <a href="https://www.linkedin.com/in/kaylin-punotai/" target="_blank" rel="noreferrer">
          <LinkedInIcon/>
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
          <div id="title-sub">Software Engineer in Chicago</div>
        </div>
      </div>
      
      <div className="app-section" id="about">
        <div className="header">About</div>
        <div className="content">
          <div className="content-title">
            Hi, I'm Kaylin! I'm a self-taught software engineer with experience in React, Ruby, 
            JavaScript, and C#, and familiarity with data science concepts including Python libraries
            such as pandas and sklearn.
          </div>
          <p></p>
          <div className="content-title">
            I am currently seeking opportunities to break into the programming field.
          </div>
        </div>
      </div>

      <div className="app-section" id="education">
        <div className="header">Education</div>
        <div className="content">
          <div className="content-title">University of Colorado Boulder</div>
          <div className="content-sub">M.S. in Electrical Engineering</div>
          <div className="content-date">Jan 2020 - Jun 2021</div>
        </div>
        <div className="content">
          <div className="content-title">Cornell University</div>
          <div className="content-sub">B.S. in Chemical Engineering</div>
          <div className="content-date">Aug 2015 - May 2019</div>
        </div>
      </div>

      <div className="app-section" id="experience">
        <div className="header">Experience</div>
        <div className="content">
          <div className="content-title">Jade Mechanical Services, LLC</div>
          <div className="content-sub">Vice President</div>
          <div className="content-date">Apr 2022 - Present</div>
        </div>
        <div className="content">
          <div className="content-title">Intel Corporation</div>
          <div className="content-sub">Wafer Sort Process Engineer</div>
          <div className="content-date">Jul 2019 - Mar 2022</div>
        </div>
        <div className="content">
          <div className="content-title">The Hershey Company</div>
          <div className="content-sub">Research and Development Intern</div>
          <div className="content-date">May 2018 - Aug 2018</div>
        </div>
        <div className="content">
          <div className="content-title">USDA - Agricultural Research Service</div>
          <div className="content-sub">Physical Science Technician Intern</div>
          <div className="content-date">Jun 2017 - Aug 2017</div>
        </div>
      </div>

      <div className="app-section" id="skills">
        <div className="header">Skills</div>
        <div className="skill-row">
          <div className="content">
            <div className="content-title">Programming</div>
            <div className="content-sub">C#</div>
            <div className="content-sub">CSS/HTML</div>
            <div className="content-sub">JavaScript</div>
            <div className="content-sub">Python</div>
            <div className="content-sub">React</div>
            <div className="content-sub">Ruby</div>
            <div className="content-sub">VBScript</div>
            <div className="content-sub">Windows Batch Scripting</div>
          </div>
          <div className="content">
            <div className="content-title">Data Analysis</div>
            <div className="content-sub">JMP/JSL</div>
            <div className="content-sub">Matlab</div>
            <div className="content-sub">Wolfram Mathematica</div>
          </div>
          <div className="content">
            <div className="content-title">Hardware</div>
            <div className="content-sub">Verilog</div>
            <div className="content-sub">VHDL</div>
          </div>
          <div className="content">
            <div className="content-title">Design</div>
            <div className="content-sub">AutoCAD (2D)</div>
            <div className="content-sub">SketchUp (3D)</div>
          </div>
        </div>
      </div>

      <div className="app-section" id="projects">
      <div className="header">Projects</div>

        <div className="proj" id="mareep">
          <div className="bg-block"></div>
          <PhotoGallery>
            <div 
              src="Images/mareep-oos.png"
              alt="mareep-oos"
            />
            <div 
              src="Images/mareep-email.png"
              alt="mareep-email"
            />
          </PhotoGallery>
          <div className="project-block">
            <div className="project-tags">
              <div className="tag">Python</div>
            </div>
            <div className="project-title">
              Mareep Hunting
            </div>
            <div className="project-desc">
              I automated an email alert that tells me when the jumbo Mareep plush is back in stock at
              the Pokemon Center website. I used SerpAPI to conduct Google Shopping searches and SMTP to
              send myself an email if the product is available. This program runs twice per day on my 
              Raspberry Pi.
            </div>
            <div className="project-links">
              <a className="github" href="https://github.com/kaylinpunotai/Mareep-Hunting" target="_blank" rel="noreferrer"><GithubIcon/></a>
            </div>
          </div>
        </div>

        <div className="proj" id="heart-disease">
          <div className="bg-block"></div>
          <PhotoGallery>
            <div 
              src="Images/hd-comparison.png"
              alt="heart-disease-comparison"
            />
          </PhotoGallery>
          <div className="project-block">
            <div className="project-tags">
              <div className="tag">Python</div>
            </div>
            <div className="project-title">
              Heart Disease Classification
            </div>
            <div className="project-desc">
              Practicing ML classification with heart disease data. I compare logistic regression, SVM,
              decision tree, random forest, naive bayesian models, and XGBoost then determine the most 
              reasonable model to predict heart disease in patients.
            </div>
            <div className="project-links">
              <a className="github" href="https://github.com/kaylinpunotai/Heart-Disease-Classification" target="_blank" rel="noreferrer"><GithubIcon/></a>
            </div>
          </div>
        </div>

        <div className="proj" id="queens-puzzle">
          <div className="bg-block"></div>
          <PhotoGallery>
            <div 
              src="Images/queens-puzzle.png"
              alt="queens-puzzle"
            />
          </PhotoGallery>
          <div className="project-block">
            <div className="project-tags">
              <div className="tag">React</div>
              <div className="tag">JavaScript</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
            </div>
            <div className="project-title">
              Queens Puzzle
            </div>
            <div className="project-desc">
              A re-creation of the "Eight Queens" puzzle with React. My first React project to
              get to know the framework. You can receive immediate feedback if any pieces are within
              attacking range based on the colors of the pieces.
            </div>
            <div className="project-links">
              <a className="button" href="https://kaylinpunotai.github.io/queens-puzzle/" target="_blank" rel="noreferrer">Play Game</a>
              <a className="github" href="https://github.com/kaylinpunotai/queens-puzzle" target="_blank" rel="noreferrer"><GithubIcon/></a>
            </div>
          </div>
        </div>

        <div className="proj" id="aws-project">
          <div className="bg-block"></div>
          <PhotoGallery>
            <div 
              src="Images/aws-dynamodb.png"
              alt="aws-dynamodb"
            />
            <div 
              src="Images/aws-lambda-test.png"
              alt="aws-lambda-test"
            />
          </PhotoGallery>
          <div className="project-block">
            <div className="project-tags">
              <div className="tag">Python</div>
              <div className="tag">AWS Lambda</div>
              <div className="tag">AWS SQS</div>
            </div>
            <div className="project-title">
              AWS Connection
            </div>
            <div className="project-desc">
              A school project to subscribe DynamoDB to a SQS to store incoming temperature and humidity readings. An HTML GUI 
              can then send a GET request to the API gateway to scan and retrieve entries from the DB to the client. Lambda rules
              are used to invoke entry creations, scans, and returns.
            </div>
            <div className="project-links">
              <a className="button" href="Files/aws-part2.pdf" target="_blank" rel="noreferrer">View Details</a>
              {/* <a className="github" href="https://github.com/kaylinpunotai/queens-puzzle" target="_blank" rel="noreferrer"><GithubIcon/></a> */}
            </div>
          </div>
        </div>

        <div className="proj" id="temp-gui-project">
          <div className="bg-block"></div>
          <PhotoGallery>
            <div 
              src="Images/temp-gui-pyqt.png"
              alt="pyqt"
            />
            <div 
              src="Images/temp-gui-html.png"
              alt="html"
            />
          </PhotoGallery>
          <div className="project-block">
            <div className="project-tags">
              <div className="tag">Python</div>
            </div>
            <div className="project-title">
              Sensor Reading GUIs
            </div>
            <div className="project-desc">
              A school project to design two GUIs (PyQT and HTML) that retrieves temperature and humidity sensor readings. 
              The Python script retrieves readings, stores data with timestamps, calculates entry statistics, converts 
              between Celsius and Fahrenheit, and alerts the user when readings exceed a user-defined alarm.
            </div>
            <div className="project-links">
              <a className="button" href="Files/temp-gui-part1.pdf" target="_blank" rel="noreferrer">View PyQt Details</a>
              <a className="button" href="Files/temp-gui-part2.pdf" target="_blank" rel="noreferrer">View HTML GUI Details</a>
              {/* <a className="github" href="https://github.com/kaylinpunotai/queens-puzzle" target="_blank" rel="noreferrer"><GithubIcon/></a> */}
            </div>
          </div>
        </div>

        <div className="proj" id="chessboard-3D">
          <div className="bg-block"></div>
          <PhotoGallery>
            <div 
              src="Images/3d-chessboard.png"
              alt="3d-chessboard"
            />
            <div 
              src="Images/3d-chessboard-sketches.png"
              alt="sketches"
            />
          </PhotoGallery>
          <div className="project-block">
            <div className="project-tags">
              <div className="tag">SketchUp</div>
            </div>
            <div className="project-title">
              3D Chessboard
            </div>
            <div className="project-desc">
              A chess set made and designed from scratch for a school project.
            </div>
            <div className="project-links">
              <a className="button" href="https://app.connect.trimble.com/tc/api/2.0/s/IKeDasEoZmn-H2hLjnssg3SGwSm-huiiB747tpXBnVCATn4Mfd2WVrTjIYe6MRM2" target="_blank" rel="noreferrer">View Model</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
