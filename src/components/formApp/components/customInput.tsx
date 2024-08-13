
interface IcustomInput {
  placeholder: string;
  type?: boolean;
  onChange: (value: string) => void;
  value: string;
}

function CustomInput(props: IcustomInput) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    props.onChange(content);
  };

  return (
    <>
      <input
        value={props.value}
        type={props.type ? "password" : "text"}
        placeholder={props.placeholder}
        onChange={handleChange}
        className="border-black w-full border-2 rounded-md p-2 text-center mb-3"
      />
      <br />
    </>
  );
}

export default CustomInput;
