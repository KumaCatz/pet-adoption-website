'use client'

import { POST } from "@/utils/api"
import { useReducer } from "react"
import { petDataReducer, petDataReducerActions } from '@/app/reducers/petDataReducer'

export default function AddPet() {
  const [petData, dispatchPetData] = useReducer(petDataReducer)

  const handleChange = (key, value) => {
    dispatchPetData({
      type: petDataReducerActions.UPDATE_KEY_VALUE,
      payload: {
        key,
        value
      }
    })
  }

  const submitPet = async (e) => {
    e.preventDefault()

    console.log('hey')
    POST('/pets/register', petData, {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const itemStyle = 'mx-8 border-solid border-black border-2 p-8 flex items-center rounded'

  return (
    <>
    <form className='flex flex-wrap justify-center'>
      <div className={itemStyle}>
        <label htmlFor="pet">Pet</label>
        <input id="pet" type='text' onChange={(e) => handleChange('pet', e.target.value)} />
      </div>
      <div className={itemStyle}>
        <label htmlFor="name">Name</label>
        <input id='name' type='text' />
      </div>
      <div className={itemStyle}>
        <p>Adoption Status</p>
        <input id='fostered' type='radio' name="adoption_status" value="fostered" onChange={(e) => handleChange('adoption_status', e.target.value)} />
        <label htmlFor="fostered">fostered</label>
        <input id="adopted" type='radio' name="adoption_status" value="adopted" onChange={(e) => handleChange('adoption_status', e.target.value)} />
        <label htmlFor="adopted">adopted</label>
        <input id='available' type='radio' name="adoption_status" value="available" onChange={(e) => handleChange('adoption_status', e.target.value)} />
        <label htmlFor="available">available</label>
      </div>
      <div className={itemStyle}>
        <label htmlFor="picture">Picture</label>
        <input id='picture' type='file' onChange={(e) => handleChange('picture', e.target.value)} />
      </div>
      <div className={itemStyle}>
        <label htmlFor="height">Height</label>
        <input id='height' type='number' onChange={(e) => handleChange('height', e.target.value)} />
      </div>
      <div className={itemStyle}>
        <label htmlFor="weight">Weight</label>
        <input id='weight' type='number' onChange={(e) => handleChange('weight', e.target.value)} />
      </div>
      <div className={itemStyle}>
        <label htmlFor="color">Color</label>
        <input id='color' type='text' onChange={(e) => handleChange('color', e.target.value)} />
      </div>
      <div className={itemStyle}>
        <label htmlFor="bio">Bio</label>
        <textarea id='bio' onChange={(e) => handleChange('bio', e.target.value)} />
      </div>
      <div className={itemStyle}>
        <p>Hypoallergenic</p>
        <input id="yes" type='radio' name="hypoallergenic" value="yes" onChange={() => handleChange('hypoallergenic', e.target.value)} />
        <label>yes</label>
        <input id="no" type='radio' name="hypoallergenic" value="no" onChange={() => handleChange('hypoallergenic', e.target.value)} />
        <label>no</label>
      </div>
      <div className={itemStyle}>
        <p>Dietary Restrictions</p>
        <input id="yes" type='radio' name="dietary_restrictions" value="yes" onChange={() => handleChange('dietary_restrictions', e.target.value)} />
        <label>yes</label>
        <input id="no" type='radio' name="dietary_restrictions" value="no" onChange={() => handleChange('dietary_restrictions', e.target.value)} />
        <label>no</label>
      </div>
      <div className={itemStyle}>
        <label htmlFor="breed">Breed</label>
        <input id='breed' type='text' onChange={() => handleChange('breed', e.target.value)} />
      </div>
      <div className="flex-[0_1_100%] text-center">
        <button onClick={submitPet} className="m-4 p-2 border-solid border-black border-2">ADD</button>
      </div>
    </form>
    <button onClick={() => console.log(petData)}>petForm</button>
    </>
  )
}

{/* possibly make a list for one to be below the other? and use list item instead? */}