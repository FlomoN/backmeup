import React from "react";
import { TitleBar } from "react-desktop/windows";
import { remote } from "electron";

class Headbar extends React.Component {

  close = () => remote.getCurrentWindow().close();
  minimize = () => remote.getCurrentWindow().minimize();

  render() {
    return <TitleBar
      title="backmeUp"
      controls
      onMinimizeClick={this.minimize}
      onCloseClick={this.close}
      background="#032535"
      className="titlebar"
    />
  }
}

export default Headbar;