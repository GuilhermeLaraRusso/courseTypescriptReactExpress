import React, {useState, ChangeEvent} from 'react';

export interface IStateProps {
}

export default function State() {
  
  const [text, setText] = useState<string | null>('Testando Hook')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
