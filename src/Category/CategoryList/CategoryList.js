import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Breadcrumb from "./../../shared/components/Breadcrumb/Breadcrumb";
import CategoryAdd from "./../CategoryAdd/CategoryAdd";

function CategoryList() {
	const url = 'https://future-tech.onrender.com/api/category';
	const [categories, setCategories] = useState([]);

	const getCategories = () => {
		fetch(url)
			.then(res => res.json())
			.then(res => {
				setCategories(res.payload)
			})
	}

	useEffect(() => getCategories(), [])

	const handleAddCategory = (event) => {
		setCategories([event, ...categories.slice(0, -1)])
	}
	
	return (
		<>
		<Breadcrumb name="Category" />

		<div className="row">
			<div className="col-md-7 grid-margin stretch-card">
				<Card title="Project Status">
					<Table>
						<thead>
							<tr>
								<th> # </th>
								<th> Name </th>
								<th> Description </th>
							</tr>
						</thead>
						<tbody>
							{categories.map((category, index) => {
								return (
									<tr key={ index + 1 }>
										<td> { index + 1 } </td>
										<td> { category.name } </td>
										<td> { category.description } </td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Card>
			</div>
			<div className="col-md-5 grid-margin stretch-card">
				<CategoryAdd onAddCategory={handleAddCategory}/>
			</div>
		</div>
		</>
	);
}

export default CategoryList;
