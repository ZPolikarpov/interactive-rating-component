import star from "./assets/images/icon-star.svg"

function App() {
	return (
		<>
			<main className="container">
				<div className="card">
					<div className="star-image | circle-element">
						<img src={star} />
					</div>
					<div className="flow">
						<h1 className="card__heading">How did we do?</h1>
						<p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
					</div>
					<div className="rating">
						<ul className="rating__list">
							<li className="circle-element">
								<p>1</p>
							</li>
							<li className="circle-element">
								<p>2</p>
							</li>
							<li className="circle-element">
								<p>3</p>
							</li>
							<li className="circle-element">
								<p>4</p>
							</li>
							<li className="circle-element">
								<p>5</p>
							</li>
						</ul>
						<button className="button" data-type="primary">Submit</button>
					</div>
				</div>
			</main>
		</>
  )
}

export default App
