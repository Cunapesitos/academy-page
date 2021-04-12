import Presentation from "../../../utils/presentation/Presentation";
import Title from "../../../utils/title/Title";

function Instalation() {
  const slides = [
    {
      imagePath: "/git/instalation/1.png",
      description: "1. Siguiente."
    },
    {
      imagePath: "/git/instalation/2.png",
      description: "2. Puedes instalar Git en la ruta que desees.",
      note: "No olvides dónde lo estás instalando"
    },
    {
      imagePath: "/git/instalation/3.png",
      description: "3. Marcamos las opciones de esta forma:",
      note: "Puedes marcar la opción de ícono en el escritorio, sin embargo, no la utilizarás."
    },
    {
      imagePath: "/git/instalation/5.png",
      description: "5. Esta pantalla no es la que sigue.",
      note: "Dale click a siguiente, siguiente, siguiente, hasta llegar a esta pantalla."
    },
    {
      imagePath: "/git/instalation/6.png",
      description: "6. Instalando..."
    },
    {
      imagePath: "/git/instalation/7.png",
      description: "7.Desmarca las opciones para no abrir Git y para que no te rediriga a la documentación."
    },
    {
      imagePath: "/git/instalation/7.png",
      description: "Listo!",
      note: ":)"
    },
  ];
  return (
    <div className="container">
      <Title title="Instalación" />
      <p>Pasos para instalar Visual Studio Code:</p>
      <div className="col-7 mx-auto">
        <Presentation slides={slides} />
      </div>
    </div>
  );
}

export default Instalation;
