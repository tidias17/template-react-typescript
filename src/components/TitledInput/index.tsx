import TextField from '@mui/material/TextField';

export type TitledInputProps = {
  label: string;
}

const TitledInput = ({label,}:TitledInputProps) => {

  return (
    <>
      <TextField
        label={label}
      />
    </>
  );
}

export default TitledInput;
