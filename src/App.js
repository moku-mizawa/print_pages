import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import English from './components/English';
import Math from './components/Math';
import PrintsMath from './components/PrintsMath';
import PrintsEnglish from './components/PrintsEnglish';
import Math1_01 from './pages/Math1_01';
import Math1_02 from './pages/Math1_02';
import Math1_03 from './pages/Math1_03';
import MathA_01 from './pages/MathA_01';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/english" element={<English />} />
      <Route path="/math" element={<Math />} />
      <Route path="/prints_math" element={<PrintsMath />} />
      <Route path="/prints_english" element={<PrintsEnglish />} />
      <Route path="/page_math/math1_01" element={<Math1_01 />} />
      <Route path="/page_math/math1_02" element={<Math1_02 />} />
      <Route path="/page_math/math1_03" element={<Math1_03 />} />
      <Route path="/page_math/matha_01" element={<MathA_01 />} />
    </Routes>
  );
}

export default App;