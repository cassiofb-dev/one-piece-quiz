import { useState } from 'react';
import { useRouter } from 'next/router';

import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const audio = document.getElementById('bgm');
    audio.loop = true;
    audio.load();
    audio.play();

    router.push(`/quiz?name=${name}`);
  }

  function handleChange(event) {
    setName(event.target.value);
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
          <form onSubmit={handleSubmit}>
            <Input
              name="nomeDoUsuario"
              onChange={handleChange}
              placeholder="Digite seu nome"
              value={name}
            />
            <Button type="submit" disabled={name.length === 0}>
              Jogar
            </Button>
          </form>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.gitURL} />
    </QuizBackground>
  );
}
