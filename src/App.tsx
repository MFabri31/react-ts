import { useState } from 'react'
import { ListEmployee } from './components/ListEmployee'
import { Employee } from './types'
import { Form } from './components/Form'

interface AppState {
  employees: Array<Employee>
}

function App() {
  const [employees, setEmployees] = useState<AppState['employees']>([])

  const addEmployee = (employee: Employee): void => {
    setEmployees(employees => [...employees, employee])
  }


  return (
    <>

      <h2>Agregar empleados</h2>

      <Form addEmployee={addEmployee} />
      <main>
        <ListEmployee employees={employees} />
      </main>

    </>
  )
}

export default App
