
type titleProps = {
    titlePages: string
}

export default function TitlePages({ titlePages }: titleProps) {
    return (
        <div>
            <h1 className="text-xl md:text-3xl font-extrabold text-blue-950 mb-4">
                {titlePages}      </h1>
        </div>
    )
}
