import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Tareas from '../components/Tareas';

const Main = () => {

  const [temas, setTemas] = useState(true)
  const [clases, setClases] = useState({
    class1: "claro light",
    class2: 'img1',
    class3: 'img2'
  })

  const handleCambiar = () => {
    if (temas == true) {
      setTemas(false)
      setClases({
        class1: 'oscuro dark',
        class2: 'img2',
        class3: 'img1'
      })
    } else {
      setTemas(true)
      setClases({
        class1: 'claro light',
        class2: 'img1',
        class3: 'img2'
      })
    }
  }

  return (
    <div className={`d-flex flex-column ${clases.class1}`}>
      <Tareas Hc={handleCambiar} clases={clases} />

      <div className={`${clases.class1}`}>
        <Footer />
      </div>

    </div>
  )
}

export default Main;