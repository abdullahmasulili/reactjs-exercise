import { useState } from "react";

export default function useInput(defualtValue, validationFn) {
  const [inputValue, setInputValue] = useState(defualtValue);
  const [isEdited, setIsEdited] = useState(false);

  const valueIsValid = validationFn(inputValue);

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setIsEdited(false);
  }

  function handleInputBlur() {
    setIsEdited(true);
  }

  return {
    inputValue,
    handleInputChange,
    handleInputBlur,
    isInvalid: isEdited && !valueIsValid,
  };
}
