import React from 'react'

import Card from './Card'

export default props => {

    const {min, max} = props

    return (
        <Card title="Média dos números" green>
            <div className="">
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}