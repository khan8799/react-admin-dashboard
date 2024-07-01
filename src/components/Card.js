import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            {props.children}
        </div>
    </div>
  )
}
