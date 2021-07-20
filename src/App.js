import Achivements from './Components/Achivements/Achivements';
import Languages from './Components/Languages/Languages';
import ContactInfo from './Components/Contact/ContactInfo';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import PersonalProjects from './Components/PersonalProjects/PersonalProjects';
import Skills from './Components/Skills/Skills';
import WorkXp from './Components/WorkXp/WorkXp';
import Certificates from './Components/Certificates/Certificates';
import Intrusts from './Components/Intrusts/Intrusts';

function App() {
  return (
    <div className="app">
      <div className="body">
        <Header/>
        <ContactInfo/>
        <div className="row body-row">
          <div className="body-col">
            <div className="sec">
              <WorkXp/>
            </div>
            <div className="sec">
              <PersonalProjects/>
            </div>
            <div className="sec">
              <Education/>
            </div>
          </div>
          <div className="body-col">
            <div className="sec">
              <Skills/>
            </div>
            <div className="sec">
              <Achivements/>
            </div>
            <div className="sec">
              <Certificates/>
            </div>
            <div className="sec">
              <Languages/>
            </div>
            <div className="sec">
              <Intrusts/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
