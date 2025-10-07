import type { ReactNode } from "react"

type ButtonProps ={
    titleButton?: string;
    icon?: ReactNode;
      footer?: ReactNode;

}
export default function ButtonAgregar({titleButton, icon, footer}: ButtonProps) {
  return (
    <div className="flex justify-end">
    <button className='btn btn-primary btn-sm md:btn-md' >
        {titleButton}{icon}
      {footer && <div className="mt-4 text-center pt-3">{footer}</div>}
    </button>
    </div>
  )
}
