import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { fetchData } from '../services/fetchData'
import {Card} from 'react-bootstrap'
import AppEmp from './AddEmployee'

const Employee = () => { 

    const [empdata,setEmpData] = useState()
    const [singleEmp,setSingleEmp] = useState(null)
    const [isAdd,setIsAdd] = useState(false) 

    useEffect(()=>{
        const RequestData = async()=>{
            try{ 
                const empData = await fetchData()
                setEmpData(empData)
            }
            catch(error){ 
                throw new Error("Unable to load data in Employee component")
            }
        }
        RequestData()
    },[])

    const handleClick=(id)=>{
        const singleEmpData = empdata.filter((val)=>val.id === id)
        console.log(singleEmpData)
        setSingleEmp(...singleEmpData)
    }

    const handleAddEmp=()=>{
         setIsAdd(!isAdd)
    }

    return (
        <div className='empDatabase'>
            <header className="header">
                <h1>Employee Database</h1>
                <Button variant='primary' onClick={()=>handleAddEmp()}>Add Employee</Button>
            </header>
            <div className='empDetails'>
                <ListGroup>
                    {
                        empdata?.map((val,index)=>{
                            return(
                               <Button key={index} style={{ width: '230px' }} onClick={()=>handleClick(val.id)}>
                                    <ListGroup.Item style={{ width: '200px' }}>{val.firstName}</ ListGroup.Item>
                               </Button>
                            )
                        })
                    }
                </ListGroup>
                <div className='empInfo'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img src={singleEmp?.imageUrl}/>
                            <Card.Body>
                                <Card.Title>{`${singleEmp?.firstName} ${singleEmp?.lastName}`}</Card.Title>
                                <Card.Text>{singleEmp?.email}</Card.Text>
                                <Card.Text>{singleEmp?.address}</Card.Text>
                                <Card.Text>{singleEmp?.dob}</Card.Text>
                                <Card.Text>{singleEmp?.contactNumber}</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
            </div> 
            {isAdd && <AppEmp addEmpData={setEmpData} isAdd={setIsAdd}/>}
        </div>
    )
}

export default Employee;

