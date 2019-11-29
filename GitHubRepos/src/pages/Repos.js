import React from 'react';

const Repos = props => {
    console.log(props)
    const { repos } = props.location.state;
    return (
        <ul>
            {/* {this.state.repos.map(r => (
            <li> {r.name} </li>
        ))} */}
        {repos.map(i => (
            <li key={i.id}> {i.name} </li>
        ))}
        <li> Oi </li>
        </ul>
    )
}
export default Repos;