import Card from "../../components/Card";
import Table from "../../components/Table";
import Breadcrumb from "./../../shared/components/Breadcrumb/Breadcrumb";
import CategoryAdd from "./../CategoryAdd/CategoryAdd";

function CategoryList() {
  const categories = [1, 2, 3, 4];
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
						<th> Due Date </th>
						<th> Progress </th>
					</tr>
                </thead>
                <tbody>
					{categories.map((category, index) => {
						return (
							<tr key={index + 1}>
								<td> 1 </td>
								<td> Herman Beck </td>
								<td> May 15, 2015 </td>
								<td>
								<div className="progress">
									<div
									className="w-25 progress-bar bg-gradient-success"
									role="progressbar"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
									></div>
								</div>
								</td>
							</tr>
						);
					})}
                </tbody>
			</Table>
          </Card>
        </div>
        <div className="col-md-5 grid-margin stretch-card">
          <CategoryAdd />
        </div>
      </div>
    </>
  );
}

export default CategoryList;
