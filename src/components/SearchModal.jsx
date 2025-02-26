import React, { useState } from 'react'
import InputNumber from './InputNumber'
import { useGlobalContext } from '../context/GlobalContext';
import Button from './Button';
import AccordionType from './AccordionType';
import { useNavigate } from 'react-router-dom';

const SearchModal = () => {
    const { filterData, setFilterData, resetModalFilterData, types, setIsSearching } = useGlobalContext();
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setFilterData(prev => ({ ...prev, search: e.target.value }))
    }
    const handleRoomsChange = (value) => {
        setFilterData(prev => ({ ...prev, rooms: value }));
    }
    const handleBedsChange = (value) => {
        setFilterData(prev => ({ ...prev, beds: value }));
    }
    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            setIsSearching(false);
        }
    }
    const handleSearchClick = () => {
        setIsSearching(false);
        navigate('/search');
    }
    return (
        <div className='search-modal-overlay' onClick={handleCloseModal}>

            <div className='search-modal p-3 gap-3 rounded'>
                <input
                    type="text"
                    placeholder='Città o indirizzo'
                    className='text-center py-2 searchbar'
                    onChange={handleSearchChange}
                    value={filterData.search}
                />
                <AccordionType types={types} />
                <InputNumber
                    label="Numero stanze"
                    value={filterData.rooms}
                    onChange={handleRoomsChange}
                />
                <InputNumber
                    label="Numero letti"
                    value={filterData.beds}
                    onChange={handleBedsChange}
                />

                <div className='d-flex justify-content-between'>
                    <button className="button-link" onClick={resetModalFilterData}>Cancella</button>
                    <Button text="Cerca immobili" onClick={handleSearchClick} />
                </div>
            </div>
        </div>
    )
}

export default SearchModal