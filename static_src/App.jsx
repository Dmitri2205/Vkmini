import React from 'react';
import axios from 'axios';
import { Root, CellButton, View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

export default class App extends React.Component {
  
 state = {
      activeView: 'header',

      id:'7544278',
      uri:'https://oauth.vk.com/blank.html',
      response:' ',
    };

    componentDidMount(){
      axios.get(`https://oauth.vk.com/authorize?client_id={id}&display=popup&redirect_uri={uri}&scope=friends&response_type=token&v=5.120`)
      const {id,uri} = this.state;
      );  
        }

          }
            console.log(response.data);
          }else{

              console.log(response.data.error.error_msg);
          if (response.data.error) {
        .then((response) => { 
    }

  render() {
   bridge.send("VKWebAppInit", {});
    
    
    
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


