import { Employee } from "../types"

interface Props {
    employees: Array<Employee>
}

export function ListEmployee({ employees }: Props) {

    if (employees.length === 0) return <p>Lista vacía</p>

    return (
        <>
            <ul>
                {employees.map(employee => (
                    <li key={employee.name}>Nombre: {employee.name} / Email: {employee.email} / Teléfono: {employee.phone}</li>
                ))}
            </ul>

        </>
    )
}
