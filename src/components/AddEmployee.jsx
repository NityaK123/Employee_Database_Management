import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


const AddEmp = ({addEmpData,isAdd}) => {

    const handleSubmit = (e) => { 
        e.preventDefault() 
        const {id,firstName,lastName,email,contactNumber,dob,address} = e.target.elements
        console.log(e.target.elements)
        //setData({id:id,firstName:firstName,email:email,contactNumber:contactNumber,dob:dob,address:address})
        const employeeData = {
            id: id.value,
            firstName: firstName.value,
            lastName:lastName.value,
            email: email.value,
            contactNumber: contactNumber.value,
            dob: dob.value,
            address: address.value
        };
        console.log(employeeData)
        addEmpData((prev)=>([...prev,employeeData]))
        isAdd(false)
    }

    return (
        <Form id="form" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="number" name="id"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control typeofype="text" name="address"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" name="contactNumber"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control type="text" name="dob"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddEmp;