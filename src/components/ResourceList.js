import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        (async resource => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(res.data)
        })(resource)
    }, [resource])

    return (
        <div>
            <p>ResourceList</p>
            <p>{resource}</p>
            {resources.length}
        </div>
    ); 
}

export default ResourceList