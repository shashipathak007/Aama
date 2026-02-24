import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import TodayPage from "./components/TodayPage";
import TrackerPage from "./components/TrackerPage";
import HealthPage from "./components/HealthPage";
import MyBabyPage from "./components/MyBabyPage";
import SupportPage from "./components/SupportPage";
import CommunityPage from "./components/CommunityPage";
import LearnPage from "./components/LearnPage";
import PartnerPage from "./components/PartnerPage";
import ResourcesPage from "./components/ResourcesPage";
import PrenatalTestsPage from "./components/PrenatalTestsPage";

const WEEK = 10;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today"     element={<TodayPage week={WEEK} />} />
          <Route path="/tracker"   element={<TrackerPage week={WEEK} />} />
          <Route path="/health"    element={<HealthPage />} />
          <Route path="/baby"      element={<MyBabyPage />} />
          <Route path="/support"   element={<SupportPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/learn"     element={<LearnPage />} />
          <Route path="/partner"   element={<PartnerPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/tests"     element={<PrenatalTestsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
