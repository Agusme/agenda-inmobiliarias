import type { ReactNode } from "react"

type ButtonProps ={
    titleButton?: string;
    icon?: ReactNode;
      footer?: ReactNode;

}
export default function ButtonAgregar({titleButton, icon, footer}: ButtonProps) {
  return (
    <button className='btn btn-primary mb-7 ' >
        {titleButton}{icon}
      {footer && <div className="mt-4 text-center pt-3">{footer}</div>}
    </button>
  )
}
