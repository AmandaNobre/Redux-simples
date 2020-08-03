import React from 'react'

import Card from './Card'
import './Sorteio.css'

export default props => {
    return (
        <Card title="Sorteio de um número" purple>
            <div className="">
                <span>
                    <strong>Resultado: </strong>
                    <strong>8</strong>
                </span>
            </div>
        </Card>
    )
}