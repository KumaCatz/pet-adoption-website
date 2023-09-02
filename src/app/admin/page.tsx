import AddPet from "./components/AddPet"
import Dashboard from "./components/Dashboard"
import Pets from "./components/Pets"

function Admin() {

  return (
    <>
      <AddPet />
      <Dashboard />
      <Pets />
    </>
  )
}

export default Admin