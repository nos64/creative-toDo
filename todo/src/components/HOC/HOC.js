import React, {useEffect, useState} from 'react';
import Loader from '../Loader/Loader';

const WithLoadingComponent = (WrappedComponent) => {

  const WithLoaderComponent = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1000)
    }, []);

    return (
      isLoading ? <Loader/> : 
    <WrappedComponent {...props} />
    )

  }

  return WithLoaderComponent;
}

export default WithLoadingComponent;


