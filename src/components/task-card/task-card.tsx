type TaskCardProps = {
    title: string;
    description?: string;
    labels?: any;
}

export const TaskCard = ({title, description}: TaskCardProps) => {
    return (
        <article>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </article>
    )
}
