import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/9286361/pexels-photo-9286361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/9286315/pexels-photo-9286315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Yellow Shirt",
			desc: "Yellow Shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/8973454/pexels-photo-8973454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/8973479/pexels-photo-8973479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Bomber Jacket",
			desc: "Bomber Jacket",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
	]

	return (
		<div className='cart'>
			<h1>Products in your cart</h1>
			{data?.map(item => (
				<div className='item' key={item}>
					<img src={item.img} alt="" />
					<div className='details'>
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className='price'>1 x ${item.price}</div>
					</div>
					<DeleteOutlinedIcon className='delete'/>
				</div>
			))}
			<div className='total'>
				<span>SUBTOTAL</span>
				<span>$123</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className='reset'>Reset Cart</span>
		</div>	
	)
}

export default Cart