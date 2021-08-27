import React from 'react';
import PropTypes from 'prop-types';

function ComponenteA({ nombre }) {
    return (
        <>
            <h1>Componente A: {nombre}</h1>
        </>
    )
}

ComponenteA.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    soltero: PropTypes.bool,
    func: PropTypes.func.isRequired,
}

ComponenteA.defaultProps = {
    nombre: 'John',
    edad: 0,
    soltero: false,
}

export default ComponenteA;