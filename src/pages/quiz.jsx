import { useRouter } from 'next/router';

import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import db from '../db.json';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

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
          <Widget.Content>
            {`Seja bem vindo ao quiz ${name}`}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.gitURL} />
    </QuizBackground>
  );
}
