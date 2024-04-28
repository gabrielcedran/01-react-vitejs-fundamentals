import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabrielcedran.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Don Bob <span>(you)</span></strong>
                            <time dateTime='2022-05-11 09:30:11'>Around 1 hour ago</time>
                        </div>

                        <button title="Delete">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button><ThumbsUp/> Like <span>12</span></button>
                </footer>
            </div>
        </div>
    )
}