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
import yzcj from '../img/yzcj.jpg';
import quality from '../img/quality.png'


import vtb from '../img/vt23b.png'
import vtl from '../img/vt23l.png'



var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Device extends Component{

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
   工艺设备模块
    </div>
    <div style={{width:'50%',height:"330px",borderRadius:'5px ',overflow:'hidden',position:'absolute',left:'5%',top:'0'}}> 
    <img src={topshow}/>
    </div>
    </div>

  <Divider style={{color:"black",fontSize:"20PX"}}>机加车间</Divider>
     <div style={{width:'1300px',height:'60px',textIndent:'2em',color:'black',
    position:'relative',left:'0px',right:'0px',margin:'auto',paddingTop:'10px',textAlign:'center',
    fontSize: '22px'}}>凯启的机加车间分为打码区，机加区，清洗区，试漏区，spc全检区，包装区以及浸渗区</div>
    <div style={{width:'1200px',left:"0",right:'0',margin:'auto',height:'600px',display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap'}}>
    <div style={{width:'28%',height:'48%'}}><img style={{width:"100%",transition: 'width 0.5s'}} src={jjcj1} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave}/></div>
    <div style={{width:'28%',height:'48%'}}><img style={{width:"100%",transition: 'width 0.5s'}} src={jjcj2} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave}/></div>
    <div style={{width:'28%',height:'48%'}}><img style={{width:"100%",transition: 'width 0.5s'}} src={jjcj3} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave}/></div>
    <div style={{width:'28%',height:'48%'}}><img style={{width:"100%",transition: 'width 0.5s'}} src={jjcj4} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave}/></div>
    <div style={{width:'28%',height:'48%'}}><img style={{width:"100%",transition: 'width 0.5s'}} src={jjcj5} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave}/></div>
    <div style={{width:'28%',height:'48%'}}><img style={{width:"100%",transition: 'width 0.5s'}} src={jjcj6} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave}/></div>
    </div>

    
    <Divider style={{color:"black",fontSize:"20PX"}}>压铸车间</Divider>
    <div style={{width:'100%',left:"0",right:'0',margin:'auto',height:'600px',position:'relative'}}>
     <div style={{width:'100%',height:'60px',textIndent:'2em',color:'black',
    position:'relative',left:'0px',right:'0px',margin:'auto',paddingTop:'10px',textAlign:'center',
    fontSize: '22px'}}>凯启的压铸车间分为熔炼岛，压铸岛以及委外去毛刺区以及打码区</div>
    <div style={{width:'1200px',position:'relative',left:'0px',right:'0px',margin:'auto'}}>
    <img src={yzcj} style={{width:'1200px'}} />
    </div>
    </div>

  


    


   <Footer/>
    




    </div>

    );
}


}

export default Device




