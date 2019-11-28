import React, { Fragment, Component } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import listaProdutos from '../mock/produtos';
import CardUser from '../components/CardUser/CardUser';
import { getUser } from '../api/users';

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {}
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
        getUser('emamaia').then(abobrinha => {
            this.setState({
                user: abobrinha.data
            })})
            console.log(this.state.user, 'pesquisar')
        }

    render() {
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
                    {/* {this.state.users.map(item => (
                        <CardUser
                            key={item.id}
                            name={item.name}/>
                    ))} */}
                </div>
            </Fragment>
        )
    }
};
export default Usuarios;