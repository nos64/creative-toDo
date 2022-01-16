import React from 'react';
import './LoadingHOC.css';
import './oval.svg';

const LoaderHOC = (WrappedComponent) => {
  return class WihLoadingComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
    }

    componentDidMount() {
      setTimeout(() => this.setState({ show: true}), 3000)
    }

    render() {
      return this.state.show 
      ? <WrappedComponent {...this.props}/> 
      : <div className="loading">Loading...
          <svg width="100" height="100" viewBox="0 0 38 38" 
          xmlns="http://www.w3.org/2000/svg" stroke="rgb(223, 103, 103)">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
                </path>
              </g>
            </g>
          </svg>
        </div>
    }
  }
}

export default LoaderHOC;
