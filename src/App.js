import React from 'react'
import HomeContainer from './Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer';
import './App.css';

function App(){
  return (
    <div className="App-header">
       <HeaderContainer />
     <HomeContainer />
    
    </div>
  );
}
export default App;

