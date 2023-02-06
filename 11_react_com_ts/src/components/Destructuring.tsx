import * as React from 'react';

export interface IDestructuringProps {
  title: string
  content: string
  comentsQty: number
  tags: string[];
  // 8 - enum
  category: Category;
}

export enum Category {
  JS = 'Javascript',
  TS = 'Typescript',
  P = 'Python'
}

export default function Destructuring({ title, content, comentsQty, tags, category}: IDestructuringProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {comentsQty}</p>
      <div>
        {tags.map(tag => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}
