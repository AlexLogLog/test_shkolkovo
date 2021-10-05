import Header from "../components/Header";
import { useStoreon } from 'storeon/react'
import { mainApi } from '../components/MainApi'
import Form from "../components/Form";
import { useEffect } from "react";

export default function Index() {


    const { dispatch, loginOn, info } = useStoreon('loginOn', 'info')

    function login(user) {
        mainApi
            .getUser(user)
            .then((res) => {
                if (res.length === 1) {
                    dispatch('login/on')
                    dispatch('info/load', res[0])
                } else {
                    alert('Ошибка входа')
                }
            })
            .catch(() => alert('Ошибка входа'))
    }
    return (
        <>
            <Header>

                {!loginOn ? <Form click={login} formInfo={'Вы должны авторизоваться.'} buttonText={'Войти'} link={'/registration'} linkText={'Еще не зарегистрированы?'} />
                    :
                    <div className='loginOn__block'>
                        <p className='loginOn__info'>{info.username}, добро пожаловать! </p>
                        <button onClick={() => dispatch('login/end')
                        } className='loginOn__button'>Выйти</button>
                    </div>
                }

                <style jsx>
                    {`
                .loginOn__block {
                    width: 90%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .loginOn__info {
                    font-size: 28px;
                    margin:0;
                    padding:80px 0;
                }
                .loginOn__button {
                    width: 250px;
                    margin-top: 20px;
                    height: 50px;
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

                .loginOn__button:hover {
                    background: #0000CD;
                }


                    `}
                </style>
            </Header>
        </>
    )
}

