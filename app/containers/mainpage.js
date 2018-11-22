// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
import bg1 from '../img/bg1.jpg';
import bg2 from '../img/bg2.jpg';
import News from './news.js'

import cqzl from '../img/cqzl.jpg';
import jjcj1 from '../img/jjcj1.jpg';
import jjcj2 from '../img/jjcj2.jpg';
import jjcj3 from '../img/jjcj3.jpg';
import jjcj4 from '../img/jjcj4.jpg';
import jjcj5 from '../img/jjcj5.jpg';
import jjcj6 from '../img/jjcj6.jpg';
import yzcj from '../img/yzcj.jpg';
import quality from '../img/quality.png'


import topshow from '../img/topshow.jpg'



import zdhcx from '../img/zdhcx.jpg'
import zs1 from '../img/zs1.jpg'
import zs2 from '../img/zs2.jpg'
import zs3 from '../img/zs3.jpg'
import zs4 from '../img/zs4.jpg'
import kxgl1 from '../img/kxgl1.jpg'
import kxgl2 from '../img/kxgl2.jpg'
import kxgl3 from '../img/kxgl3.jpg'
import kxgl4 from '../img/kxgl4.jpg'
import logo from '../img/logo.jpg'
import hzhb from '../img/hzhb.jpg'
import hz1 from '../img/hz1.png'
import hz2 from '../img/hz2.png'
import hz3 from '../img/hz3.png'
import hz4 from '../img/hz4.png'
import hz5 from '../img/hz5.png'
import hz6 from '../img/hz6.png'

import txzs1 from '../img/txzs1.jpg'
import txzs2 from '../img/txzs2.jpg'
import txzs3 from '../img/txzs3.jpg'
import txzs4 from '../img/txzs4.jpg'

import sybg1 from '../img/sybg1.jpg'




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


    };

    this.imgmousehover=this.imgmousehover.bind(this);
    this.imgmouseleave=this.imgmouseleave.bind(this);
    this.enterproducation=this.enterproducation.bind(this);
      this.enterdetail=this.enterdetail.bind(this);

}

