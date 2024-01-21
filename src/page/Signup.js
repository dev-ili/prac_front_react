import React from "react";
import './Signup.css';
import InputRow from "../components/member/InputRow";
import Button from "../components/member/Button";
import { axios } from "../common/MyAxios";

class Signup extends React.Component {
  fn_signup() {
    let id = document.querySelector('#id').value;
    if(id === '' || id == null) {
      alert('ID is empty');
      return false;
    }
    let pw = document.querySelector('#pw').value;
    if(pw == null || pw === '' || pw !== document.querySelector('#pw_chk').value) {
      alert('please check password');
      return false;
    }
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    if(email === '' || email == null) {
      alert('EMAIL is empty');
      return false;
    }
    axios({
      method: 'post',
      url: '/member/signup',
      data: {
       id: id,
       password: pw,
       name: name,
       email: email 
      }
    })
    .then((response) => {
      console.log(response);
      let result = response.data;
      if(result.errCode === 0) {
        if(result.res === 'fail') {
          alert('Fail');
        } else if(result.res === 'succ') {
          alert('Welcome to join us');
          this.props.movePage('login');
        }
      }
      if(result.errCode < 0) {
        alert('err : ' + result.errMsg);
        console.log(result.errMsg)
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log('done axios');
    })
  }

  render() {
    return(
      <div className="signupForm">
        <h1>Sign Up</h1>
          <InputRow type='text' id='id' value='ID' />
          <InputRow type='password' id='pw' value='PW' />
          <InputRow type='password' id='pw_chk' value='PW 확인' />
          <InputRow type='text' id='name' value='NAME' />
          <InputRow type='text' id='email' value='EMAIL' />
        <div>
          <Button onClick={() => this.fn_signup()} value='가입' />
          <Button onClick={() => this.props.movePage('login')} value='취소' />
        </div>
      </div>
    );
  }
}

export default Signup;