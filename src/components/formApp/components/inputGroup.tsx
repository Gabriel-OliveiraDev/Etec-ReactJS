import React from 'react';
import CustomInput from "./customInput";

interface InputGroupProps {
  inputValues: { [key: string]: string };
  showPassword: boolean;
  onChange: (field: string) => (e: string) => void;
  togglePasswordVisibility: () => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ inputValues, showPassword, onChange, togglePasswordVisibility }) => {
  const buttonText = showPassword ? "Mostrar Senha de Baixo" : "Esconder Senha de Baixo"

  return (
    <>
      <CustomInput placeholder="Insira Seu Nome" onChange={onChange('inputValue1')} value={inputValues.inputValue1} />
      <CustomInput placeholder="Insira Seu Email" onChange={onChange('inputValue2')} value={inputValues.inputValue2} />
      <CustomInput
        placeholder="Insira Sua Senha"
        onChange={onChange('inputValue3')}
        value={inputValues.inputValue3}
        type={showPassword}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={togglePasswordVisibility}
      >
        {buttonText}
      </button>
    </>
  );
};

export default InputGroup;
