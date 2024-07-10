import React from 'react'

const Dropdown = ({title,options, func}) => {
  return (
    <div className='select'>                   {/*drop down popup */}
        <select defaultValue="0" name="format" id="format" onChange={func}>
            <option value="0"  >
            
                {title } 
            </option>
            {options.map((o,i)=> (
                <option  key={i} value={o}>{o.toUpperCase()}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown