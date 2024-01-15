import { FeatureCountry, FeatureHome } from '@jeremy-nx-monorepo/countries';
import { DarkModeProvider } from '@jeremy-nx-monorepo/shared/ui-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<FeatureHome />} />
          <Route path="/country" element={<FeatureCountry />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
