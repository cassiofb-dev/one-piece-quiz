/* eslint-disable no-console */

import { useState } from 'react';
import { useRouter } from 'next/router';

import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
    console.log('Fazendo uma submissão por meio do react');
  }

  function handleChange(infosDoEvento) {
    console.log(infosDoEvento.target.value);
    // State
    // name = infosDoEvento.target.value;
    setName(infosDoEvento.target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Form>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                placeholder="Digite seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </Widget.Form>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.gitURL} />
    </QuizBackground>
  );
}
