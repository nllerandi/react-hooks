import React from 'react'
import {useResources} from './useResources'

const ResourceList = ({resource}) => {
    const resources = useResources(resource)
    return (
        <div>
            <p>ResourceList</p>
            <p>{resource}</p>
            <ul>{resources.map((record) => <li key={record.id}>{record.title}</li>)}</ul>
        </div>
    ); 
}

export default ResourceList