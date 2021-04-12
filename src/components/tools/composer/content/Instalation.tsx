import Presentation from "../../../utils/presentation/Presentation";
import Title from "../../../utils/title/Title";

function Instalation() {
  const slides = [
    {
      imagePath: "/composer/instalation/1.png",
      description: "1"
    },
    {
      imagePath: "/composer/instalation/2.png",
      description: "2"
    },
    {
      imagePath: "/composer/instalation/3.png",
      description: "3"
    },
    {
      imagePath: "/composer/instalation/4.png",
      description: "4"
    },
    {
      imagePath: "/composer/instalation/5.png",
      description: "5"
    },
    {
      imagePath: "/composer/instalation/6.png",
      description: "6"
    },
    {
      imagePath: "/composer/instalation/7.png",
      description: "7"
    },
    {
      imagePath: "/composer/instalation/8.png",
      description: "8"
    },
    {
      imagePath: "/composer/instalation/9.png",
      description: "9"
    },
  ];
  return (
    <div className="container">
      <Title title="Instalación" />
      <p>Pasos para instalar composer:</p>
      <div className="col-7 mx-auto">
        <Presentation slides={slides} />
      </div>
    </div>
  );
}

export default Instalation;
