import { useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "💗" : "💞"}
      </button>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>Functional Arrow Component</h1>

      <Card title="anishh shukla" />
    </>
  );
};
export default App;
