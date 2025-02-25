import React from 'react'
import TypeButton from './Button'

const AccordionType = ({ types }) => {
    return (
        <div className='text-center'>
            <strong>Categoria</strong>
            <div className='accordion-type mt-2'>
                {types.map(type => (
                    <TypeButton key={type.id} text={type.name} />
                ))}
            </div>
        </div>
    )
}

export default AccordionType