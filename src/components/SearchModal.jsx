import React, { useState } from 'react'
import InputNumber from './InputNumber'
import { useGlobalContext } from '../context/GlobalContext';
import Button from './Button';
import AccordionType from './AccordionType';
import { useNavigate } from 'react-router-dom';

const SearchModal = () => {
    const { filterData, setFilterData, resetModalFilterData, types, setIsSearching, fetchFilteredProperties, setCurrentPage } = useGlobalContext();
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
        fetchFilteredProperties();
        setCurrentPage(1);
    }
    return (
        <div className='search-modal-overlay' onClick={handleCloseModal}>

            <div className='search-modal p-3 gap-3 rounded'>
                <div className='search-modal-heading align-items-center'>
                    <div />
                    <h2 className='text-center'>Filtri</h2>
                    <i
                        class="fa-solid fa-xmark justify-self-end cursor-pointer align-self-start"
                        onClick={() => setIsSearching(false)}
                    ></i>
                </div>
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