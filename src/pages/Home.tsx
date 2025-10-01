import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import { BuildingOffice2Icon, UsersIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full px-6 mx-auto py-12">
      <Link to="/clientes">
        <Card title='Clientes' description='Gestiona tu base de datos de clientes' icon={<div className="bg-blue-100 p-4 rounded-full text-blue-600">
<UsersIcon  className="h-6 w-6"/>
        </div>}
          footer={<span className="text-blue-600 font-medium">Acceder →</span>}
        />
      </Link>
       <Link to="/propiedades">
        <Card title='Propiedades'  description="Administra propiedades en venta y alquiler" icon={<div className=" p-4 rounded-full bg-green-100  text-green-600">
          <HomeIcon className="h-6 w-6" />
        </div>}
          footer={<span className="text-green-600 font-medium">Acceder →</span>}
        />
      </Link>
      <Link to='/propiedades-terceros'>
      <Card title="Propiedades Terceros" description="Gestiona propiedades de otros agentes y colaboraciones"  icon={<div className=" bg-purple-100 p-4 rounded-full text-purple-600 ">
          <BuildingOffice2Icon className="h-6 w-6" />

        </div>}           footer={<span className="text-purple-600 font-medium">Acceder →</span>}
/>
      </Link>
    </div>
  )
}
