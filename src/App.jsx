import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/layouts/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { YourFreeReport } from './pages/YourFreeReport.jsx';
import { BookYourConsultation } from './pages/BookYourConsultation.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/your-free-report" element={<YourFreeReport />} />
        <Route path="/book-your-consultation" element={<BookYourConsultation />} />
      </Route>
    </Routes>
  );
}

export default App;
