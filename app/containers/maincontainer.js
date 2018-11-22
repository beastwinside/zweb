import React,{Component} from 'react'
import styles from '../styles/maincontainer.css';//导入
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import Mainpage from './mainpage.js'



class Maincontainer  extends Component{
	render(){
		return(

			<div style={{position:'absolute',Left:'0',Right:'0',margin:'auto',width:'100%',height:'100%',Width:"1300px",fontFamily:"KaiTi"}}>
			
			<HashRouter history={hashHistory}>

			<div>
		
			<Route  exact path="/" component={Mainpage} />
	

			</div>
			</HashRouter>

			</div>
			);
	}

}

export default Maincontainer