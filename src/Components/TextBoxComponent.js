import React, {useState} from 'react';

const TextBox = ({ label, placeholder, maxLength, initialValue }) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (event) => {
    setValue(event.target.value)
  };

  return (
    <div>
        {label && <label>{label}</label>}
        <input 
        type = "text"
        value = {value}
        onChange = {handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        />
        {maxLength && (
            <p>
             {value.length}/{maxLength} charcters   
            </p>
        )}
    </div>

  )};

  export default TextBox;