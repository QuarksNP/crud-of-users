import { ListOfUsers } from '../features/users'
import { CreateUserForm } from '../features/users'

export default function UsersPage() {
    return (
        <section>
            <ListOfUsers />
            <CreateUserForm />
        </section>
    )
}