import React from 'react'

import Card from './Card'
import './Media.css'

export default props => {
    return (
        <Card title="Média dos números" green>
            <div className="">
                <span>
                    <span>Resultado</span>
                    <strong></strong>
                </span>
            </div>
        </Card>
    )
}