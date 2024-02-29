import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate("/users")
    }

    return (
        <>
            <form onSubmit={ () => onSubmit() }>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactPage;