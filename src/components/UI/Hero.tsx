interface HeroProps {
  onScrollToCards: () => void;
}

export default function Hero({ onScrollToCards }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-4">
        Agenda <span className="text-primary">Inmo</span>
      </h1>


      <p className="text-lg text-gray-600 max-w-2xl my-10">
        Gestioná clientes, propiedades y tareas de tu inmobiliaria con una plataforma moderna, 
        simple y accesible desde cualquier dispositivo.
      </p>

      <button
        onClick={onScrollToCards}
        className="btn btn-primary px-8 py-3 text-lg rounded-lg shadow-md hover:shadow-lg transition"
      >
        Empezar ahora →
      </button>
    </div>
  );
}
