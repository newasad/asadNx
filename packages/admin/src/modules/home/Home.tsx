import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { UserInfoForm } from '../form'

export const Home = () => {
  return (
    <div>
        <Tabs
            defaultActiveKey="userInfo"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="userInfo" title="Info" className='p-2'>
                <UserInfoForm/>
            </Tab>
            <Tab eventKey="UserExperience" title="Experience">
                Tab content for Profile
            </Tab>
            <Tab eventKey="UserProjects" title="Projects" >
                Tab content for Contact
            </Tab>  
        </Tabs>
    </div>
  )
}