enterdetail(){
  this.props.history.push({pathname:'/newdetail'});
}


 enterproducation(){
  this.props.history.push({pathname:'./producation'});
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
    <div >

    



    <div style={{width:'90%',height:'430px',position:'relative',top:'130px',left:'0',right:'0',margin:'auto',overflow:'hidden',top:'110px'}} >
    <img   src={sybg1} style={{height:"100%",width:'100%',position:'relative'}}/>
    </div>










    

    <div style={{width:'90%',left:"0",right:'0',margin:'auto',height:'320px',position:'relative',top:'160px'}}>

    <div style={{width:'38%',position:'absolute',left:'0',}}>
   
     <div style={{width:'100%',height:"10%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
     <Icon type="flag" />
   厂区总览 | Factory Overview</div>

    <img src={cqzl} style={{width:'100%',borderBottom:'solid 1px  #101010',borderRight:'solid 1px  #101010',boxShadow: '10px 10px 5px #888888'}} />
    <div style={{fontSize:'18px',color:'black'}}><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;凯启精密的厂区位于浙江省宁波市保税区，这里环境优美，空气清新。</div>
    </div>


    <div style={{width:'55%',position:'absolute',right:'0',height:'100%',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',}}>

     <div style={{width:'100%',height:"10%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
     <Icon type="flag" />
   新闻| News</div>
  
   <div style={{width:'100%',height:"90%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',}}>

     <div style={{width:'100%',height:'100%',display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap',backgroundColor:"white",color:'black'}}>
  <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn7.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundImage:' linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
东海之滨 魅力甬城
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#830202'}} type="primary">查看更多 </Button>
   </div>
  </div>

 <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn2.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundImage:' linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
青年强则企业强 青年优则企业优
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#830202'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn3.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundImage:' linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
不忘初心，砥砺前行——建党97周年，我们在努力
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#830202'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn4.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundImage:' linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
凝聚青年 共叙发展 ——集团团委组织团建活动
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#830202'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn5.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundImage:' linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
最美煤矿人 ——送给常年奋战在井下第一线的工人同胞们
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#830202'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn6.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundImage:' linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
砥砺前行——建党97周年，我们在努力
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#830202'}} type="primary">查看更多 </Button>
   </div>
  </div>


    </div>


   </div>
    </div>
    </div>








    <div style={{width:'100%',height:'400px',position:'relative',top:'190px'}} >


    <div style={{width:'30%',height:'80px',textIndent:'2em',color:'black',
    position:'absolute',left:'38%',bottom:'10px'}}>
    </div>
    <div style={{width:'50%',height:'250px',textIndent:'2em',color:'black',
    position:'absolute',right:'5%',textAlign:'left',backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
    fontSize: '18px',borderStyle:'solid',borderWidth:'1px',borderColor:'#D7D7D7'}}> 
       <div style={{width:'100%',height:"15%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',
       fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
       <Icon type="flag" />
    公司介绍 | Company Profile</div>

        <div style={{padding:'15px',fontFamily:'Arial',backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',fontSize:'25px'}}>
    凯启精密是<strong style={{color:'#ff0000',zIndex:'10'}}>银亿股份</strong>下属新建全资子公司，2016年8月8日完成工商注册，
    公司主要生产变速箱壳体等铝合金压铸件。<strong style={{color:'#1d518f',zIndex:'10'}}>投资总额1.1亿美元，注册资金：4500万元整，占地面积50000平方米</strong>, 坐立于浙江省宁波市保税区。
    </div>
    </div>

    <div style={{width:'50%',height:"330px",borderRadius:'5px ',overflow:'hidden',position:'absolute',left:'5%',top:'0'}}> 
    <img src={topshow}/>
    </div>
    </div>





        <div style={{width:'100%',left:"0",right:'0',margin:'auto',height:'350px',position:'relative'}}>
    <div style={{width:'40%',left:"5%",height:'370px',position:'relative',top:'80px'}}>

    <div style={{width:'100%',height:"10%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
    <Icon type="flag" />
    凯启门户|Kaiqi Portal</div>
    <div style={{position:'absolute',left:'0',height:'0',width:'0',backgroundColor:'transparent ',bottom:"120px",zIndex:'100000',  borderStyle: 'solid',
    borderWidth: '30px  0px 0px 1000px ',
    borderColor: 'transparent  transparent transparent white '}}></div>

    <div style={{position:'absolute',right:'0',height:'0',width:'0',backgroundColor:'transparent ',bottom:"120px",zIndex:'100000',  borderStyle: 'solid',
    borderWidth: '30px 1000px 0px   0px',
    borderColor: 'transparent white transparent  transparent  '}}></div>

    <div>
    <Carousel  dots='flase' autoplay="true"  effect="fade">
    <div style={{width:'100%',height:"200px",overflow:'hidden',position:'relative' }}>
    <img style={{width:'100%',height:'100%',position:'absolute',left:'0px',right:'0px',margin:'auto'}} src={bg1}/>
    </div>
    <div style={{width:'100%',height:"200px",overflow:'hidden',position:'relative' }}>
    <img style={{width:'100%',height:'100%',position:'absolute',left:'0px',right:'0px',margin:'auto'}} src={bg2}/>
    </div>
    </Carousel>
    </div>
    </div>

    <div style={{width:'40%',right:"5%",height:'370px',position:'absolute',top:'80px'}}>

    <div style={{width:'100%',height:"10%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
    <Icon type="flag" />
    合作伙伴 | Partner</div>


    <div style={{position:'relative',backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',width:'100%',height:"50%",display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap'}}>
    
    <div style={{width:'28%',height:'40%',overflow:'hidden'}}><img style={{width:'100%',borderRadius:'10px'}} src={hz1}/></div>
    <div style={{width:'28%',height:'40%',overflow:'hidden'}}><img style={{width:'100%',borderRadius:'10px'}} src={hz2}/></div>
    <div style={{width:'28%',height:'40%',overflow:'hidden'}}><img style={{width:'100%',borderRadius:'10px'}} src={hz3}/></div>
    <div style={{width:'28%',height:'40%',overflow:'hidden'}}><img style={{width:'100%',borderRadius:'10px'}} src={hz4}/></div>
    <div style={{width:'28%',height:'40%',overflow:'hidden'}}><img style={{width:'100%',borderRadius:'10px'}} src={hz5}/></div>
    <div style={{width:'28%',height:'40%',overflow:'hidden'}}><img style={{width:'100%',borderRadius:'10px'}} src={hz6}/></div>
    </div>
    </div>

    </div>










    
    <div style={{width:'90%',left:"0",right:'0',margin:'auto',height:'400px',position:'relative'}}>

    <div style={{width:'45%',height:'45%',position:'relative',position:'absolute'}}> 
    <div style={{width:'100%',height:"20%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',
    fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
    <Icon type="flag" />
    自动化产线 | Automated production line</div>
    <Carousel  dots='flase' autoplay="true"  effect="fade">
    <div style={{width:'100%',height:"260px",overflow:'hidden',position:'relative' }}>
    <img style={{width:'100%',height:'100%',position:'absolute',left:'0px',right:'0px',margin:'auto'}} src={zs1}/>
    </div>
    <div style={{width:'100%',height:"260px",overflow:'hidden',position:'relative' }}>
    <img style={{width:'100%',height:'100%',position:'absolute',left:'0px',right:'0px',margin:'auto'}} src={zs2}/>
    </div>

    <div style={{width:'100%',height:"260px",overflow:'hidden',position:'relative' }}>
    <img style={{width:'100%',height:'100%',position:'absolute',left:'0px',right:'0px',margin:'auto'}} src={zs3}/>
    </div>

    <div style={{width:'100%',height:"260px",overflow:'hidden',position:'relative' }}>
    <img style={{width:'100%',height:'100%',position:'absolute',left:'0px',right:'0px',margin:'auto'}} src={zs4}/>
    </div>
    </Carousel>
    </div>



    <div style={{width:'45%',height:'45%',position:'relative',right:'0%',position:'absolute',}}> 
    <div style={{width:'100%',height:"20%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white',}}>
    <Icon type="flag" />
    主要产品 | Main Products</div>

    <div style={{width:'100%',height:"280px",overflow:'hidden',position:'relative',backgroundColor:'#FFCD8D' ,borderStyle:'solid',borderWidth:'1px',borderColor:'#D7D7D7'}} onClick={this.enterproducation}>

    <div style={{width:'100%',height:'100%',display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap',backgroundColor:"white",color:'black'}}>
    <Card style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',width:'30%',height:'40%',border:'solid 1px #373B76',borderColor:"#898989"}}>
    <div style={{width:'100%',height:'20%',position:'absolute',bottom:'0',backgroundColor:'#2E465F',color:'white',left:'0',fontSize:'15px',paddingLeft:'20%'}}>加强变壳</div>
    <img style={{width:'55%',maxHeight:'50%',transition: 'width 0.5s'}}  src={cp1}/>
    <span style={{fontSize:'15px',position:'absolute'}}></span></Card>
    <Card style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',width:'30%',height:'40%',border:'solid 1px #373B76',borderColor:"#898989"}}>
    <div style={{width:'100%',height:'20%',position:'absolute',bottom:'0',backgroundColor:'#2E465F',color:'white',left:'0',fontSize:'15px',paddingLeft:'20%'}}>普通变壳</div><img style={{width:'55%',maxHeight:'50%',transition: 'width 0.5s'}}  src={cp2}/>
    <span style={{fontSize:'15px',position:'absolute'}}> </span></Card>
    <Card style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',width:'30%',height:'40%',border:'solid 1px #373B76',borderColor:"#898989"}}>
    <div style={{width:'100%',height:'20%',position:'absolute',bottom:'0',backgroundColor:'#2E465F',color:'white',left:'0',fontSize:'15px',paddingLeft:'20%'}}>蜥蜴离壳</div><img style={{width:'55%',maxHeight:'50%',transition: 'width 0.5s'}}  src={cp3}/>
    <span style={{fontSize:'15px',position:'absolute'}}> </span></Card>
    <Card style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',width:'30%',height:'40%',border:'solid 1px #373B76',borderColor:"#898989"}}>
    <div style={{width:'100%',height:'20%',position:'absolute',bottom:'0',backgroundColor:'#2E465F',color:'white',left:'0',fontSize:'15px',paddingLeft:'20%'}}>火星离壳</div><img style={{width:'55%',maxHeight:'50%',transition: 'width 0.5s'}}  src={cp4}/>
    <span style={{fontSize:'15px',position:'absolute'}}></span></Card>
    <Card style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',width:'30%',height:'40%',border:'solid 1px #373B76',borderColor:"#898989"}}>
    <div style={{width:'100%',height:'20%',position:'absolute',bottom:'0',backgroundColor:'#2E465F',color:'white',left:'0',fontSize:'15px',paddingLeft:'20%'}}> 孟菲斯</div><img style={{width:'55%',maxHeight:'50%',transition: 'width 0.5s'}} src={cp5}/>
    <span style={{fontSize:'15px',position:'absolute'}}></span></Card>
    <Card style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',width:'30%',height:'40%',border:'solid 1px #373B76',borderColor:"#898989"}}>
    <div style={{width:'100%',height:'20%',position:'absolute',bottom:'0',backgroundColor:'#2E465F',color:'white',left:'0',fontSize:'15px',paddingLeft:'20%'}}>斐济离壳</div><img style={{width:'55%',maxHeight:'50%',transition: 'width 0.5s'}}  src={cp6}/>
    <span style={{fontSize:'15px',position:'absolute'}}></span></Card>


    </div>

    </div>

    </div>



    </div>





    <div style={{width:'90%',height:'160px',position:'relative',left:'0',right:"0",margin:'auto',display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap',backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'}}>

    <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs1}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书1</div></div>
     <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs2}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书2</div></div>
      <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs3}/>  <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书3</div></div>
       <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs4}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书4</div></div>
        <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs3}/>  <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书5</div></div>
    <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs1}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书6</div></div>
      <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs3}/>  <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书7</div></div>
     <div style={{width:'100px',height:"95%",backgroundColor:"",}}><img style={{width:'93%',position:'relative'}} src={txzs2}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书8</div></div>

    </div>




  <div style={{fontSize:'23PX',width:'100%',height:'13px',textAlign:'center',color:'black'}}>

    </div>



    </div>

    );
}


}

export default Mainpage



