import React from 'react';

const WithLoadingComponent = (WrappedComponent) => props => {

  return <WrappedComponent {...props}/>  

}

const HOC = (WithLoadingComponent);

export default HOC;
