// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';


var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Mainpage extends Component{

  constructor(props){
    super(props);
    this.state={
    };


}



componentDidMount(){

    scrollTo(0,0)


}

render(){


  return(
    <div  style={{width:'100%',height:"100%",position:"absolute",backgroundColor:"#FAFFBF"}}>



    <div id="top" style={{width:"100%",backgroundColor:"#6DBB44",height:"100px"}}> 
    <div  id="top_top"  style={{width:"100%",backgroundColor:"#43A445",height:"50px"}}> 
    </div>

    <div id="top_logo"></div>


    </div>

    






    </div>

    );
}


}

export default Mainpage



