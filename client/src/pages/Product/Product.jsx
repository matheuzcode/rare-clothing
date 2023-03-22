import React from 'react'
import { useState } from 'react'
import './Product.scss'

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);

	const images = [
		"https://images.pexels.com/photos/9286361/pexels-photo-9286361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/9286315/pexels-photo-9286315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	];

	return (
		<div className='product'>
			<div className='left'>
				<div className='images'>
					<img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
					<img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
				</div>
				<div className='mainImg'>
					<img src={images[selectedImg]} alt="" />
				</div>
			</div>
			<div className='right'>
				<h1>Title</h1>
				<span>$199</span>
				<p>Lkdosddoskdosk okd oskdosdko ksodk sodkoskdo ksdok oskdo ksodk oskdoksosokosko odksoksoksoksokd</p>
				<div className='quantity'>
					<button>-</button>
					<button>+</button>
				</div>
			</div>
		</div>	
	)
}

export default Product