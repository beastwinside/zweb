// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
import Footer from './footer.js'
import logo from '../img/logo.png';

  import topshow from '../img/topshow.png'
import jjcj1 from '../img/jjcj1.jpg';
import jjcj2 from '../img/jjcj2.jpg';
import jjcj3 from '../img/jjcj3.jpg';
import jjcj4 from '../img/jjcj4.jpg';
import jjcj5 from '../img/jjcj5.jpg';
import jjcj6 from '../img/jjcj6.jpg';

import quality from '../img/quality.png'


import vtb from '../img/vt23b.png'
import vtl from '../img/vt23l.png'

import jstz1 from '../img/jstz1.jpg'
import jstz2 from '../img/jstz2.jpg'
import jstz3 from '../img/jstz3.jpg'
import jstz4 from '../img/jstz4.jpg'


var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Jstz extends Component{

  constructor(props){
    super(props);
    this.state={


    };

    this.imgmousehover=this.imgmousehover.bind(this);
    this.imgmouseleave=this.imgmouseleave.bind(this);

  }

  imgmousehover(e){
    e.target.style.width='110%';
   
  }

  imgmouseleave(e){
   e.target.style.width='100%';
 }

 componentDidMount(){


scrollTo(0,0)

 }


 render(){


  return(
    <div  className={styles.animated+' '+styles.slideInUp}>

        <div style={{width:'100%',height:'360px',position:'relative',top:'110px'}}>
    <div style={{width:'40%',height:'450px',textIndent:'2em',color:'black',
    position:'absolute',right:'5%',paddingTop:'80px',textAlign:'left',
    fontSize: '60px'}}> 
   项目研发
    </div>
    <div style={{width:'50%',height:"330px",borderRadius:'5px ',overflow:'hidden',position:'absolute',left:'5%',top:'0'}}> 
    <img src={topshow}/>
    </div>
    </div>




    


    <Divider style={{color:"black",fontSize:"20PX"}}>技术图纸</Divider>
    <div style={{fontSize:'23PX',width:'100%',height:'50px',textAlign:'center',color:'black'}}>
    研发队伍经验经验丰富，可基于二维图纸、三维模型设计产品和编制加工工艺，通过MAGMA软件进行模流和温度场分析改善。
    </div>

    <div style={{width:'1200px',height:'800px',position:'relative',left:'0',right:"0",margin:'auto',backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap'}}>

    <div style={{width:'40%',height:"40%",backgroundColor:"",position:'r'}}><img style={{width:'80%',position:'relative'}} src={jstz1}/> <div style={{fontSize:'30PX',color:'BLACK',fontWeight:'bolder'}}>技术图纸1</div></div>
     <div style={{width:'40%',height:"40%",backgroundColor:"",position:'r'}}><img style={{width:'80%',position:'relative'}} src={jstz2}/> <div style={{fontSize:'30PX',color:'BLACK',fontWeight:'bolder'}}>技术图纸2</div></div>
      <div style={{width:'40%',height:"40%",backgroundColor:"",position:'r'}}><img style={{width:'80%',position:'relative'}} src={jstz3}/>  <div style={{fontSize:'30PX',color:'BLACK',fontWeight:'bolder'}}>技术图纸3</div></div>
       <div style={{width:'40%',height:"40%",backgroundColor:"",position:'r'}}><img style={{width:'80%',position:'relative'}} src={jstz4}/> <div style={{fontSize:'30PX',color:'BLACK',fontWeight:'bolder'}}>技术图纸4</div></div>




    </div>


   
    
    


<Footer/>

    </div>

    );
}


}

export default Jstz




