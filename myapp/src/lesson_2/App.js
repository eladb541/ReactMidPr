import { useState } from 'react';
import ChildComp from './ChildComp';

const App = () => {
  const [names, setNames] = useState(['Ron', 'Gili', 'Dana', 'John']);

  return (
    <div>
      {names.map((name, index) => {
        return <ChildComp key={index} name={name} />;
      })}
    </div>
  );
};

export default App;