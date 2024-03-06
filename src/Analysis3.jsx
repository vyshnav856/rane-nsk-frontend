import React from "react"
import "./styles/Analysis3.css"

export default function Analysis3(props) {
	const [nodesImage, setNodesImage] = React.useState(null)

	function decodeImages() {
		const decodedImage = atob(props.pageData.nodesImage)

		setNodesImage(decodedImage)	
	}

	React.useEffect(() => {
		decodeImages()
	}, [])

	function testDecode() {

		return <></>
	}

	return (
		<div className="analysis3-container">
			<h3>Analysis 3</h3>

			<img className="nodes-image" alt="decoded image" src={`data:image/png;base64,${props.pageData.nodesImage}`} />
			

			{testDecode()}
		</div>
	)
}