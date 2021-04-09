function Web({ match }: any) {
  const name = match.params.name;
  return (
    <div>
      <h3>
        Sección de {name} {process.env.REACT_APP_TEST}
      </h3>
      <p>
        Para poder dar los primeros pasos en {name}, necesitas tener instalado
        lo siguiente:
      </p>
      <ul>
        <li>A</li>
        <li>B</li>
      </ul>
    </div>
  );
}

export default Web;
