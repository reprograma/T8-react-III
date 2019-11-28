import React, { Fragment, Component } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import listaProdutos from '../mock/produtos';
import CardUser from '../components/CardUser/CardUser';
import { getUser, getRepos } from '../api/users';

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {},
         //   repos: []
        }
    }

    valorInput = (param) => {
        // let valor = param.target.value;
        this.setState({
            value: param.target.value
        })
        // console.log(this.state.value)
    }

    pesquisar = () => {
        getUser(this.state.value).then((abobrinha) => {
            this.setState({
                user: abobrinha.data
            })
            console.log(this.state.user, 'pesquisar')
        }
        ).catch(err => console.log(err))
    }

    pesquisarRepos = (login) => {
        getRepos(login).then(res => {
          //  this.setState({ repos: res.data})
            this.props.history.push('/repos', state={
                data: res.data
            });
        })
        
    }

    render() {
        const { login, name, avatar_url } = this.state.user;
        return (
            <Fragment>
                <Input
                    placeholder="Pesquise seu produto"
                    tipo="text"
                    pegarValorInput={this.valorInput}
                ></Input>
                <Button
                    click={this.pesquisar}
                >Pesquisar</Button>
                <div className="lista_item">
                    <CardUser
                        img={avatar_url}
                        user={login}
                        name={name}
                        clicar={() => this.pesquisarRepos(login)}
                    />
                   
                </div>
            </Fragment>
        )
    }
};
export default Usuarios;