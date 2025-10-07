import { PlusIcon, UserIcon } from "@heroicons/react/24/outline"
import Card from "../components/UI/Card"
import TitlePages from "../components/UI/TitlePages"
import ButtonAgregar from "../components/UI/ButtonAgregar"
import SearchBar from "../components/UI/SearchBar"

export default function Clients() {
  return (
    <div >
  <ButtonAgregar
    titleButton="Agregar cliente"
    icon={<PlusIcon className="h-4 w-4" />}
  />
  <TitlePages titlePages="Clientes" />
<SearchBar/>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-8 ">
        <Card title="Cliente" description="Busca hasta" icon={<div className="bg-blue-100 p-4 rounded-full text-blue-600">
          <UserIcon className="h-6 w-6" />
        </div>} footer={<span className="text-blue-600 font-medium">Ver más →</span>}
        />
        <Card title="Cliente" description="Busca hasta" icon={<div className="bg-blue-100 p-4 rounded-full text-blue-600">
          <UserIcon className="h-6 w-6" />
        </div>} footer={<span className="text-blue-600 font-medium">Ver más →</span>}
        />
        <Card title="Cliente" description="Busca hasta" icon={<div className="bg-blue-100 p-4 rounded-full text-blue-600">
          <UserIcon className="h-6 w-6" />
        </div>} footer={<span className="text-blue-600 font-medium">Ver más →</span>}
        />
        <Card title="Cliente" description="Busca hasta" icon={<div className="bg-blue-100 p-4 rounded-full text-blue-600">
          <UserIcon className="h-6 w-6" />
        </div>} footer={<span className="text-blue-600 font-medium">Ver más →</span>}
        />
      </div>
    </div>
  )
}
