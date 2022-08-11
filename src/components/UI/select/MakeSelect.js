import React from 'react'

import './MakeSelect.scss'

const MakeSelect = ({options, setValue, defaultOption}) => {
	return(
		<select className='custom_select' onChange={(e) => setValue(e.target.value)}>
			<option value='remove_value'>{defaultOption}</option>
			{options.map((opt) =>{
				return <option key={opt.id} value={opt.value}>{opt.name || opt.value}</option>	
			})}
		</select>
	)
}
export default MakeSelect