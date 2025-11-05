import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhyKiaq from './pages/WhyKiaq'
import UseCases from './pages/UseCases'
import StartupScaling from './pages/StartupScaling'
import EnterpriseProjects from './pages/EnterpriseProjects'
import DigitalTransformation from './pages/DigitalTransformation'
import Solutions from './pages/Solutions'
import DedicatedTeams from './pages/DedicatedTeams'
import StaffAugmentation from './pages/StaffAugmentation'
import ProjectBased from './pages/ProjectBased'
import Platform from './pages/Platform'
import TalentMatching from './pages/TalentMatching'
import ProjectManagement from './pages/ProjectManagement'
import CollaborationTools from './pages/CollaborationTools'
import Resources from './pages/Resources'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Whitepapers from './pages/Whitepapers'
import Talent from './pages/Talent'
import Apply from './pages/Apply'
import TalentSuccess from './pages/TalentSuccess'
import SkillDevelopment from './pages/SkillDevelopment'
import About from './pages/About'
import Mission from './pages/Mission'
import Team from './pages/Team'
import Careers from './pages/Careers'
import CustomerStories from './pages/CustomerStories'
import RequestConsultation from './pages/RequestConsultation'
import SignIn from './pages/SignIn'
import GetStarted from './pages/GetStarted'
import Insights from './pages/Insights'
import TalentCommunity from './pages/TalentCommunity'
import UntappedMarkets from './pages/UntappedMarkets'
import CloudDevops from './pages/CloudDevops'
import AdaptiveHiring from './pages/AdaptiveHiring'
import HowItWorks from './pages/HowItWorks'
import ManageRemoteTeams from './pages/ManageRemoteTeams'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-kiaq" element={<WhyKiaq />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/startup-scaling" element={<StartupScaling />} />
          <Route path="/enterprise-projects" element={<EnterpriseProjects />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/project-based" element={<ProjectBased />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/talent-matching" element={<TalentMatching />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/collaboration-tools" element={<CollaborationTools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/talent-success" element={<TalentSuccess />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/talent-community" element={<TalentCommunity />} />
          <Route path="/untapped-markets" element={<UntappedMarkets />} />
          <Route path="/cloud-devops" element={<CloudDevops />} />
          <Route path="/adaptive-hiring" element={<AdaptiveHiring />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/manage-remote-teams" element={<ManageRemoteTeams />} />
          <Route path="/request-consultation" element={<RequestConsultation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
