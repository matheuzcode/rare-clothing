import React,{useState, useEffect} from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card.jsx';
import axios from 'axios';

const FeaturedProducts = ({type}) => {

	const [data, setData] = useState([]);

	useEffect(()=>{
		const fetchData = async () => {
			try{
				const res = await axios.get(
					process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
					{
						headers:{
							Authorization:"bearer "+ process.env.REACT_APP_API_TOKEN,
						},
					}
				);
				setData(res.data.data)
				console.log(res.data.data)
			}catch(err){
				console.log(err);
			}
		};
		fetchData();
	}, []);
	
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