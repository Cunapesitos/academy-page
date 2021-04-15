import Title from "../utils/title/Title";

function Home() {
  return (
    <div className="ct container">
      <div className="row">
        <div className="col">
          <Title title="Bienvenido!" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Esta es la sección académica, aqui podrás encontrar algunas guías para entender mejor algún tema de tu interés.
          </p>
          <p>
            Aprender lo escencial para nuevas tecnologías ó para poder ponerte al día en algunas materias de la universidad.
          </p>
          <p>
            Esperamos que este proyecto sea de tu agrado y te pueda ayudar en tu camino al éxito :)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
