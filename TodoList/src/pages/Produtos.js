import React, { Fragment } from 'react';
import Card from '../components/Card/Card';

const produtos = [
    {
        id: 1,
        title: "Notebook Lenovo",
        img: "https://images-submarino.b2w.io/produtos/01/00/offers/01/00/item/133799/8/133799830SZ.png",
        price: "29,90"
    },
    {
        id: 2,
        title: "Relógio ",
        img: "",
        price: "299,90"
    },
    {
        id: 3,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 4,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 5,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 6,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 7,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 8,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 9,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 10,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    }
]
const Produtos = props => (
    <div className="lista_item">
    {produtos.map(item => (
        <Card 
        key={item.id}
        prod={item}/>
    ))}
    
    </div>
);
export default Produtos;