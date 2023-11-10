'use client'

import { POST } from "@/utils/api"

export default function AddPet() {

  const petData = 'hi'

  const submitPet = async (e) => {

    e.preventDefault()
    console.log('hey')
    POST('/pets/register', petData, {
      method: post,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const itemStyle = 'mx-8 border-solid border-black border-2 p-8 flex items-center rounded'

  return (
    <form className='flex flex-wrap justify-center'>
      <div className={itemStyle}>
        <label htmlFor="pet">Pet</label>
        <input id="pet" type='text' />
      </div>
      {/* <div className={itemStyle}>
        <label>Name</label>
        <input type='text' />
      </div>
      <div className={itemStyle}>
        <label>Adoption Status</label>
        <input type='radio'/>
        <label>fostered</label>
        <input type='radio'/>
        <label>adopted</label>
        <input type='radio'/>
        <label>available</label>
      </div>
      <div className={itemStyle}>
        <label>Picture</label>
        <input type='file' />
      </div>
      <div className={itemStyle}>
        <label>Height</label>
        <input type='number' />
      </div>
      <div className={itemStyle}>
        <label>Weight</label>
        <input type='number' />
      </div>
      <div className={itemStyle}>
        <label>Color</label>
        <input type='text' />
      </div>
      <div className={itemStyle}>
        <label>Bio</label>
        <textarea />
      </div>
      <div className={itemStyle}>
        <label>Hypoallergenic</label>
        <input type='radio'/>
        <label>yes</label>
        <input type='radio'/>
        <label>no</label>
      </div>
      <div className={itemStyle}>
        <label>Dietary Restrictions</label>
        <input type='radio'/>
        <label>yes</label>
        <input type='radio'/>
        <label>no</label>
      </div>
      <div className={itemStyle}>
        <label>Breed</label>
        <input type='text' />
      </div> */}
      <div className="flex-[0_1_100%] text-center">
        <button onClick={submitPet} className="m-4 p-2 border-solid border-black border-2">ADD</button>
      </div>
    </form>
  )
}

{/* possibly make a list for one to be below the other? and use list item instead? */}