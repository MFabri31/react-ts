import { useState } from "react"
import { Employee } from "../types"

const INITIAL_VALUES = {
    name: '',
    email: '',
    phone: ''
}


interface FormProps {
    addEmployee: (employee: Employee) => void
}

interface FormState {
    form: Employee
}

export const Form = ({ addEmployee }: FormProps) => {

    const [form, setForm] = useState<FormState['form']>(INITIAL_VALUES)

    const { name, email, phone } = form


    const clearForm = () => {
        setForm(INITIAL_VALUES)
    }


    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
        evt.preventDefault()

        if (name === "" || email === "" || phone === "") return

        addEmployee(form)

        clearForm()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange}
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        value={name}
                        required
                    />
                </div>
                <div>
                    <input onChange={handleChange}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        required
                    />
                </div>
                <div>
                    <input onChange={handleChange}
                        type="text"
                        placeholder="Teléfono"
                        name="phone"
                        value={phone} />
                </div>
                <button>Añadir</button>
            </form>
        </>
    )
}
