import React, { Fragment, Component, useState } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CardUser from '../components/CardUser/CardUser';
import { getUser, getRepos } from '../api/users';

const Usuarios = props =>  {
    const [ value, setValue ] = useState("");
    const [ user, setUser ] = useState({});
    const [ repos, setRepos ] = useState([]);
    

  const  valorInput = (param) => {
        // let valor = param.target.value;
        // this.setState({
        //     value: param.target.value
        // })
        setValue(param.target.value)
        // console.log(this.state.value)
    }

 const pesquisar = () => {

        getUser(this.state.value).then((res) => {
         //   console.log(res.data)
            // this.setState({
            //     user: res.data
            // })
            setUser(res.data)
          //  console.log(this.state.user, 'pesquisar')
        }
        ).catch(err => console.log(err))
    }

  const pesquisarRepos = (login) => {
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
        const { login, name, avatar_url } = user;
        return (
            <Fragment>
                <Input
                    placeholder="Pesquise seu produto"
                    tipo="text"
                    pegarValorInput={valorInput}
                ></Input>
                <Button
                    click={pesquisar}
                >Pesquisar</Button>
                <div className="lista_item">

                    {user.login ?
                        <CardUser
                            img={avatar_url}
                            user={login}
                            name={name}
                            clicar={() => pesquisarRepos(user.login)}
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

export default Usuarios;