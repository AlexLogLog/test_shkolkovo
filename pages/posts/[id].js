import { useRouter } from "next/router"
import Header from "../../components/Header"
import Link from 'next/link'
import { useStoreon } from 'storeon/react'


export default function Idpost({ comments, post, myUser }) {
    const { query } = useRouter()

    return (
        <>
            <Header />
            <div className='post__block'>
                <div className='post__block-info'>
                    <h1 className='post__block-text'> Пост № {query.id}.</h1>

                    <Link href='/posts'>
                        <button className='post__button'>Назад</button>
                    </Link>
                </div>
                <p className='post__author'>Автор: {myUser.username}</p>
                <p className='post__text post__text_title'>{post.title}</p>
                <p className='post__text post__text_body'>{post.body}</p>
                {/* <p className='post__text'>Комментарии: </p> */}

                <div className='comments__block'>
                    {
                        comments.map((comment) => {
                            return (
                                <div className='comment__block' key={comment.id}>
                                    <p className='p comment__email'>{comment.email}</p>
                                    <p className='p comment__body'>{comment.body}</p>
                                </div>)
                        })
                    }
                </div>

            </div>

            <style jsx>
                {
                    `
.post__block {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.post__block-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post__block-text {
    margin: 0;
    padding: 20px 0;
    font-size: 26px;
}

.post__author {
    margin:0;
    
    margin-left: auto;
    margin-right: 0;
    padding: 30px 0;
    font-size: 26px;
    font-weight: bold;
}
.post__text {
    font-size: 24px;
    margin:0;
    padding:10px;

}
.post__text_title {
    font-size: 26px;
    text-align: center;
    border-bottom: solid 1px black ;
    padding: 20px;
}

.post__text_body {
    padding-bottom: 40px;
}
.post__button {
    width: 150px;
    height: 30px;
    color: #fff;
    float: right;
    padding: 5px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    user-select: none;
    background: #00008B;
    outline: none;

}

.post__button:hover {
    background: #0000CD;
}

.comments__block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.comment__block {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

	font-size: 20px;
	font-weight: normal;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.p {
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 24px;
  position: relative;
    padding: 10px ;
  border-radius: 25px;
  

}

.p:before, p:after {
    content: "";
	position: absolute;
    bottom: 0;
    height: 25px;
  }

.comment__email {
    font-size: 16px;
    text-align: right;
    margin: 0;
    padding: 0 10px;
}

.comment__body {
    font-size: 24px;
    text-align: right;
    margin: 0 ;
    padding: 17px;
	color: white; 
	background: #00008B;
	align-self: flex-end;		
}
.comment__body:before {
		right: -7px;
    width: 20px;
    background-color: #00008B;
		border-bottom-left-radius: 16px 14px;
	}

	.comment__body:after {
		right: -26px;
    width: 26px;
    background-color: white;
		border-bottom-left-radius: 10px;
	}
}
`
                }

            </style>
        </>
    )
}


Idpost.getInitialProps = async (ctx) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}/comments`)
    const comments = await response.json()
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`)
    const post = await response2.json()
    const response3 = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const user = await response3.json()
    const myUser = user.find((us) => us.id === post.userId)
    return {
        comments,
        post,
        myUser
    }
}

