"use client"
import { useState } from "react"

export default function Posts({imge, alt, mensaje, nombre, accion, tiempo}){

    const [leido, setLeido] = useState(false)

    return (
        <div className="bg-blue-50 rounded-lg flex gap-3 p-4 text-sm cursor-pointer text-blue-900 mb-2.5">

            <img src={imge} alt={alt} className="w-9.75 h-9.75"/>

            <div className="">
                <p>
                    <span className="font-bold text-blue-900 hover:text-blue-500">{nombre}</span>
                    <span className="">{accion}</span>
                    <span className="font-bold hover:text-blue-500">{mensaje}</span>
                    <span className="inline-block w-2 h-2 bg-red-700 rounded-[50%] ml-2">*</span>
                </p>
                <p className="text-blue-200 text-[0.87rem] font-medium">Im ago</p>
            </div>
        </div>
    )
}