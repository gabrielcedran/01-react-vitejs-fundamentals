import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.backgroundImage}
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/gabrielcedran.png" />
                <strong>Don Bob</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20} />Edit Profile</a>
            </footer>
        </aside>
    )
}