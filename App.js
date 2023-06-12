import React from 'react';
import { NativeBaseProvider } from "native-base";
import Navigation from './src/navigation';

// import { withAuthenticator } from 'aws-amplify-react-native';
// import { Amplify } from 'aws-amplify';
// import config from './src/aws-exports';

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
};

export default App;
