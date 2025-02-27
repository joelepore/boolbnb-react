import { useState } from "react"

const InputNumber = ({ label, onChange, value }) => {

    const handleDecrement = () => {
        if (value > 1) {
            onChange(value - 1);
        }
    }

    const handleIncrement = () => {
        onChange(value + 1);
    }

    return (
        <div className="text-center">
            <strong>{label}</strong>
            <div className="d-flex justify-content-center input-number mt-2 gap-3 align-items-center">
                <button className="input-number-button" onClick={handleDecrement}>-</button>
                <strong>{value}</strong>
                <button className="input-number-button" onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default InputNumber