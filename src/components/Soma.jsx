import React from 'react'

import './Soma.css'
import Card from './Card'

export default props => {
    return (
        <Card title="Soma dos números" red>
            <div className="">
                <span>
                    <span>Resultado:</span>
                    <strong>10</strong>                </span>
            </div>
        </Card>
    )
}