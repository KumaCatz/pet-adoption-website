function Admin() {

  return (
    <form>
      <label>Pet</label>
      <input type='text' />
      <label>Name</label>
      <input type='text' />
      <label>Adoption Status</label>
      <input type='radio'/>
      <label>fostered</label>
      <input type='radio'/>
      <label>adopted</label>
      <input type='radio'/>
      <label>available</label>
      <label>Picture</label>
      <input type='file' />
      <label>Height</label>
      <input type='number' />
      <label>Weight</label>
      <input type='number' />
      <>Color</>
      <>Bio</>
      <>Hypoallergenic</>
      <>Dietary Restrictions</>
      <>Breed</>
    </form>
  )
}

export default Admin