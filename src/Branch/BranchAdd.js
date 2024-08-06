import React, { useState } from 'react';
import { makeRequest } from '../shared/utilities/httpHelper';
import { enqueueSnackbar } from 'notistack';

export default function BranchAdd({ toggleLoading, refreshBranches }) {
    const initialValue = { name: '', latitude: 0, longitude: 0 }
    const [formValues, setFormValues] = useState(initialValue)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        toggleLoading(true);
        add()
    }

    const add = () => {
        const url = `branch`;
        const data = {
            name: formValues.name,
            location: {
                latitude: formValues.latitude,
                longitude: formValues.longitude
            }
        }
        const option = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        makeRequest(url, option)
            .then(res => {
                setFormValues(initialValue)
                enqueueSnackbar(`Branch has been created successfully`, {
                    variant: 'success',
                    anchorOrigin: { vertical: 'top', horizontal: 'center' },
                    preventDuplicate: true
                })
                refreshBranches()
            })
            .finally(() => toggleLoading(false))
    }

    return (
        <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Branch Name"
                    onChange={handleChange}
                    value={formValues.name} />
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                    name="latitude"
                    type="number"
                    className="form-control"
                    placeholder="eg. 28.567, 72.123"
                    onChange={handleChange}
                    value={formValues.latitude} />
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                    name="longitude"
                    type="number"
                    className="form-control"
                    placeholder="eg. 16.424, 32.464"
                    onChange={handleChange}
                    value={formValues.longitude} />
            </div>
            <button type="submit" className="btn btn-gradient-primary me-2">Save</button>
            <button className="btn btn-light">Cancel</button>
        </form>
    )
};