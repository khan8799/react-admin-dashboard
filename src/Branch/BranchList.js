import { useState, useEffect } from "react";
import Table from "../components/Table";
import { makeRequest } from "../shared/utilities/httpHelper";

export default function BranchList( {toggleLoading} ) {
    const [branches, setBranches] = useState([])
    useEffect(() => getBranches(), [])

    const getBranches = () => {
        toggleLoading(true)
        const url = `coupon`
        makeRequest(url)
            .then(res => {
                setBranches(res.payload)
            })
            .finally(() => toggleLoading(false))
    }
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Latitude </th>
                        <th> Longitude</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {branches.map((branch, index) => {
                        return (
                            <tr key={index + 1}>
                                <td> {index + 1} </td>
                                <td>{branch.name}  </td>
                                <td>
                                    <div className="w-100 ">
                                        {branch.couponCode}
                                    </div>
                                </td>
                                <td>
                                <div className="w-100 ">
                                        {branch.couponCode}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}