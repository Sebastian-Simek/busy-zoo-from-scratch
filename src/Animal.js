
export default function Animal({ animal }) {
  return (
    <div>
      {animal === 'duck' && '🦆'}
      {animal === 'goose' && '🦢'}
      {animal === 'chicken' && '🐓'}
    </div>
  );
}
