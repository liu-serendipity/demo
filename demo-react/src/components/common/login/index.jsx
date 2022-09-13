import React, { useState, useRef } from 'react'
import { LoginWrapper } from './style'

const Login = () => {

    const [isSelected, setIsSelected] = useState("super")
    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleChange = (e) => {
        setIsSelected(e.target.value)
    }

    const handleClick = () => {
        console.log(usernameRef);
    }

    const style = isSelected == "super" ? {display: "none"} : {display: "block"}
    return (
        <LoginWrapper>
            <div className="login">
                <div className="username">
                    <label htmlFor="">账号：</label>
                    <input type="text" required placeholder="请输入账号..." ref={usernameRef} />
                </div>
                <div className="password">
                    <label htmlFor="">密码：</label>
                    <input type="password" required placeholder="请输入密码..." ref={passwordRef} />
                </div>
            </div>
            <div className="user_category">
                <input type="radio" name="user" value="super" checked={isSelected == "super"} onChange={handleChange} />管理员
                <input type="radio" name="user" value="common" checked={isSelected == "common"} onChange={handleChange} />用户
            </div>
            <span className="commit" onClick={handleClick}>登录</span>
            <span className="register" style={style}>注册</span>
        </LoginWrapper>
    )
}

export default Login