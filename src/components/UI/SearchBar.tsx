import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center py-10 md:py-20 ">
      <div className="w-full max-w-2xl">
        <div className="flex items-center px-3 bg-white shadow-lg rounded-2xl overflow-hidden ring-1 ring-slate-100">
          <div className="pl-4">
            <MagnifyingGlassIcon className="w-6 h-6 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
