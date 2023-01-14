import { HomeLayout } from "../../components/home-layout/home-layout";
import { TaskList } from "../../components/task-list/task-list";

const mockTasks = [
    {
        title: 'Code taka',
        description: 'Realizar um code taka todo dia'
    }
]

export const Home = () => {
    return (
        <HomeLayout>
            <TaskList tasks={mockTasks}/>
        </HomeLayout>
    )
}
