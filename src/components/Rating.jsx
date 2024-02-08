import { useState } from "react"

const arItems = [1,2,3,4,5];

function Rating({onSubmit}) {
	const [cursor, setCursor] = useState([]);

	function handleKeyPress(event, index) {
		switch (event.code) {
			case "NumpadEnter":
			case "Enter":
			case "Space":
				setCursor(index)
				break;
			default:
				break;
		}
	}	

	return (
		<div className="rating">
			<ul className="rating__list">
				{
					arItems.map((content,index) => {
						return <li key={index} tabIndex={0} className="circle-element" aria-selected={index === cursor} onClick={() => setCursor(index)} 
										onKeyUp={(event) => handleKeyPress(event,index)}>
											<p>{content}</p>
										</li>
					})
				}
			</ul>
			<button type="submit" className="button" data-type="primary" onClick={() => onSubmit(cursor)}>Submit</button>
		</div>
	) 
} 

export default Rating