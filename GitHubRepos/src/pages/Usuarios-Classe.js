import React, { Fragment, Component } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CardUser from '../components/CardUser/CardUser';
import { getUser, getRepos } from '../api/users';

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {
                //dados usuario
            },
            repos: [
                //dados repos
            ]
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

        getUser(this.state.value).then((res) => {
         //   console.log(res.data)
            this.setState({
                user: res.data
            })
          //  console.log(this.state.user, 'pesquisar')
        }
        ).catch(err => console.log(err))
    }

    pesquisarRepos = (login) => {
        getRepos(login).then(res => {
            //  console.log(res)
           // this.setState({ repos: res.data })
         
            this.props.history.push({
                pathname: "/repos",
                state: {
                    repos: res.data,
                    user: this.state.user
                }
            })
            // this.props.history.push({
            //     pathname: '/repos',
            //     state: { 
            //         repos: this.state.repos
            //     }
            //})
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

                    {this.state.user.login ?
                        <CardUser
                            img={avatar_url}
                            user={login}
                            name={name}
                            clicar={() => this.pesquisarRepos(this.state.user.login)}
                        />
                        : <p>Pesquise um usuário</p>}
                </div>

                {/* <ul>
                    {this.state.repos.map(i => {
                        return (
                            <Fragment>
                                <li>{i.name}</li>
                                <p>descrição: {i.description}</p>
                            </Fragment>
                        )
                    })}
                </ul> */}
            </Fragment>
        )
    }
};
export default Usuarios;