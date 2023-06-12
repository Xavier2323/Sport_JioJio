import React from 'react';
import { NativeBaseProvider } from "native-base";
import Navigation from './src/navigation';

//import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify, Auth } from 'aws-amplify';
import config from './src/aws-exports';

Auth.configure(config);

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
};

export default App;
