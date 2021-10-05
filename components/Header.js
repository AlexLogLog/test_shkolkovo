import Link from 'next/link'
import { Children } from 'react';

function Header({ children }) {
    return (
        <div>
            <div className='header__block'>
                <Link href='/'>
                    <a className='header__link'>Главная страница</a>
                </Link>
                <Link href='/posts'>
                    <a className='header__link'>Посты</a>
                </Link>
            </div>


            {children}
            <style jsx>
                {`
                    .header__block {
                        width: 90%;
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        padding:  30px 0;
                        background-color: #00008B;

                    }
                    .header__link {
                        text-decoration: none;
                        color: white;
                        font-size: 24px;
                    }

                    .header__link:hover {
                        text-shadow: 1px 1px 2px black, 0 0 1em red;
                    }
                    `}
            </style>
        </div>

    )
}

export default Header;