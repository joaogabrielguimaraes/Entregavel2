type Props = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function RadioButton({ name, value, label, checked, onChange }: Props) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
