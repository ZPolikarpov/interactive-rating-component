import star from "./assets/images/icon-star.svg"
import Rating from "./components/Rating"
import thankyou from "./assets/images/illustration-thank-you.svg"
import { useState } from "react";

function App() {
	const [rating, setRating] = useState(null);

	function submitRating(iRating) {
		if (Number.isInteger(iRating)) {
			setRating(iRating + 1)
		} else {
			console.error("No Rating selected")
		}
	}

	function renderContent() {
		if ([null,undefined,""].includes(rating)) {
			return <>
				<div className="star-image | circle-element">
					<img src={star} />
				</div>
				<div className="flow">
					<h1 className="card__heading">How did we do?</h1>
					<p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
				</div>
				<Rating onSubmit={submitRating}/>
			</>
		} else {
			return <>
				<img className="margin-block-start-4" src={thankyou}/>
				<p className="card__rating-pill">You selected {rating} out of 5</p>
				<div className="text-center">
					<h1 className="card__heading | margin-block-end-4">Thank you!</h1>
					<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
				</div>
			</>
		}
	}


	return (
		<>
			<main className="container">
				<div className="card" style={rating ? {"--card-gap": "clamp(1.5rem, -4.318rem + 21.622vw, 2rem)", "justifyItems": "center"} : null}>
					{	renderContent() }
				</div>
			</main>
		</>
  )
}

export default App
