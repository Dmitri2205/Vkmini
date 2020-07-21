import React from 'react';
import axios from 'axios';
import { Root, CellButton, View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

export default class App extends React.Component {
  
 state = {
      activeView: 'header',
      id:' ',
      uri:' ',
      response:' ',
    };

    componentDidMount(){
      const {id,uri} = this.state;
      bridge.send("VKWebAppInit", {});
      window.location.href = 'https://oauth.vk.com/authorize?client_id=7544278&display=page&redirect_uri=https://dmitri2205.github.io/Vkmini/index.html&scope=friends&response_type=token&v=5.120';
        //.then((response) => { 
        //  if (response.data.error) {
        //      console.log(response.data.error.error_msg);
        //  }else{
        //    console.log(response.data);
        //  };
        //  }
        //);  

    }

  render() {
    
    
    
    return (
      <Root activeView={this.state.activeView}>
       <View id="header" activePanel="header" style={{border:"1px solid red"}}>
    <Panel id="header">
      Username
    </Panel>
  </View>
      </Root>
    )
  }
}


