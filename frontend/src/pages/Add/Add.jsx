import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import axios from "axios"
import Table from 'react-bootstrap/Table';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  desc: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  image: Yup.string().url()
    .min(2, 'Too Short!')
    .required('Required'),
});

function Add() {
  const navigate = useNavigate()
    const [serv,setServ]=useState([])

    function getData() {
      axios.get("http://localhost:3001/products3")
      .then((res)=>{
          setServ(res.data)
      })
  }

  useEffect(()=>{
      getData()
  },[])

  function handleDelete(id) {
    axios.delete(`http://localhost:3001/products3/${id}`)
}
  return (
    <>
    
    <Formik
       initialValues={{
         name: '',
         desc: '',
         image: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        axios.post("http://localhost:3001/products3",values)
        .then(() => {
          navigate("/"); 
        })
        console.log(values);
      }}
     >
       {({ errors, touched }) => (
         <Form className='w-full h-96 bg-gray-200 flex flex-col justify-center items-center gap-5'>
           <Field name="name" className="w-96 rounded border-4 border-red-900" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="desc" className="w-96 rounded border-4 border-red-900" />
           {errors.desc && touched.desc ? (
             <div>{errors.desc}</div>
           ) : null}
           <Field name="image" type="text"  className="w-96 rounded border-4 border-red-900"/>
           {errors.image && touched.image ? <div>{errors.image}</div> : null}
           <button className='py-3 px-6 bg-green-700' type="submit">Submit</button>
         </Form>
       )}
     </Formik>


     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {serv.map((prod)=>(
        <tr key={prod._id}>
          <td><img src={prod.image} alt="" /></td>
          <td>{prod.name}</td>
          <td>{prod.desc}</td>
          <td><button className='py-4 px-8  bg-red-500 ' onClick={()=>handleDelete(prod._id)}>Delete</button></td>
        </tr>
        ))}
      </tbody>
    </Table>
    
    </>
  )
}

export default Add
