import Button from "../components/Button";
import { useEffect, useState } from "react";
import InputNumber from "../components/InputNumber";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";
import validator from 'validator';
import { useNavigate } from "react-router-dom";
import ImgSlider from "../components/ImgSlider";

const AddPropertyPage = () => {
    const api_url = import.meta.env.VITE_API_URL
    const initialPropertyData = {
        title: '',
        address: '',
        description: '',
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        sqm: 0,
        owner_fullname: '',
        email: '',
        cover_img: '',
        category: 0,
        gallery: ''
    }
    const { types } = useGlobalContext();
    const [step, setStep] = useState(1);
    const [propertyData, setPropertyData] = useState(initialPropertyData);
    const [previewImg, setPreviewImg] = useState('');
    const [previewGallery, setPreviewGallery] = useState([]);
    const [validationData, setValidationData] = useState({
        title: true,
        address: true,
        description: true,
        category: true
    });
    const navigate = useNavigate();

    // Funzione che valida i dati in input, setta a true il rispettivo stato in caso di errore 
    // e restituisce true se c'e' almeno un errore 
    const validateData = () => {
        const { title, address, description, category, rooms, beds, bathrooms, sqm, cover_img, owner_fullname, email, gallery } = propertyData;
        switch (step) {
            case 1:
                if (!title || title.length < 10) {
                    setValidationData(prev => ({ ...prev, title: true }));
                } else {
                    setValidationData(prev => ({ ...prev, title: false }));
                }
                if (!address || address.length < 6) {
                    setValidationData(prev => ({ ...prev, address: true }));
                } else {
                    setValidationData(prev => ({ ...prev, address: false }));
                }

                if (!description || description.length < 10) {
                    setValidationData(prev => ({ ...prev, description: true }));
                } else {
                    setValidationData(prev => ({ ...prev, description: false }));
                }

                if (!category) {
                    setValidationData(prev => ({ ...prev, category: true }));
                } else {
                    setValidationData(prev => ({ ...prev, category: false }));
                }
                break;
            case 2:
                if (rooms === 0) {
                    setValidationData(prev => ({ ...prev, rooms: true }));
                } else {
                    setValidationData(prev => ({ ...prev, rooms: false }));
                }
                if (beds === 0) {
                    setValidationData(prev => ({ ...prev, beds: true }));
                } else {
                    setValidationData(prev => ({ ...prev, beds: false }));
                }
                if (bathrooms === 0) {
                    setValidationData(prev => ({ ...prev, bathrooms: true }));
                } else {
                    setValidationData(prev => ({ ...prev, bathrooms: false }));
                }
                if (sqm < 10) {
                    setValidationData(prev => ({ ...prev, sqm: true }));
                } else {
                    setValidationData(prev => ({ ...prev, sqm: false }));
                }
                break;
            case 3:
                if (!cover_img) {
                    setValidationData(prev => ({ ...prev, cover_img: true }));
                } else {
                    setValidationData(prev => ({ ...prev, cover_img: false }));
                }
                if (!gallery) {
                    setValidationData(prev => ({ ...prev, gallery: true }));
                } else {
                    setValidationData(prev => ({ ...prev, gallery: false }));
                }
                break;
            case 4:
                if (!owner_fullname || !owner_fullname.trim().includes(' ')) {
                    setValidationData(prev => ({ ...prev, owner_fullname: true }));
                } else {
                    setValidationData(prev => ({ ...prev, owner_fullname: false }));
                }
                if (!email || !validator.isEmail(email)) {
                    setValidationData(prev => ({ ...prev, email: true }));
                } else {
                    setValidationData(prev => ({ ...prev, email: false }));
                }
                break;
        }

    }

    const isValidationOk = () => {
        return Object.values(validationData).every(item => item === false);
    }

    const handleInputTextChange = (e) => {
        const { name, value } = e.target;

        setPropertyData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTypeChange = (e) => {
        const { value } = e.target;

        setPropertyData(prev => ({ ...prev, category: parseInt(value) }));
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

    const handleGalleryChange = (e) => {
        setPropertyData(prev => ({ ...prev, gallery: Array.from(e.target.files) }));
        const images = Array.from(e.target.files).map((img, index) => ({ id: index, path: URL.createObjectURL(img) }));
        setPreviewGallery(images);
    }

    const handleUploadGallery = async (id) => {
        const formData = new FormData();
        propertyData.gallery.forEach(image => formData.append('gallery', image));

        try {
            const response = await axios.post(`${api_url}/properties/${id}/gallery`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (err) {
            console.error(err);
        }
    }

    const handleUpload = async () => {
        const formData = new FormData();
        for (let key in propertyData) {
            formData.append(key, propertyData[key]);
        }

        try {
            const response = await axios.post(`${api_url}/properties`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            handleUploadGallery(response.data.id);
            navigate(`/property/${response.data.id}`);
        } catch (error) {
            console.error("Errore durante il caricamento", error);
        }

    }

    const handleNextStepClick = () => {
        if (isValidationOk()) {
            setStep(prev => prev + 1);
        }
    }
    const handlePreviousStepClick = () => {
        if (isValidationOk()) {
            setStep(prev => prev - 1);
        }
    }

    useEffect(() => {
        validateData();
    }, [propertyData, step])

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
                        {validationData.title && <small className="text-danger">Il titolo deve avere almeno 10 caratteri.</small>}
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
                        {validationData.address && <small className="text-danger">L'indirizzo deve avere almeno 6 caratteri.</small>}
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
                            maxLength={500}
                        >
                        </textarea>
                        {validationData.description && <small className="text-danger">La descrizione deve avere almeno 10 caratteri.</small>}
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
                        {validationData.category && <small className="text-danger">La categoria è obbligatoria.</small>}

                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="form-property text-center">
                        <InputNumber
                            label='Inserisci numero stanze'
                            onChange={handleRoomsChange}
                            value={propertyData.rooms}
                        />
                        {validationData.rooms && <small className="text-danger">Il numero di stanze deve essere almeno 1</small>}
                    </div>
                    <div className="form-property text-center">
                        <InputNumber
                            label='Inserisci numero letti'
                            onChange={handleBedsChange}
                            value={propertyData.beds}

                        />
                        {validationData.beds && <small className="text-danger">Il numero di letti deve essere almeno 1</small>}
                    </div>
                    <div className="form-property text-center">
                        <InputNumber
                            label='Inserisci numero bagni'
                            onChange={handleBathroomsChange}
                            value={propertyData.bathrooms}
                        />
                        {validationData.bathrooms && <small className="text-danger">Il numero di bagni deve essere almeno 1</small>}
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
                            min={10}
                        />
                        {validationData.sqm && <small className="text-danger">Il numero di metri quadri non è valido </small>}
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
                        {validationData.cover_img && <small className="text-danger">L'immagine di copertina è obbligatoria</small>}
                    </div>
                    {previewImg && (
                        <picture className="">
                            <img className='img-fluid' src={previewImg} alt="Anteprima copertina immagine" />
                        </picture>
                    )}
                    <div className="form-property text-center">
                        <strong>Inserisci la gallery di immagini</strong>
                        <input
                            type="file"
                            name="gallery"
                            id="input-property-gallery"
                            className="input-property"
                            multiple accept="image/*"
                            onChange={handleGalleryChange}
                        />
                        {validationData.gallery && <small className="text-danger">La gallery è obbligatoria</small>}
                    </div>
                    {previewGallery && (
                        <div className="card mb-3">
                            <ImgSlider arrayImg={previewGallery} />
                        </div>
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
                        {validationData.owner_fullname && <small className="text-danger">Il nome e cognome del proprietario sono obbligatori</small>}
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
                        {validationData.email && <small className="text-danger">L'email non è valida</small>}
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