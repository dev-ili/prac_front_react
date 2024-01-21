import React from 'react';
import './Login.css';
import InputRow from '../components/member/InputRow';
import Button from '../components/member/Button';
import { axios } from '../common/MyAxios';

class Login extends React.Component {
  fn_login() {
    let id = document.querySelector('#id');
    if(id.value === '' || id.value == null) {
      alert('ID is empty');
      return false;
    }
    let pw = document.querySelector('#pw');
    if(pw.value === '' || pw.value == null) {
      alert('PW is empty');
      return false;
    }
    axios({
      method: 'post',
      url: '/member/login',
      data: {
        id:id.value,
        password:pw.value
      }
    })
    .then((response) => {
      console.log(response);
      let result = response.data;
      if(result.errCode === 0) {
        if(result.res === 'succ') {
          let member = result.memberDto;
          alert('Hello, ' + member.name);
          this.props.movePage('main');
        }else if(result.res === 'fail') {
          alert('login fail');
        }
      }
      if(result.errCode < 0) {
        alert('error : ' + result.errMsg);
        console.log(result.errMsg);
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log('trying login is acted');
    })
  }
  
  render() {
    return (
      <div className='loginForm'>
        <h1>Log In</h1>
          <InputRow type='text' id='id' value='ID' />
          <InputRow type='password' id='pw' value='PW' />
        <div>
          <Button onClick={() => this.fn_login()} value='로그인' />
          <Button onClick={() => this.props.movePage('signup')} value='회원가입' />
        </div>
      </div>
    );
  }
}

export default Login;