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
    <>
    <div className="app">
      <div className="body">
        <Header/>
        <ContactInfo/>
        <div className="body-row flexDirCol">

            <div className="sec">
              <WorkXp/>
              <PersonalProjects/>
              <Languages/>
            </div>

            <div className="sec">
              <Skills/>     
              <Education/>
              <Achivements/>
              <Certificates/>
              <Intrusts/>
            </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
