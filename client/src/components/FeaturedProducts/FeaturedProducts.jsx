import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card.jsx'

const FeaturedProducts = ({type}) => {

	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/9286361/pexels-photo-9286361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/9286315/pexels-photo-9286315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Yellow Shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/8973454/pexels-photo-8973454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/8973479/pexels-photo-8973479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Bomber Jacket",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/14565973/pexels-photo-14565973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/14565974/pexels-photo-14565974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Glass",
			isNew: false,
			oldPrice: 19,
			price: 12,
		},
		
		{
			id: 4,
			img: "https://images.pexels.com/photos/11931374/pexels-photo-11931374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/11931385/pexels-photo-11931385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Dress",
			isNew: false,
			oldPrice: 19,
			price: 12,
		},
	]
	
	return (
		<div className='featuredProducts'>
			<div className='top'>
				<h1>{type} products</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
			        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
			        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
			        suspendisse ultrices gravida. Risus commodo viverra maecenas.	
				</p>
			</div>
			<div className='bottom'>
				{data.map(item => (
					<Card item={item} key={item.id}/>
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts