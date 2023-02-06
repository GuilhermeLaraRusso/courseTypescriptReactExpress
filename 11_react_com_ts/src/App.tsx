import React, { createContext } from 'react';
import './App.css';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props

import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

// 6 - useState

import State from './components/State';

// 10 - Utilizando contexto
import Context from './components/Context';

// 9 - type
type textOrNull = string | null;

type fixed = 'Isso' | 'Ou' | 'Aquilo'

// 10 - context

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)



function App() {

  // 1 - variaveis
  const name: string = 'Matheus';
  const age: number = 30;
  const isWorking: boolean = true; 

  // 2 -funçoes

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  // 9 - type
  const myText:textOrNull = 'Tem Algum texto aqui'
  let mySecondText: textOrNull = null;
  
  // mySecondText = 'opa';

  const testandoFixed:fixed = 'Isso'

  // 10 - context

  const contextValue: IAppContext = {
    language: 'Javascript',
    framework: 'Express',
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='segundo' />
        <Destructuring title='Primeiro post' content='Algum conteúdo' comentsQty={10} tags={['js', 'ts']} category={Category.TS} />
        <Destructuring title='Primeiro post' content='Algum conteúdo' comentsQty={10} tags={['python']} category={Category.P} />
        <State />
        {myText && 'Tem um texto na variável'}
        {mySecondText && 'Tem um texto na variável'}
        <p>
          {testandoFixed}
        </p>
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
