import { TaskCard } from "../task-card/task-card";
import styles from "./task-list.module.css";

type TaskListProps = {
    tasks: any[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
    return (
        <section className={styles.taskListContainer}>
            {
                tasks.map(task => {
                    return (
                        <TaskCard
                            title={task.title}
                            description={task.description}
                        />
                    )
                })
            }
        </section>
    )
}
