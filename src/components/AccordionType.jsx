import React, { useState } from 'react'
import TypeButton from './TypeButton'
import { useGlobalContext } from '../context/GlobalContext'

const AccordionType = ({ types }) => {
    const { setFilterData, filterData } = useGlobalContext();

    const handleClick = (id) => {
        setFilterData(prev => ({ ...prev, type: id }));
    }

    return (
        <div className='text-center'>
            <strong>Categoria</strong>
            <div className='accordion-type mt-2'>
                {types.map(type => (
                    <TypeButton
                        key={type.id}
                        text={type.name}
                        onClick={() => handleClick(type.id)}
                        className={`${type.id === filterData.type ? 'button-type-active' : ''}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default AccordionType