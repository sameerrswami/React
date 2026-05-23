import React from 'react';
import User from './User';
const Welcome = () => {
const data={"name":"Sameer Swami"};
    return (
    <div>
        <h1>
        <User data={data}/>
        </h1>    
    </div>
  );
};

export default Welcome;