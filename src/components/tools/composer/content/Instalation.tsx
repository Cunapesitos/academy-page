import Presentation from "../../../utils/presentation/Presentation";
import Title from "../../../utils/title/Title";

function Instalation() {
  const slides = [
    {
      imagePath: "/composer/instalation/1.png",
      description: "1. Seleccionar la opción recomendada."
    },
    {
      imagePath: "/composer/instalation/2.png",
      description: "2. Marcar la opción Developer mode."
    },
    {
      imagePath: "/composer/instalation/3.png",
      description: "3. Puedes instalar Composer en la ruta que desees.",
      note: "No olvides dónde lo estás instalando"
    },
    {
      imagePath: "/composer/instalation/4.png",
      description: "4. Selecciona la ruta donde tienes PHP instalado.",
      note: "Si tienes XAMPP instalado, ve a la ruta donde instalaste xampp, entras a la carpeta php y selecciona el archivo php.exe"
    },
    {
      imagePath: "/composer/instalation/5.png",
      description: "5. Siguiente."
    },
    {
      imagePath: "/composer/instalation/6.png",
      description: "6. Pregúntate si realmente quieres instalar Composer."
    },
    {
      imagePath: "/composer/instalation/7.png",
      description: "7. Siguiente."
    },
    {
      imagePath: "/composer/instalation/8.png",
      description: "8. Desmarca la opción para que no te rediriga a la documentación."
    },
    {
      imagePath: "/composer/instalation/9.png",
      description: "9. Abre una terminal (cmd) y ejecuta el comando:",
      code: "composer -v",
      note: "Aún no tenemos la sección de problemas, si tienes alguno, por favor contáctanos por discord. (link en el pié de la página)"
    },
    {
      imagePath: "/composer/instalation/9.png",
      description: "Listo!",
      note: ":)"
    },
  ];
  return (
    <div className="container">
      <Title title="Instalación" />
      <p>Pasos para instalar Composer:</p>
      <div className="col-7 mx-auto">
        <Presentation slides={slides} />
      </div>
    </div>
  );
}

export default Instalation;
