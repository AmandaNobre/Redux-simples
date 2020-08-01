import React from 'react'

import './Soma.css'
import Card from './Card'

export default props => {
    return (
        <Card title="Soma" red>
            <div className="">
                <span>
                    <strong>Resultado: </strong>
                    <input type="number" value={0} readOnly />
                </span>
            </div>
        </Card>
    )
}