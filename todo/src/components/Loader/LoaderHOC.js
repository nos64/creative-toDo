import React from 'react';
import './LoadingHOC.css';
import Oval from './oval.svg';

const LoaderHOC = (WrappedComponent) => {
  return class WihLoadingComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
    }

    componentDidMount() {
      this.timeout = setTimeout(() => this.setState({ show: true}), 3000)
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

export default LoaderHOC;
