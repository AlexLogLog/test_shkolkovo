import Link from 'next/link'
import Header from '../components/Header';
import { useStoreon } from 'storeon/react'
import Page from '../components/Page';


function Posts({ posts }) {
    const { dispatch, user, loginOn, info, pageNum } = useStoreon('user', 'loginOn', 'info', 'pageNum')

    let numberPage = pageNum;
    const countPostsPage = 5;
    const oneIndexPost = numberPage * countPostsPage;
    const endIndexPost = oneIndexPost + countPostsPage;
    const postsNew = posts.slice(oneIndexPost, endIndexPost)



    const pageOn = (pageNumber) => {
        dispatch('page/num', pageNumber)
    }

    return (
        <div>
            <Header />
            {loginOn ?
                <div className='posts__block'>
                    <h2 className='posts__info-page'>Страница №{numberPage + 1}</h2>
                    {postsNew.map((post) => {

                        return (
                            <div className='posts__block-text' key={post.id}>

                                <p className='posts__text posts__text_title'>{post.title}</p>
                                <p className='posts__text'>{post.body}</p>
                                <Link href={`/posts/${post.id}`} >
                                    <button className='posts__button'>Комментарии</button>
                                </Link>

                            </div>
                        )
                    })}
                    <Page countPostsPage={countPostsPage} countPosts={posts.length} pageOn={pageOn} />
                </div>
                : <>
                    <div className='posts__no-auth'>
                        <Link href='/'>
                            <a className='posts__a'>Вы не авторизованы. Необходимо войти.</a>
                        </Link>
                    </div>
                </>}

            <style jsx>
                {
                    `
                    .posts__no-auth {
                        text-align: center;
                        padding-top: 100px;
                    }
                    .posts__a {
                        text-decoration: none;
                        color: black;
                        opacity: 0.6;
                        text-align: center;
                        font-size: 30px;
                    }
                    .posts__a:hover{
                        opacity: 1;
                    }
                    .posts__block {
                        width: 90%;
                        margin: 0 auto;
                    }
                    .posts__block-text {
                        padding-bottom: 40px;
                    }

                    .posts__text {
                        font-size: 24px;
                        margin:0;
                        padding:10px;

                    }
                    .posts__text_title {
                        font-size: 26px;
                        text-align: center;
                        border-bottom: solid 1px black ;
                        padding: 20px;
                    }
                    .posts__button {

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

                    .posts__button:hover {
                        background: #0000CD;
                    }

                    .posts__info-page {
                        padding-top: 20px;
                    }
                    .posts__not-auth {
                        text-align: center;
                        padding: 100px 0;
                        color: grey;
                        font-size: 36px;
                        font-weight: bold;
                    }
`
                }

            </style>
        </div>
    )
}

export default Posts;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()

    return {
        props: { posts }, // will be passed to the page component as props
    }
}