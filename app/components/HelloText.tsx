import { useTypewriter, Cursor } from "react-simple-typewriter";

const words = [
  "Hi",
  "Hello",
  "Namaste",
  "Bonjour",
  "Hola",
  "Zdravstvuyte",
  "Ciao",
  "Selam",
  "Olá",
  "Anyoung haseyo",
  "Nǐ hǎo",
];

export function HelloText() {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 80, // speed of typing
    deleteSpeed: 80,
  });

  return (
    <div>
      <p className="text-orange-300 text-3xl font-extrabold karla lg:text-7xl">
        “ {text} ”
      </p>
    </div>
  );
}
