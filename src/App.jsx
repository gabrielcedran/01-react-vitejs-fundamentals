import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          <Post 
            author="Don" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias ad dolorum optio! Facere doloribus itaque beatae maiores, hic fugiat repellendus eveniet sed aperiam. Voluptate sit doloribus nemo sunt explicabo!"
          />
          <Post 
            author="Bob" 
            content="Another beautiful post!"
          />
        </main>
      </div>

    </div>
  )
}



