import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './assets/js/ScrollTop'; // ScrollToTop import 추가
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AccessibilityPage from './pages/AccessibilityPage';
import BasicPage from './pages/BasicPage';
import BasicGuide from './pages/BasicPage/Guide/GuidePage';
import ConventionPage from './pages/ConventionPage';
import LibraryPage from './pages/LibraryPage';
import RuleStandard from './pages/ConventionPage/RuleStandard/RuleStandard';
import RuleCode from './pages/ConventionPage/RuleCode/RuleCode';
import RuleName from './pages/ConventionPage/RuleName/RuleName';
import CheckList from './pages/AccessibilityPage/CheckList/CheckList';
import WaiAria from './pages/AccessibilityPage/WaiAria/WaiAria';
import Overview from './pages/AccessibilityPage/Overview/Overview';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop /> {/* ScrollToTop 컴포넌트 추가 */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="basic" element={<BasicPage />} />
          <Route path="basic/guide" element={<BasicGuide />} />
          <Route path="convention" element={<ConventionPage />} />
          <Route path="convention/rule-standard" element={<RuleStandard />} />
          <Route path="convention/rule-code" element={<RuleCode />} />
          <Route path="convention/rule-name" element={<RuleName />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="accessibility/overview" element={<Overview />} />
          <Route path="accessibility/wai-aria" element={<WaiAria />} />
          <Route path="accessibility/checklist" element={<CheckList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
