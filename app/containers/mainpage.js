// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';

import lb1 from '../img/lb1.png'
import lb2 from '../img/lb2.png'
import lb3 from '../img/lb3.png'
import lb4 from '../img/lb4.png'
import lb5 from '../img/lb5.png'
import m1 from '../img/m1.jpg'
import logo from '../img/logo.png'

import cp1 from '../img/cp1.jpg'
import cp2 from '../img/cp2.jpg'
import cp3 from '../img/cp3.jpg'
import cp4 from '../img/cp4.jpg'
import cp5 from '../img/cp5.jpg'
import cp6 from '../img/cp6.jpg'



var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Mainpage extends Component{

  constructor(props){
    super(props);
    this.state={
      visible: false
    };
    this.showDrawer=this.showDrawer.bind(this);
    this.onClose=this.onClose.bind(this);
  }


  showDrawer(){
    this.refs.showtest.style.height="50px"
  };

  onClose(){
    this.setState({
      visible: false,
    });
  };



  componentDidMount(){

    scrollTo(0,0)


  }

  render(){


    return(
      <div  style={{width:'100%',height:"100%",position:"absolute",backgroundColor:"#FAFFBF"}}>



      <div id="top" style={{width:"100%",backgroundColor:"#6DBB44",height:"50px",position:'relative'}}> 

      <div  id="top_top"  style={{width:"100%",backgroundColor:"#43A445",height:"50px",position:'absolute'}}> 
      <div id="top_menu" style={{height:'100%',width:"68%",position:'absolute',right:'0',zIndex:'9',top:"0",left:'0',margin:'auto',
      display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{padding:'10px',width:"14%",height:"100%",borderRightStyle:'solid',borderWidth:'3px',borderColor:"white",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}} onClick={this.showDrawer}>首页 </div>
      <div style={{padding:'10px',width:"14%",height:"100%",borderRightStyle:'solid',borderWidth:'3px',borderColor:"white",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}}>关于龙源 </div>
      <div style={{padding:'10px',width:"14%",height:"100%",borderRightStyle:'solid',borderWidth:'3px',borderColor:"white",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}}>户外产品 </div>
      <div style={{padding:'10px',width:"14%",height:"100%",borderRightStyle:'solid',borderWidth:'3px',borderColor:"white",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}}>电源系列 </div>
      <div style={{padding:'10px',width:"14%",height:"100%",borderRightStyle:'solid',borderWidth:'3px',borderColor:"white",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}}>下载中心 </div>
      <div style={{padding:'10px',width:"14%",height:"100%",borderRightStyle:'solid',borderWidth:'3px',borderColor:"white",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}}>在线留言 </div>
      <div style={{padding:'10px',width:"14%",height:"100%",
      fontSize:'16px',textAlign:'center',color:"white",fontFamily:'Arial'}}>联系我们 </div>
      

      </div>

      <div style={{width:'14%',position:'absolute',height:'100%',top:'0',right:'0'}}>
      <div style={{position:'absolute',height:'100%',width:"50%",left:'0',textAlign:'center',fontSize:'22PX',color:"white",padding:'5px'}}> <Icon type="search"  /></div>
      <div style={{position:'absolute',height:'100%',width:"50%",right:'0',textAlign:'center',fontSize:'22PX',color:'white',padding:'5px'}}>EN</div>
      </div>

      </div>

      <div id="top_logo" style={{height:'100px',width:'100px',position:'absolute',right:'90%',top:'0',backgroundColor:'white',fontSize:'30px',zIndex:'3'}}>   
      <img style={{width:'100%',height:"100%"}} src={logo}/>
      </div>





      </div>

      <div  ref="showtest" id="top_bottom" style={{width:"100%",backgroundColor:"#6DBB44",height:"50px",position:'relative',display:'none',top:'50px',backgroundColor:'#ABBB44' }}> 

      123213
      </div>




















      <div id="lunbotu" style={{height:'70%',width:'100%',backgroundColor:'#F6FD93',position:'relative'}}>
      <div style={{height:'200px',width:'50px',backgroundColor:'#1C1C1C',position:'fixed',top:"10%",right:'5%',zIndex:'9',color:'white',fontSize:'20PX',opacity:'0.3'}}> 四格图标</div>

      <Carousel autoplay >
      <div style={{width:'100%',height:'100%',position:'absolute'}}><img style={{width:'100%',height:'100%'}} src={lb1}/></div>
      <div style={{width:'100%',height:'100%',position:'absolute'}}><img style={{width:'100%',height:'100%'}} src={lb2}/></div>
      <div style={{width:'100%',height:'100%',position:'absolute'}}><img style={{width:'100%',height:'100%'}} src={lb3}/></div>
      <div style={{width:'100%',height:'100%',position:'absolute'}}><img style={{width:'100%',height:'100%'}} src={lb4}/></div>
      <div style={{width:'100%',height:'100%',position:'absolute'}}><img style={{width:'100%',height:'100%'}} src={lb5}/></div>

      </Carousel>

      </div>


















      <div style={{height:'110%',width:'100%',backgroundColor:'#eeeeee',position:'relative'}}>

      <div id="innercon_1" style={{height:'90%',width:'90%',position:'absolute',left:"0",right:'0',top:'0',bottom:'0',margin:'auto',backgroundColor:'white'}}>
      <div style={{width:'100%',height:'10%',position:'relative',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <div style={{height:'15%',width:'30%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      <div style={{height:'100%',width:'14%',position:'relative',textAlign:'center',fontSize:'30px',padding:'5px',color:'#0f7535',fontWeight:'bolder'}}>About us </div>
      <div style={{height:'15%',width:'30%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      </div>

      <div style={{width:'92%',height:"80%",backgroundColor:'white',position:'relative',left:'0',right:"0",margin:'auto',
      display:'flex',alignItems:'center',justifyContent:'space-around'}}>



      <div id="con_1_right" style={{width:'43%',height:'100%',backgroundColor:'white'}}> 
      <div style={{width:'100%',height:'53%',position:'relative',backgroundColor:"white"}}> 
      <img style={{width:'100%',height:'100%',position:'absolute',left:'0',right:"0",top:"0",bottom:'0',margin:'auto'}} src={m1}  />

      </div>
      <div style={{width:'100%',height:'42%',position:'relative',backgroundColor:"white",display:'flex',marginTop:'5%',justifyContent:'space-between'}}>
      <div style={{width:'48%',height:'100%',backgroundColor:"#08C541",fontSize:'45px',
      textAlign:'center',padding:'40px',color:"#FFFEFE"}}>图片1</div>
      <div style={{width:'48%',height:'100%',backgroundColor:"#E78D22",fontSize:'45px',
      textAlign:'center',padding:'40px',color:"#FFFEFE"}}>图片2</div>

      </div>

      </div>





      <div id="con_1_left" style={{width:'55%',height:'100%',borderStyle:'solid',borderWidth:'2px',fontSize:'70px',borderColor:'#424141',
      textAlign:'center',padding:'120px',color:"#000000"}}>文本描述 </div>

      </div>


      </div>

      </div>






















      <div style={{height:'110%',width:'100%',backgroundColor:'#eeeeee',position:'relative'}}>

      <div id="innercon_1" style={{height:'90%',width:'90%',position:'absolute',left:"0",right:'0',top:'0',bottom:'0',margin:'auto',backgroundColor:'white'}}>
      <div style={{width:'100%',height:'10%',position:'relative',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <div style={{height:'15%',width:'25%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      <div style={{height:'100%',width:'25%',position:'relative',textAlign:'center',fontSize:'30px',padding:'5px',color:'#0f7535',fontWeight:'bolder'}}>Product Display </div>
      <div style={{height:'15%',width:'25%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      </div>

      <div style={{width:'92%',height:"80%",backgroundColor:'white',position:'relative',left:'0',right:"0",margin:'auto',
      display:'flex',alignItems:'center',justifyContent:'space-around'}}>






      <div id="con_1_right" style={{width:'27%',height:'94%',backgroundColor:'#DB2929'}}> 
      <div style={{width:'100%',height:"10%",position:'relative',backgroundColor:"#009b4d",textAlign:'center',fontSize:'30px',color:'white'}}>All Serials</div>
    

      </div>





      <div id="con_1_left" style={{width:'73%',height:'100%',borderStyle:'solid',borderWidth:'2px',fontSize:'70px',borderColor:'#FFFFFF',
      textAlign:'center',color:"#000000",display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
      <div style={{width:'32%',height:'45%',backgroundColor:'#FF4300',borderStyle:'solid',borderWidth:'2PX',borderColor:'#595959'}}>
      <img style={{ width:'100%',height:'85%',}} src={cp1}/>
      <div style={{width:'100%',position:'relative',height:"15%",backgroundColor:'#124704',color:"white",fontSize:'24px',textAlign:'center'}}>serial1</div>
      </div>
      <div style={{width:'32%',height:'45%',backgroundColor:'#FF4300',borderStyle:'solid',borderWidth:'2PX',borderColor:'#595959'}}>
      <img style={{ width:'100%',height:'85%',}} src={cp2}/>
      <div style={{width:'100%',position:'relative',height:"15%",backgroundColor:'#124704',color:"white",fontSize:'24px',textAlign:'center'}}>serial1</div>
      </div>
      <div style={{width:'32%',height:'45%',backgroundColor:'#FF4300',borderStyle:'solid',borderWidth:'2PX',borderColor:'#595959'}}>
      <img style={{ width:'100%',height:'85%',}} src={cp3}/>
      <div style={{width:'100%',position:'relative',height:"15%",backgroundColor:'#124704',color:"white",fontSize:'24px',textAlign:'center'}}>serial1</div>
      </div>
      <div style={{width:'32%',height:'45%',backgroundColor:'#FF4300',borderStyle:'solid',borderWidth:'2PX',borderColor:'#595959'}}>
      <img style={{ width:'100%',height:'85%',}} src={cp4}/>
      <div style={{width:'100%',position:'relative',height:"15%",backgroundColor:'#124704',color:"white",fontSize:'24px',textAlign:'center'}}>serial1</div>
      </div>
      <div style={{width:'32%',height:'45%',backgroundColor:'#FF4300',borderStyle:'solid',borderWidth:'2PX',borderColor:'#595959'}}>
      <img style={{ width:'100%',height:'85%',}} src={cp5}/>
      <div style={{width:'100%',position:'relative',height:"15%",backgroundColor:'#124704',color:"white",fontSize:'24px',textAlign:'center'}}>serial1</div>
      </div>
      <div style={{width:'32%',height:'45%',backgroundColor:'#FF4300',borderStyle:'solid',borderWidth:'2PX',borderColor:'#595959'}}>
      <img style={{ width:'100%',height:'85%',}} src={cp6}/>
      <div style={{width:'100%',position:'relative',height:"15%",backgroundColor:'#124704',color:"white",fontSize:'24px',textAlign:'center'}}>serial1</div>
      </div>


       </div>

      </div>


      </div>

      </div>


























      <div style={{height:'110%',width:'100%',backgroundColor:'#EEEEEE',position:'relative'}}>

      <div id="innercon_1" style={{height:'90%',width:'90%',position:'absolute',left:"0",right:'0',top:'0',bottom:'0',margin:'auto',backgroundColor:'white'}}>
      <div style={{width:'40%',height:'10%',left:'5%',position:'absolute',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <div style={{height:'15%',width:'20%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      <div style={{height:'100%',width:'50%',position:'relative',textAlign:'center',fontSize:'30px',padding:'5px',color:'#0f7535',fontWeight:'bolder'}}>News Center </div>
      <div style={{height:'15%',width:'20%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      </div>

      <div style={{width:'45%',height:'10%',right:'7%',position:'absolute',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <div style={{height:'15%',width:'20%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      <div style={{height:'100%',width:'50%',position:'relative',textAlign:'center',fontSize:'30px',padding:'5px',color:'#0f7535',fontWeight:'bolder'}}>Contacts Us </div>
      <div style={{height:'15%',width:'20%',position:'relative',backgroundColor:'#0f7535'}}> </div>
      </div>



      <div style={{width:'92%',height:"80%",backgroundColor:'white',position:'absolute',left:'0',right:"0",margin:'auto',top:"10%",
      display:'flex',alignItems:'center',justifyContent:'space-around'}}>



      <div id="con_1_right" style={{width:'43%',height:'100%',backgroundColor:'#169D55',fontSize:'30px', textAlign:'center',padding:'90px',color:"#000000"}}> 
    LINE 1 CONTENT<br/>
    LINE 1 CONTENT<br/>
    LINE 1 CONTENT<br/>
    LINE 1 CONTENT<br/>
    LINE 1 CONTENT<br/>


      </div>





      <div id="con_1_left" style={{width:'55%',height:'100%',backgroundColor:"white",borderStyle:'solid',borderWidth:'2px',fontSize:'23px',borderColor:'#424141',
    color:"#1D5A09",padding:'100px'}}>


    <br/>
       Contact:  Carloline Zhou
        <br/>
        Phone:13423423523(China)
        18421415191(English)
         <br/>
         Tel:0574-884114567
         <br/>
         Email:sales.longyuanantd.com
         <br/>
         Add:no .6.643w 

    </div>

      </div>
     

      </div>

      </div>



    <footer style={{width:'100%',height:"30%",backgroundColor:'#72B740',position:'relative',color:"white",textAlign:'center'}}>



<br/><br/><br/><br/>
Copyright (C) 2016-2017 Ningbo Longyuan Lighting Electrical Appliances Co., Ltd. ICP:08118233 Site Map
<br/><br/>
Address: 617 Zip Code of East Qianhu Section of Yinxian Avenue, Ningbo City, China: 315121 Tel: 0574-88414567 Fax: 0574-82817523

    </footer>


      </div>

      );
}


}

export default Mainpage




  

