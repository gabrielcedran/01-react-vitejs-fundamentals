import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/gabrielcedran.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Cedran</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="May 11th, 2022 at 09:30" dateTime="2022-05-11 09:30:11">Published 1 hour ago</time>
            </header>
            
            <div className={styles.content}>
                <p>Hey buddies</p>
                <p>How are you feeling in this grey weekend?</p>
                <p>All the best</p>
                <p><a href="#">https://github.com/gabrielcedran</a></p>
                <p><a href="#">#test</a>{' '}<a href="#">#software</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your comment</strong>

                <textarea 
                    placeholder="Your comment here"
                    required
                />

                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </article>
    )
}