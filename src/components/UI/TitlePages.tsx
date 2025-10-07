
type titleProps = {
    titlePages: string
}

export default function TitlePages({ titlePages }: titleProps) {
    return (
        <div>
            <h1 className="text-xl md:text-5xl text-center font-extrabold text-blue-950 mt-10">
                {titlePages}      </h1>
        </div>
    )
}
