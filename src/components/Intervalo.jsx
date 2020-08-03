import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'


const Intervalo = props => {

    const { max, min } = props

    return (
        <Card title="Intervalo de números" blue>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input
                        type="number"
                        value={props.min}
                        onChange={
                            e => props.alterarMinimo(+e.target.value)
                        }
                    />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input
                        type="number"
                        value={props.max}
                        onChange={
                            e => props.alterarMaximo(+e.target.value)
                        }
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        max: state.numeros.max,
        min: state.numeros.min
    }
}

function mapDispachToProps(dispach) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispach(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispach(action)
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispachToProps
)(Intervalo)