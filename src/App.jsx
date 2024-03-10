import { Post } from "./Post";
import { Header } from "./components/Header";
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Don" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias ad dolorum optio! Facere doloribus itaque beatae maiores, hic fugiat repellendus eveniet sed aperiam. Voluptate sit doloribus nemo sunt explicabo!"
      />
      <Post 
        author="Bob" 
        content="Another beautiful post!"
      />
    </div>
  )
}



