import { useState } from "react";
import InputGroup from "./inputGroup";
import Box from "./box";

export default function CustomBox() {
  const [inputValues, setInputValues] = useState({
    inputValue1: '',
    inputValue2: '',
    inputValue3: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (field: string) => (e: string) => {
    setInputValues(prevValues => ({ ...prevValues, [field]: e }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <InputGroup
        inputValues={inputValues}
        showPassword={showPassword}
        onChange={handleChange}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <Box
        name={inputValues.inputValue1}
        email={inputValues.inputValue2}
        password={inputValues.inputValue3}
        show={showPassword}
      />
    </>
  );
}
