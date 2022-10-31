import * as React from 'react';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

import { Home } from './src/pages';

const App: React.FC = () => {
  return <Home />;
};

export default App;
