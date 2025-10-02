import type { ReactNode } from "react"

type CardProps = {
    title?: string
    description?: string
    icon?: ReactNode
    footer?: ReactNode
    onClick?: () => void
    className?: string
}

export default function Card({ title, description, icon, footer, onClick, className }: CardProps) {
    return (
        <div onClick={onClick} className={`card bg-white shadow-lg rounden-2xl p-6 hover:shadow-2xl transition cursor-pointer ${className}`}>
            <div className="flex flex-col items-center text-center">
                {icon && <div className="mb-4">{icon}</div>}
                <h2 className="text-xl font-bold mb-2">
                    {title}
                </h2>
                {description && <p className="text-gray-500 mb-4">
                    {description}
                </p>}
                {footer && <div className="mt-2"> {footer} </div>}
            </div>

        </div>
    )
}
