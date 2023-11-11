import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Products.scss'
import List from '../../components/List/List.jsx'
import useFetch from '../../hooks/useFetch.js'


const Products = () => {

	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(200);
	const [sort, setSort] = useState("asc");
	const [selectedSubCats, setSelectedSubCats] = useState([]);
	
	const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
	let listAll = [];
	
	useEffect(() => {
		setSelectedSubCats([])
		document.getElementById('subCatOptions').value = 0
	},[catId])


	const handleChange = (e) => {
		const value = e.target.value;
		const isSelected = e.target.selectedOptions[0].selected;
		const optionsArray = e.target.options

		if(value === 'all'){
			listAll = [];
			for (let i = 0; i < optionsArray.length; i++) {
		      if (!optionsArray[i].selected) {
		        listAll.push(optionsArray[i].value) 
		      }
			}
			setSelectedSubCats(listAll)
		}else if (isSelected){
			listAll.push(value)
			setSelectedSubCats(listAll)
			listAll = [];
		} else {
			listAll.push([])
			setSelectedSubCats(listAll)
			listAll = [];
		}

	};

	return (
		<div className='products'>
			<img
          	className="catImg"
          	src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          	alt=""
        	/>
			<div className='left'>
				<div className='filterItem'>
					<h2 className="filtersTitle">Product Categories</h2>
					<select className="filterSelect" onChange={handleChange} id="subCatOptions">
					<option value="all" >All</option>
					{data?.map((item, index) =>(
						<option value={item.id} key={index}>{item.attributes.title}</option>
					))}
					</select>			
				</div>
				<div className='filterItem'>
					<h2 className="filtersTitle">Price</h2>
					<div className='inputItem rangePrice'>
						<span>0</span>
						<input className="filterInput" type="range" defaultValue={200} min={0} max={200}
						 onChange={(e)=>setMaxPrice(e.target.value)}/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className='filterItem'>
					<h2 className="filtersTitle">Sort by</h2>
					
					<div className='inputItem'>
					<select className="filterSelect" name="price" id="price" onChange={e=> setSort(e.target.value)}>
					    <option value="asc" >Lowest First</option>
					    <option value="desc" >Highest First</option>
				  	</select>
						
					</div>
				</div>
			</div>
			<div className='right'>
	        	<List className="list" catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
			</div>
		</div>	
	)
}

export default Products
