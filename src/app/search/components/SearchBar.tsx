export default function SearchBar() {
  return(
    <>
    <div>Basic Search</div>
      <label htmlFor="pet">types of pets available:</label>
      <select name='pet' id='pet'>
        <option value="dog">dog</option>
        <option value="cat">cat</option>
      </select>
    <div>Advanced Search</div>
      <label htmlFor="status">Status:</label>
      <input type='radio'/>
      <label>fostered</label>
      <input type='radio'/>
      <label>adopted</label>
      <input type='radio'/>
      <label>available</label>    
    </>
  )
}