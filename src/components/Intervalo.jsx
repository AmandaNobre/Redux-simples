import React from 'react'

import Card from './Card'
import { connect } from 'react-redux'

const Intervalo = props => {

    const {max, min} = props

    return (
        <Card title="Intervalo de números" blue>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input
                        type="number"
                        value={props.min} 
                        readOnly
                    />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input
                        type="number"
                        value={props.max}
                       readOnly
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

export default connect(mapStateToProps)(Intervalo)