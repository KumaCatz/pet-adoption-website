export default function SearchBar() {
  return(
    <>
    <div>Basic Search</div>
      <label htmlFor="pet">types of pets available:</label>
      <select name='pet' id='pet'>
        <option value="thing">thing</option>
        types of pets available list
      </select>
    <div>Advanced Search</div>
      <label htmlFor="status">Status:</label>
      <input type='checkbox' name='fostered' />fostered
      <input type='checkbox' name='adopted' />adopted
      <input type='checkbox' name='available' />available      
    </>
  )
}