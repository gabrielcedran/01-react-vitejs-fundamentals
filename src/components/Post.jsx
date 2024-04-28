import {format, formatDistanceToNow} from 'date-fns'
import enGB from 'date-fns/locale/en-GB'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, post}) {

    const formattedPublisedAt = format(post.publishedAt, "do LLLL yyyy 'at' HH:mm'h'", {locale: enGB}) // date-fns vs Intl.DateTimeFormat
    const elapseTimeSincePublished = formatDistanceToNow(post.publishedAt, {addSuffix: true, locale: enGB})

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={formattedPublisedAt} dateTime={post.publishedAt.toISOString()}>
                    {elapseTimeSincePublished}
                </time>
            </header>
            
            <div className={styles.content}>
                {post.content.map((content) => {
                    if (content.type === 'paragraph') {
                        return <p>{content.content}</p>
                    }    
                    if (content.type === 'link') {
                        return <p><a href="#">{content.content}</a></p>
                    }
                    return ""
                })}
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

            <div className={styles.comments}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}