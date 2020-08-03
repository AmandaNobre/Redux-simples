import React from 'react'

import Card from './Card'
import './Media.css'

export default props => {
    return (
        <Card title="Média dos números" green>
            <div className="">
                <span>
                    <span>Resultado</span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}