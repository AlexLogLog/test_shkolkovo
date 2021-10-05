import Link from "next/link";
import { useStoreon } from 'storeon/react'


export default function Form(props) {
    const {
        click,
        formInfo,
        buttonText,
        link,
        linkText
    } = props;
    const { dispatch, user, loginOn, info } = useStoreon('user', 'loginOn', 'info')



    function handleSubmit(e) {
        e.preventDefault();
        click(user)
    }

    const change = (e) => {
        dispatch('user/info', { ...user, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={handleSubmit} className='form__block'
        >
            <p className='form__info'>{formInfo}</p>

            <input className='form__input'
                placeholder='Введите имя'
                type='text'
                name='username'
                onChange={change}
            />
            <input className='form__input'
                placeholder='Пароль'
                type='password'
                name='password'
                onChange={change}
            />

            <button className='form__button'>{buttonText}</button>
            <Link href={link}>
                <a className='form__a'>{linkText}</a>
            </Link>

            <style jsx> {`
                .form__a {
                    text-decoration: none;
                    padding: 10px;
                    color: black;
                    opacity: 0.6;
                }
                .form__a:hover{
                    opacity: 1;
                }
                .form__block {
                    width: 90%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .form__info {
                    font-size: 28px;
                    margin:0;
                    padding:80px 0;
                }
                .form__input  {
                    margin-bottom: 20px;
                    border: 1px solid #cccccc;
                    padding:  5px 10px;
                    border-radius: 3px; 
                    background: #ffffff !important; 
                    outline: none; 
                    height: 40px; 
                    width: 300px; 
                    color: black; 
                    font-size: 11px;
                }
                .form__button {
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

                .form__button:hover {
                    background: #0000CD;
                }

                `}

            </style>
        </form>
    )
}