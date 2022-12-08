import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Flex } from '@aws-amplify/ui-react';
import { PostitemCollection } from './ui-components';

Amplify.configure(awsExports);

function App() {
  return (
    <div className='App'>
      <Flex direction={"column"} alignItems={"center"}>
        <PostitemCollection />
      </Flex>
    </div>
  );
}

export default App;