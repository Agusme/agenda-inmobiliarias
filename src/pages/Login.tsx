import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-lg p-8">
        {/* Logo / título */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">
            Agenda <span className="text-blue-950">Inmo</span>
          </h1>
          <h2 className="text-lg font-semibold text-slate-600 mt-2">
            Inicio de sesión
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Iniciá sesión para organizar tus clientes y propiedades.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="btn btn-primary w-full font-semibold rounded-xl flex items-center justify-center gap-2"
          >
            <LockClosedIcon className="w-5 h-5" />
            Ingresar
          </button>

          {/* Link inferior */}
          <p className="text-center text-sm text-slate-500 mt-4">
            ¿Olvidaste tu contraseña?{" "}
            <a href="#" className="text-primary hover:underline">
              Recuperar acceso
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
