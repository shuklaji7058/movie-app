import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);
  return (
    <div onClick={() => setCount(count + 1)}>
      <h2>
        {title}
        <br />
        {count || null}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "💗" : "💞"}
      </button>
    </div>
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
