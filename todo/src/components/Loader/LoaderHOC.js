import React, {useState} from 'react';
import './LoadingHOC.css';
import Oval from './oval.svg';

const LoaderHOC = (WrappedComponent) => {
  return class WithLoadingComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
    }

    componentDidMount() {
      this.timeout = setTimeout(() => this.setState({ show: true}), 1000)
    }

    commponentDidUpdate() {
      clearTimeout(this.interval)
    }

    render() {
      return this.state.show 
      ? <WrappedComponent {...this.props}/> 
      : <div className="loading">Loading...
          <img src={Oval} alt='Loader'/>
        </div>
    }
  }
}





// const WithLoadingComponent = (WrappedComponent) => {
//   const [show, setShow] = useState('false');
//   const { ...props } = props;
//   return (
//     show 
//       ? <WrappedComponent {...props}/> 
//       : <div className="loading">Loading...
//           <img src={Oval} alt='Loader'/>
//         </div>
//   )
// }
   

// const LoaderHOC = WithLoadingComponent(WrappedComponent);

export default LoaderHOC;
