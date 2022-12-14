import React from 'react'
import { TailSpin } from  'react-loader-spinner'
import './spinner.css'

const Spinner = (params) => {
  return (
    <div className={params.active ? "spinnerContainer active": "spinnerContainer"}>
         <TailSpin
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
  </div>
  )
}

export default Spinner