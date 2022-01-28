import React, {useEffect, useState} from 'react';
import Loader from '../Loader/Loader';

function WithLoadingComponent<WP> (WrappedComponent: React.ComponentType<WP>) {

  const WithLoaderComponent = (props: WP) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 300)
    }, []);

    return (
      isLoading ? <Loader/> : 
    <WrappedComponent {...props} />
    )

  }

  return WithLoaderComponent;
}

export default WithLoadingComponent;


