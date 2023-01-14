import styles from './home-layout.module.css'

type HomeLayoutProps = {
    children: React.ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <main className={styles.homeLayoutContainer}>
            { children }
        </main>
    )
}
