import React from "react";

export const Calculator = () => {
    return <div>
        <h3>Calculator</h3>
        <div style={{display: 'flex', gap: '5px'}}>
        <input type="text" name="" id="" />
        <select name="" id="">
            <option value="" hidden>Wybierz</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" readOnly />
        </div>
    </div>
}