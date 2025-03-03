import Button from "../components/Button";
import { useEffect, useState } from "react";
import InputNumber from "../components/InputNumber";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

const AddPropertyPage = () => {
    const api_url = import.meta.env.VITE_API_URL
    const initialPropertyData = {
        title: '',
        address: '',
        description: '',
        rooms: 1,
        beds: 1,
        bathrooms: 1,
        sqm: 0,
        owner_fullname: '',
        email: '',
        cover_img: '',
        category: 0
    }
    const { types } = useGlobalContext();
    const [step, setStep] = useState(1);
    const [propertyData, setPropertyData] = useState(initialPropertyData);
    const [previewImg, setPreviewImg] = useState('');
    const [validationData, setValidationData] = useState({});

    // const validateData = () => {
    //     if(!title)
    // }

    const handleInputTextChange = (e) => {
        const { name, value } = e.target;

        setPropertyData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTypeChange = (e) => {
        const {value} = e.target;

        setPropertyData(prev => ({...prev, category: parseInt(value)}));
    }

    const handleRoomsChange = (value) => {
        setPropertyData(prev => ({ ...prev, rooms: value }))
    }
    const handleBedsChange = (value) => {
        setPropertyData(prev => ({ ...prev, beds: value }))

    }
    const handleBathroomsChange = (value) => {
        setPropertyData(prev => ({ ...prev, bathrooms: value }))

    }

    const handleImageChange = (e) => {
        setPropertyData(prev => ({ ...prev, cover_img: e.target.files[0] }));
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    const handleUpload = async () => {
        const formData = new FormData();
        for (let key in propertyData) {
            console.log(key, propertyData[key]);
            formData.append(key, propertyData[key]);
        }

        try {
            const response = await axios.post(`${api_url}/properties`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.error("Errore durante il caricamento", error);
        }

    }

    const handleNextStepClick = () => {
        setStep(prev => prev + 1);
    }
    const handlePreviousStepClick = () => {
        setStep(prev => prev - 1);
    }

    return (
        <div className="container px-5 max-w-md">
            <h1 className="text-center">Aggiungi un nuovo immobile</h1>
            {/* Step 1 */}
            {step === 1 && (
                <>
                    <div className="form-property">
                        <label htmlFor="input-property-title">Titolo descrittivo</label>
                        <input
                            type="text"
                            placeholder="es. Elegante Villa Panoramica su Torino"
                            className="input-property"
                            id="input-property-title"
                            value={propertyData.title}
                            onChange={handleInputTextChange}
                            name='title'
                        />
                        <small className="text-danger">Il titolo deve avere almeno 10 caratteri.</small>
                    </div>
                    <div className="form-property">
                        <label htmlFor="input-property-address">Indirizzo</label>
                        <input
                            type="text"
                            placeholder="es. Via Roma 121, Torino"
                            className="input-property"
                            id="input-property-address"
                            value={propertyData.address}
                            onChange={handleInputTextChange}
                            name='address'
                        />
                        <small className="text-danger">L'indirizzo deve avere almeno 6 caratteri.</small>
                    </div>
                    <div className="form-property">
                        <label htmlFor="input-property-description">Descrizione</label>
                        <textarea
                            placeholder="es. Villa luminosa con vista su Torino, arredata con gusto e dotata di ogni comfort."
                            className="input-property"
                            id="input-property-description"
                            value={propertyData.description}
                            onChange={handleInputTextChange}
                            name='description'
                        >
                        </textarea>
                        <small className="text-danger">La descrizione deve avere almeno 10 caratteri.</small>
                    </div>
                    <div className="form-property">
                        <label htmlFor="input-property-type">Categoria</label>
                        <select
                            className="input-property"
                            name="type"
                            id="input-property-type"
                            onChange={handleTypeChange}
                            value={propertyData.category}
                        >
                            <option value="0">Seleziona una categoria</option>
                            {types.map(type => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                        </select>
                        <small className="text-danger">La categoria è obbligatoria.</small>

                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="form-property">
                        <InputNumber
                            label='Inserisci numero stanze'
                            onChange={handleRoomsChange}
                            value={propertyData.rooms}
                        />
                    </div>
                    <div className="form-property">
                        <InputNumber
                            label='Inserisci numero letti'
                            onChange={handleBedsChange}
                            value={propertyData.beds}

                        />
                    </div>
                    <div className="form-property">
                        <InputNumber
                            label='Inserisci numero bagni'
                            onChange={handleBathroomsChange}
                            value={propertyData.bathrooms}
                        />
                    </div>
                    <div className="form-property text-center">
                        <label htmlFor="input-property-sqm">Inserisci i metri quadri</label>
                        <input
                            type="number"
                            size={4}
                            id="input-property-sqm"
                            className="input-property"
                            value={propertyData.sqm}
                            onChange={handleInputTextChange}
                            name="sqm"
                        />
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <div className="form-property text-center">
                        <strong>Inserisci un'immagine di copertina</strong>
                        <input
                            type="file"
                            name="cover_img"
                            id="input-property-cover_img"
                            className="input-property"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    {previewImg && (
                        <picture className="">
                            <img className='img-fluid' src={previewImg} alt="Anteprima copertina immagine" />
                        </picture>
                    )}
                </>
            )}

            {step === 4 && (
                <>
                    <div className="form-property">
                        <label htmlFor="input-property-owner_fullname">Nome e cognome proprietario</label>
                        <input
                            type="text"
                            placeholder="es. Mario Rossi"
                            className="input-property"
                            id="input-property-owner_fullname"
                            value={propertyData.owner_fullname}
                            onChange={handleInputTextChange}
                            name='owner_fullname'
                        />
                    </div>
                    <div className="form-property">
                        <label htmlFor="input-property-email">Email di contatto</label>
                        <input
                            type="text"
                            placeholder="es. mariorossi@gmail.com"
                            className="input-property"
                            id="input-property-email"
                            value={propertyData.email}
                            onChange={handleInputTextChange}
                            name='email'
                        />
                    </div>
                </>
            )}

            {step === 5 && (
                <div className="text-center my-3">
                <strong>Sei sicuro di voler aggiungere questo immobile?</strong>
                </div>
            )}

            <div className="text-center d-flex gap-2 justify-content-center">
                {step > 1 && <Button text='Indietro' onClick={handlePreviousStepClick} />}
                {step < 5 ? (
                    <Button text='Avanti' onClick={handleNextStepClick} />
                ) : (
                    <Button text='Conferma' onClick={handleUpload} />

                )}
            </div>
        </div>
    )
}

export default AddPropertyPage