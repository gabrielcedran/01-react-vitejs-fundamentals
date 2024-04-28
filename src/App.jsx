import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielcedran.png',
      name: 'Gabriel Cedran',
      role: 'Software Engineer'
    },
    post: {
      publishedAt: new Date('2024-03-12 20:00:00Z'),
      content: [ // ideally it'd be markdown. But for simplicity, this structure is used
        { type: 'paragraph', content: 'Hello' },
        { type: 'paragraph', content: 'This is a new post' },
        { type: 'paragraph', content: 'thanks for reading' },
        { type: 'link', content: 'https://github.com/gabrielcedran' },
      ]
    }
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabrielcedran.png',
      name: 'Don Bob',
      role: 'CTO'
    },
    post: {
      publishedAt: new Date('2024-04-12 19:00:00Z'),
      content: [ // ideally it'd be markdown. But for simplicity, this structure is used
        { type: 'paragraph', content: 'Hello' },
        { type: 'paragraph', content: 'Are you expert in css?' },
        { type: 'paragraph', content: 'Contact me.' },
        { type: 'link', content: 'https://github.com/gabrielcedran' },
      ]
    }
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
        {
          posts.map(({author, post}) => (
            <Post 
              author={author}
              post={post}
            />
          ))
        }
        </main>
      </div>

    </div>
  )
}



