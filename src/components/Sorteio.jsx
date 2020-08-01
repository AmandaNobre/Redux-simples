import React from 'react'

import Card from './Card'
import './Sorteio.css'

export default props => {
    return (
        <Card title="Sorteio" purple>
            <div className="">
                <span>
                    <strong>Resultado: </strong>
                    <input type="number" value={0} readOnly />
                </span>
            </div>
        </Card>
    )
}