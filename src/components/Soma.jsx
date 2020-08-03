import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Soma = props => {

    const { min, max } = props

    return (
        <Card title="Soma dos números" red>
            <div className="">
                <span>
                    <span>Resultado: </span>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)