// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';

import logoyy from '../img/logoyy.png'

var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Top extends Component{

  constructor(props){
    super(props);
   

  
    this.enterproducation=this.enterproducation.bind(this);
    this.enterpage=this.enterpage.bind(this);
     this.enterdevice=this.enterdevice.bind(this);
     this.enterpartner=this.enterpartner.bind(this);
      this.entercontact=this.entercontact.bind(this);
       this.enternews=this.enternews.bind(this);
this.enterjstz=this.enterjstz.bind(this);
this.entertxrz=this.entertxrz.bind(this);

  }

   entertxrz(){
  this.props.history.push({pathname:'/txrz'});
 }


   enterjstz(){
  this.props.history.push({pathname:'/jstz'});
 }
 enternews(){
  this.props.history.push({pathname:'/news'});
 }
  entercontact(){
    this.props.history.push({pathname:'/contact'});
  }
  enterpartner(){
    this.props.history.push({pathname:'/partner'});
  }

  enterdevice(){
    this.props.history.push({pathname:'/device'});
  }

 enterproducation(){
  this.props.history.push({pathname:'/producation/cp1'});
 }

enterpage(){
this.props.history.push({pathname:'/'});
 }

componentDidMount(){


}


render(){
  var content = '<strong>content</strong>';
  return(
    <div style={{width:'90%',left:"0",right:'0',
    margin:'auto',position:'absolute',zIndex:'10',

    borderColor:'#565555',backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)'}}>


          <div  style={{height:'70px',Width:"1300px",zIndex:'100',fontSize:'30px',color:'white',textIndent:'10px'}}>
     <img src={logoyy} style={{height:'80%',left:'10px',top:'10px',zIndex:'100'}} />
    银亿股份凯启精密制造有限公司

    </div>

  
   
   
   

    <div style={{width:"10%",position:'absolute',right:'10px',height:"50%",top:"10px"}}>
        <Button type="primary">切换语言</Button>
    </div>


    <div style={{height:'40px',weight:'100%',backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)'}}>
    <Menu
    mode="horizontal"
    defaultSelectedKeys="gykq"
    style={{backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',color:'white'}}
    >

    <Menu.Item key="gykq" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
     <div style={{fontSize:'18px',fontWeight:"bolder",fontFamily:'Arail'}} onClick={this.enterpage}>
     <Icon type="appstore" />凯启门户
     </div>
    </Menu.Item>
         <Menu.Item key="xwzx">
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
         <div style={{fontSize:'18px',fontWeight:"bolder",fontFamily:'Arail'}} onClick={this.enternews} >   <Icon type="cloud"  />
         新闻中心</div>
 
    </Menu.Item>
    <Menu.Item key="gyjsb" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
     <div style={{fontSize:'18px',fontWeight:"bolder",fontFamily:'Arail'}} onClick={this.enterdevice}><Icon type="appstore" />
     工艺及设备</div>
    </Menu.Item>
    
    <Menu.Item key="cpzx" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
   <div style={{fontSize:'18px',fontWeight:"bolder",fontFamily:'Arail'}} onClick={this.enterproducation} ><Icon type="book"  />
    质量管控</div>
    </Menu.Item>

     <Menu.Item key="xmyf" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
    <div style={{fontSize:'18px',fontWeight:"bolder",fontFamily:'Arail'}}  onClick={this.enterjstz}><Icon type="lock"  /> 
          项目研发</div>
    </Menu.Item>








     <Menu.Item key="lxwm">
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
    <div  style={{fontSize:'18px',fontWeight:"bolder",fontFamily:'Arail'}} onClick={this.entercontact}>  <Icon type="heart"  /> 
    联系我们</div>
    </Menu.Item>

    </Menu>
    </div>

    </div>

    );
}


}

export default Top




