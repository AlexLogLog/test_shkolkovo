import Header from "../components/Header";
import { useStoreon } from 'storeon/react'
import { mainApi } from '../components/MainApi'
import Form from "../components/Form";

export default function Registration() {


    function regist(user) {
        mainApi
            .newUser(user)
            .then((res) => {
                alert('Вы успешно зарегестрированы.')
            })
            .catch(() => alert('Ошибка входа'))
    }


    return (
        <Header>
            <Form click={regist} formInfo={'Вы должны зарегистрироваться.'} buttonText={'Зарегистрироваться'} link={'/'} linkText={'Уже зарегистрированы? Вход.'} />
        </Header>
    )

}