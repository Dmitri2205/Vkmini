import React from 'react';
import './styles/style.css';
import { Root, CellButton, View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

export default class App extends React.Component {
  
 state = {
      activeView: 'header'
    }

  render() {
    bridge.send("VKWebAppInit", {});
    const result = fetch('https://api.vk.com/method/users.get?user_id=210700286&v=5.52',{mode:'no-cors'});
    setTimeout(()=>{
      console.log(result);
    },2000) 
    return (
      <Root activeView={this.state.activeView}>
       <View id="header" activePanel="header" style={{border:"1px solid red"}}>
    <Panel id="header">
    Имя Фамилия
    </Panel>
  </View>
      </Root>
    )
  }
}


