import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteA from './ComponenteA'; // componente por defecto
import { ComponenteB } from './ComponenteB'; // componente export simple


const suma = (a, b) => a + b;

const ComponenteC = ({ nombres }) => {

    let listaDeNombres = nombres.map((n, i) => {
        return <li key={i}>{n.toUpperCase()}</li>;
    })

    return (
        <>
            <h1>Componente C</h1>
            <ul>
                {
                    nombres.map((n, i) => {
                        return <li key={i}>{n.toUpperCase()}</li>;
                    })
                }
            </ul>

            <ol>
                {listaDeNombres}
            </ol>
        </>
    )
}

let edad = 21;

let isLogged = false;

let nombres = ['Diego', 'Priscila', 'Lewis', 'Edwards'];

const Suma = () => {

    return (
        <>
            <h1>Hola Mundo</h1>
            {
                edad >= 21 ? (
                    <ComponenteA nombre={"Luis"} edad={39} soltero={true} func={suma} />
                ) : (
                    <ComponenteB />
                )
            }

            {
                (!isLogged && !error) && (
                    <ComponenteC nombres={nombres} />
                )
            }

            <Alert className={"alert " + (props.color === "red" ? " alert-danger" : "")} />
        </>
    )
}

ReactDOM.render(<Suma />, document.querySelector('#root'));



function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const messages = [];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);

users.map((n, i) => {
    let myStyle = {
        width: "18rem"
    };
    return (
        <div className="card" style={myStyle} key={i}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{n}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
})