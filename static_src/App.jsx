import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Root, Button, View, Panel, PanelHeader, PanelHeaderBack, Header, Group, Cell, Div } from '@vkontakte/vkui';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

export default class App extends React.Component {
  
 state = {
      activeView: 'header',
      id:' ',
      uri:' ',
      response:' ',
      reg:'/^access_token=$\d|[a-zA-z]^&$/',
    };

    componentDidMount(){
      const {id,uri} = this.state;
      bridge.send("VKWebAppInit", {});
     // window.location = 'https:\//oauth.vk.com/authorize?client_id=7545593&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.120';  
    };


authFunction = () => {
	let auth = ' ';
	alert('Redirect');
	// window.location = 'https:\//oauth.vk.com/authorize?client_id=7545593&display=page&redirect_uri=https://dmitri2205.github.io/Vkmini/&scope=friends&response_type=token&v=5.120';  
	window.location = 'https:\//oauth.vk.com/authorize?client_id=7545593&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.120';  
     // axios.get('https:\//oauth.vk.com/authorize?client_id=7545593&display=popup&redirect_uri=https:\//oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.120')
     // .then((response)=>{
     	// auth = response.data;
     	// console.log(auth);
     	// console.log(typeof(auth));
     	// this.setState({auth})
     // return auth; 
     // }) 
};

friendsList = ()=> {

};
	

friendsSwitch = (event) => {
	if (this.state.activeView !== 'header') {
	this.setState({activeView:'header'});
	}else {
	this.setState({activeView:'friends'});
		
	}
	console.log("Switch");
}



  render() {

    return (
      <Root activeView={this.state.activeView}>
      	<View id="header" activePanel="header__name" style={{border:"1px solid red"}}>
    		<Panel id="header__name">
     			<PanelHeader>Username</PanelHeader>
    				<Cell><Button onClick={()=>{this.authFunction()}}>Auth</Button></Cell>
    				<Cell><Button onClick={()=>{this.friendsSwitch()}}>Friends</Button></Cell>
    				<Div>
	 					<link rel="import" href="oauth.vk.com/blank.html"/>
	 				</Div>
	 					
     		</Panel>
  		</View>
      	<View id="friends" activePanel="friends__list" style={{border:"1px solid red"}}>
    		<Panel id="friends__list">
    		<PanelHeader left={<PanelHeaderBack onClick={this.friendsSwitch} />}>
  					Назад 
	 			</PanelHeader>

  			 </Panel>
  	  	</View>
      </Root>
    )
  }
}


