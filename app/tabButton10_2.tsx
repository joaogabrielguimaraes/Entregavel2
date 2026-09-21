type props = {
  name: string;
  OnChanged: () => void;
  selected: boolean;
};

export default function Button({ name, OnChanged, selected }: props) {
  return (
    <div>
      <button
        onClick={OnChanged}
        style={{
          backgroundColor: selected ? "#007bff" : "#e0e0e0",
        }}
      >
        {name}
      </button>
    </div>
  );
}
