export default function AddPet() {
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
      <label>Color</label>
      <input type='text' />
      <label>Bio</label>
      <textarea />
      <label>Hypoallergenic</label>
      <input type='radio'/>
      <label>yes</label>
      <input type='radio'/>
      <label>no</label>
      <label>Dietary Restrictions</label>
      <input type='radio'/>
      <label>yes</label>
      <input type='radio'/>
      <label>no</label>
      <label>Breed</label>
      <input type='text' />
    </form>
  )
}