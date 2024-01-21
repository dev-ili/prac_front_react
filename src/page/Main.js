import React from "react";
import './Main.css';
import { axios } from "../common/MyAxios";

class Main extends React.Component {
  logout() {
    alert('logout');
    axios({
      method:'get', 
      url: '/member/logout'
    })
    .then((response) => {
      let result = response.data;
      console.log(result);
      this.props.movePage();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('trying logout is acted');
    })
  }

  render() {
    return(
      <div className="main">
        <h1>Main</h1>
        <div>
          <button onClick={() => this.props.movePage()}>초기화면</button>
          <button onClick={() => this.logout()}>로그아웃</button>
        </div>
      </div>
    );
  }
}

export default Main;