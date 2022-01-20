import React, {useState, useEffect} from 'react';
import './LoadingHOC.css';
import Oval from './oval.svg';

//Исходный компонент с работающим Loader

// const LoaderHOC = (WrappedComponent) => {
//   return class WithLoadingComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         show: false,
//       };
//     }

//     componentDidMount() {
//       this.timeout = setTimeout(() => this.setState({ show: true}), 1000)
//     }

//     commponentDidUpdate() {
//       clearTimeout(this.interval)
//     }

//     render() {
//       return this.state.show 
//       ? <WrappedComponent {...this.props}/> 
//       : <div className="loading">Loading...
//           <img src={Oval} alt='Loader'/>
//         </div>
//     }
//   }
// }


//Компонент который не заработал

// const WithLoadingComponent = (WrappedComponent) => {
  
//   let [show, setShow] = useState(false);
//   const {props} = props;

//   useEffect(() => {
//     setInterval(() => setShow(show = true), 1000)
//   })

//   if (show) {
//     return <WrappedComponent {...props}/>
//   } else {
//     <div className="loading">Loading...
//       <img src={Oval} alt='Loader'/>
//     </div>
//   }
  // return(
  //   show === 2 ? <WrappedComponent {...props}/> 
  //   : <div className="loading">Loading...
  //     <img src={Oval} alt='Loader'/>
  //     </div>
  // ) 
  
// }



//Компонент который заработал, но без Loader

const WithLoadingComponent = (WrappedComponent) => props => {

  return <WrappedComponent {...props}/>  

}

const LoaderHOC = (WithLoadingComponent);


export default LoaderHOC;
