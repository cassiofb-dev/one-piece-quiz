import Widget from '../Widget';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <img
          src="https://media1.tenor.com/images/c7843a066b25a93e56628e5d1b21545c/tenor.gif?itemid=5278707"
          alt="loading"
          style={{
            width: '100%',
          }}
        />
      </Widget.Content>
    </Widget>
  );
}
