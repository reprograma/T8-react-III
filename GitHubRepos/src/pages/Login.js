import React from 'react';
//import Input from '../components/Input/Input';
import { Input } from 'antd';
import { Button, Icon } from 'antd';
//import Button from '../components/Button/Button';

import './Login.css';

const Login = (props) => (
    <div>
        <form className="login-form">
            <div className="group-label">
                <label> Usuário: </label>
                {/* <Input tipo="text"></Input> */}
                <Input placeholder="Basic usage" />
            </div>
            <div className="group-label">
                <Icon type="bulb"></Icon><label> Senha: </label>
                <Input password="password"></Input>
            </div>
            <Button type="danger" icon="camera">Entrar</Button>
        </form>
        <Input placeholder="Basic usage" />
        <Input.Password placeholder="input password" />
    </div>
);
export default Login;