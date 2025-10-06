import { BuildingOffice2Icon, PlusIcon } from "@heroicons/react/24/outline";
import ButtonAgregar from "../components/UI/ButtonAgregar";
import TitlePages from "../components/UI/TitlePages";
import Card from "../components/UI/Card";

export default function ThirdParties() {
  return (
    <div>
  <div className="grid my-4 md:flex md:items-center md:justify-between">
        <TitlePages titlePages="Propiedades Terceros" />
        <ButtonAgregar  titleButton="Agregar Propiedad" icon={<PlusIcon className="h-4 w-4" />} />
      </div>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8 ">
        <Card title="Inmobiliaria" description="ubicacion + precio" icon={<div className="bg-purple-100 p-4 rounded-full text-purple-600">
          <BuildingOffice2Icon className="h-6 w-6" />
        </div>} footer={<span className="text-purple-600 font-medium">Ver más →</span>}
        />
        <Card title="Inmobiliaria" description="ubicacion + precio" icon={<div className="bg-purple-100 p-4 rounded-full text-purple-600">
          <BuildingOffice2Icon className="h-6 w-6" />
        </div>} footer={<span className="text-purple-600 font-medium">Ver más →</span>}
        />
        <Card title="Inmobiliaria" description="ubicacion + precio" icon={<div className="bg-purple-100 p-4 rounded-full text-purple-600">
          <BuildingOffice2Icon className="h-6 w-6" />
        </div>} footer={<span className="text-purple-600 font-medium">Ver más →</span>}
        />
        <Card title="Inmobiliaria" description="ubicacion + precio" icon={<div className="bg-purple-100 p-4 rounded-full text-purple-600">
          <BuildingOffice2Icon className="h-6 w-6" />
        </div>} footer={<span className="text-purple-600 font-medium">Ver más →</span>}
        />
        <Card title="Inmobiliaria" description="ubicacion + precio" icon={<div className="bg-purple-100 p-4 rounded-full text-purple-600">
          <BuildingOffice2Icon className="h-6 w-6" />
        </div>} footer={<span className="text-purple-600 font-medium">Ver más →</span>}
        />
      </div>
    </div>
  )
}
