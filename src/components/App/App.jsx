import CustomWidget from '../CustomWidget/CustomWidget';
import React from 'react';
import classes from './App.module.css';

const App = () => {
   return (
      <div className={classes.wrapper}>
         <CustomWidget />
      </div>
   );
};

export default App;
