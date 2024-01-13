import { FeatureHome } from '@jeremy-nx-monorepo/countries';
import { DarkModeProvider } from '@jeremy-nx-monorepo/shared/ui-components';

export function App() {
  return (
    <DarkModeProvider>
      <FeatureHome />
    </DarkModeProvider>
  );
}

export default App;
