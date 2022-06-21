import { Box } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionElimTareaCompletedSync, actionElimTareaSync } from '../redux/actions/actionTarea';

const ListarTareas = () => {

    const dispatch = useDispatch()

    const { tarea } = useSelector(store => store.tareaStore)
    const [seleccionar, setSeleccionar] = useState(false)

    const handleEliminarCompleted = (id) => {
        dispatch(actionElimTareaCompletedSync(id))
    }

    const handleCheckbox = (e) => {
        console.log(e.target.onclick.name);
        if (seleccionar == false) {
            setSeleccionar(true)
        } else {
            setSeleccionar(false)
        }
    }
    const handleTodo = ({ target }, source) => {

        for (let i = 0, n = target.length; i < n; i++) {
            target[i].checked = source.checked;
        }
    }
    const handleEliminar = (id) => {
        dispatch(actionElimTareaSync(id))
    }

    return (
        <div>
            <div className='DivTareas rounded-3 shadow '>
                <section className=''>
                    {
                        tarea?.map((tr, idx) => (
                            <Box key={idx} className='px-2 py-3 BordeTarea d-flex'>
                                <input type='checkbox' name="controlled" defaultChecked={true} checked={seleccionar} className='my-auto' />
                                <label className='my-auto ms-2'>{tr.tarea}</label>
                                <img id={tr.id} onClick={() => handleEliminar(tr.id)} className='close ms-auto me-2 my-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655654770/02-06/Vector-close-4_wao6iy.png" alt="" />
                            </Box>
                        ))
                    }

                </section>

                <Box className='d-flex justify-content-between DivActive piePagina'>
                    <div>
                        <p className='my-auto p-2 f'>{tarea.length} items left</p>
                    </div>

                    <section className='d-flex'>
                        <p className='my-auto p-2 f' onClick={handleCheckbox}>All</p>
                        <p className='my-auto p-2 f'>Active</p>
                        <p className='my-auto p-2 f'>Completed</p>
                    </section>

                    <div>
                        <p className='my-auto p-2 f' onClick={handleEliminarCompleted}>Clear Completed</p>
                    </div>
                </Box>
            </div>

            <div className='piePagina2 DivTareas DivActive mt-3 rounded-3 shadow'>
                <section className='d-flex justify-content-evenly'>
                    <p className='my-auto p-2 f'  onClick={handleCheckbox}>All</p>
                    <p className='my-auto p-2 f'>Active</p>
                    <p className='my-auto p-2 f'>Completed</p>
                </section>
            </div>
        </div>
    )
}

export default ListarTareas;