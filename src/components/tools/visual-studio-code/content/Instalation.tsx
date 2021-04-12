import Presentation from "../../../utils/presentation/Presentation";
import Title from "../../../utils/title/Title";

function Instalation() {
  const slides = [
    {
      imagePath: "/visual-studio-code/instalation/1.png",
      description: "1. Aceptamos los terminos y condiciones."
    },
    {
      imagePath: "/visual-studio-code/instalation/2.png",
      description: "2. Puedes instalar Visual Studio Code en la ruta que desees.",
      note: "No olvides dónde lo estás instalando"
    },
    {
      imagePath: "/visual-studio-code/instalation/3.png",
      description: "3. Desmarcamos esta opción.",
      note: "Abriremos visual studio code de otra forma distinta a una aplicación normal, así que no necesitamos este atajo en el inicio."
    },
    {
      imagePath: "/visual-studio-code/instalation/4.png",
      description: "4. Marcamos las opciones de esta forma:",
      note: "Puedes marcar la opción de ícono en el escritorio, sin embargo, no la utilizarás."
    },
    {
      imagePath: "/visual-studio-code/instalation/5.png",
      description: "5. Pregúntate si realmente quieres instalar Visual Studio Code."
    },
    {
      imagePath: "/visual-studio-code/instalation/6.png",
      description: "6. Desmarca la opción, luego Finish."
    },
    {
      imagePath: "/visual-studio-code/instalation/6.png",
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
