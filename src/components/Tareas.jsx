import React from 'react'
import { DIV, DIVPRINC } from '../styles/StyleGlobal';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import { useForm } from '../hooks/useForm';
import { actionTareaSync } from '../redux/actions/actionTarea';
import { useDispatch } from 'react-redux';
import ListarTareas from './ListarTareas';

const Tareas = ({ Hc, clases }) => {

    const dispatch = useDispatch()
    const [formValue, setFormValue, handleInputChange] = useForm({
        id: '',
        tarea: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let GeneradorId = Math.floor(Math.random() * 1000) + 1;
        setFormValue({
            ...formValue,
            id: GeneradorId
        })
        dispatch(actionTareaSync(formValue))
    }

    return (
        <DIVPRINC>
            <div className='IMGNAV position-absolute'>
                <img className={`${clases.class3}`} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655654828/02-06/bg-mobile-light_jvcqsu.jpg" alt="" />
                <img className={`${clases.class2}`} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655654773/02-06/bg-mobile-dark_up0z5d.jpg" alt="" />
            </div>

            <DIV className='d-flex my-5 flex-column mx-auto justify-content-center'>
                <div className='d-flex mb-4'>
                    <h1 className='my-auto text-white'>Todo</h1>

                    <div className='ms-auto m'>
                        <section className='d-flex'>
                            <img className={`my-3 me-3 ${clases.class3}`} onClick={Hc} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655654827/02-06/icon-moon-2_rftxtq.png" alt="" />
                            <img className={`my-3 me-3 ${clases.class2}`} onClick={Hc} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655654771/02-06/icon-sun_1_lhnjha.png" alt="" />
                        </section>

                    </div>
                </div>

                <div className='mb-3 DivTitle rounded-3'>
                    <Box className='p-2'>

                        <form className='d-flex' onSubmit={handleSubmit}>
                            <Checkbox className='my-auto' />

                            <h2 className='my-auto ms-2'>Currently typing |</h2>

                            <input className='w-25 border-0 m-auto' type='text' name='tarea' value={formValue.tarea} onChange={handleInputChange} />
                        </form>

                    </Box>
                </div>

                <ListarTareas />
            </DIV>
        </DIVPRINC>
    )
}

export default Tareas;