import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import ButtonAgregar from "../components/UI/ButtonAgregar";
import TitlePages from "../components/UI/TitlePages";
import Card from "../components/UI/Card";

export default function Properties() {
  return (
    <div >
      <div className="flex justify-between my-10">
        <TitlePages titlePages="Propiedades" />
        <ButtonAgregar titleButton="Agregar propiedad" icon={<PlusIcon className="h-4 w-4" />}  />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-8 ">
        <Card icon={<div className="p-4 rounded-full bg-green-100 text-green-600">
          <HomeIcon className="h-6 w-6" />
        </div>} title="Ubicación" description="Precio prop" footer={<span className="text-green-600 font-medium">Ver más →</span>}/>
      </div>
    </div>
  )
}
