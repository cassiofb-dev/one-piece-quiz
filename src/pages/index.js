import QuizBackground from '../components/QuizBackground';
import QuizContainer  from '../components/QuizContainer';
import GitHubCorner   from '../components/GitHubCorner';
import QuizLogo       from '../components/QuizLogo';
import Widget         from '../components/Widget';
import Footer         from '../components/Footer';

import {bg, title, description, gitURL} from '../db.json';

export default function Home() {
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={gitURL} />
    </QuizBackground>
  );
}
