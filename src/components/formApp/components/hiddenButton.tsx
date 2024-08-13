export default function HiddenButton() {
  return (
    <button onClick={() => { alert('Sempre esconda sua senha') }}>
      ?
    </button>
  );
}