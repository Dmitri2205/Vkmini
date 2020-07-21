import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Root, CellButton, View, Panel, PanelHeader, PanelHeaderBack, Header, Group, Cell } from '@vkontakte/vkui';
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
    }


authFunction = () => {
	alert('Redirect');
     window.location = 'https:\//oauth.vk.com/authorize?client_id=7545593&display=page&redirect_uri=https:\//oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.120';  
     const re = new RegExp(this.state.reg);
     var result = re.exec(window.location.href);
     console.log(re);
};




  render() {
    
    
    
    return (
      <Root activeView={this.state.activeView}>
      <View id="header" activePanel="header__name" style={{border:"1px solid red"}}>
    <Panel id="header__name">
     <PanelHeader left={<PanelHeaderBack onClick={this.props.onBackClick} />}>
  		Назад {this.props.platform}
	 </PanelHeader>
    		<CellButton onClick={()=>{this.authFunction()}}>Auth</CellButton>
    </Panel>
  </View>
      </Root>
    )
  }
}


