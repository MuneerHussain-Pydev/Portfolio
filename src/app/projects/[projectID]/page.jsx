import React from 'react'
import IndividualProject from '@/pages/IndividualProject'
const page = async ({params}) => {
    const {projectID} = await params
  return (
    <IndividualProject projectID={projectID}/>
  )
}

export default page