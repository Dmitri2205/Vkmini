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
          VK.init({apiId: 7545593});
      // const {id,uri} = this.state;
      bridge.send("VKWebAppInit", {});
     // window.location = 'https:\//oauth.vk.com/authorize?client_id=7545593&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.120';  
    };







authFunction = () => {
 
    // Авторизация
    VK.Auth.login(
      // callback-функция, которая будет вызвана после авторизации
      function (response) {
 
        console.log(response)
 
        if (response.status === 'connected') { // авторизация прошла успешно
 				
          var user = response.session.user; //  информация о пользователе
            alert(user);
 
        } else if (response.status === 'not_authorized') { // пользователь авторизован в ВКонтакте, но не разрешил доступ приложению;
 				alert('Not authorised');
        } else if (response.status === 'unknown') { // пользователь не авторизован ВКонтакте.
 				alert('Unknown');
 
        };
 
      },
      // права доступа (integer)
      // допустимые значения:
      // AUDIO:8
      // FRIENDS:2
      // MATCHES:32
      // PHOTOS:4
      // QUESTIONS:64
      // VIDEO:16
      // WIKI:128
      VK.access.PHOTOS
    );
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
    				<Cell><Button onClick={()=>{this.authFunction()}} >Auth</Button></Cell>
    				<Cell><Button onClick={()=>{this.friendsSwitch()}}>Friends</Button></Cell>
    				<Div>
    					Div
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


