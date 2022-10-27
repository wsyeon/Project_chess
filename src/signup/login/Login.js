import React, { Component } from 'react';
import './login.css';

const Login = ()=> {
    return (
        <div className='login-container'>
            {/*이번 프로젝트는 기능 구현 전 눈에 보이는 형식 및 디자인부터 하고 기능 구현할 생각이다 */}
            {/*이유는 여러가지 방법으로 해보고싶기때문이다. 이러다보면 나에게 맞는 개발 방법을 찾을수 있다고 생각됨*/}
            {/*우선 mysql을 연동하기 전 로그인 형식만 구현 및 디자인 하기 */}
            <div className='login-container-sub'>
                <form>
                    <div className='login-design'>
                        <div id='id-design'><input type='text' placeholder='Id' /></div>
                        <div id='pwd-design'><input type='password' placeholder='Password' /></div>
                        <p>회원가입</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;