import { useStoreon } from 'storeon/react'

export default function Page(props) {

    const { dispatch, pageNum } = useStoreon('pageNum')


    const {
        countPostsPage,
        countPosts,
        pageOn
    } = props;
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(countPosts / countPostsPage); i++) {
        pageNumbers.push(i + 1)
    }


    return (
        <div className='page__block'>
            {pageNumbers.map((number => (
                <a className={`${number !== pageNum + 1 ? "page__number" : "page__number page__number_active"
                    }`} href='#' key={number} onClick={() => pageOn(number - 1)}>{number}</a>
            )))

            }
            <style jsx>
                {`
                .page__block {
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px 0;
                }
                .page__number {
                    min-width: 35px;
                    min-height: 30px;
                    border: solid 1px grey;
                    text-align: center;
                    text-decoration: none;
                    padding: 5px;
                    font-size: 20px;
                color: black;
                }
                .page__number:hover {
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                }
                .page__number_active {
                    border: solid 2px black;
                }
`}
            </style>
        </div>
    )

}