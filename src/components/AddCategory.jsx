
import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => setInputValue(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();

        if (value.length <= 1) return;
            onAddCategory(value);
            setInputValue("");
    }

  return (
    <>
        <form onSubmit={ onSubmit }>
            <input type="text" 
                placeholder="Buscar Gif's"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}

