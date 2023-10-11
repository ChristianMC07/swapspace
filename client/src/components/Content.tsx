import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'



import { Order, Note, Topping } from "@/tools/orders.model";


export default function Content({ id, name, address, city, size, delivered, toppings, notes }: Order) {
    return (

        delivered == "0" ?

            <div className='pt-4 pb-2 border-b-2 border-red-700 border-dashed'>
                <div className="pb-4 text-red-700 text-3xl font-bold">Order # {id}:</div>
                <div className='pb-2'>
                    <div className='font-bold'><FontAwesomeIcon icon={faCircleInfo} /> Customer Information</div>
                    <div>{name}</div>
                    <div>{address}</div>
                    <div>{city}</div>
                </div>
                <div className='pb-2'>
                    <div className='font-bold'><FontAwesomeIcon icon={faPizzaSlice} /> Pizza Size</div>
                    <div>{size}</div>
                </div>
                <div className='pb-2'>
                    <div className='font-bold'><FontAwesomeIcon icon={faListCheck} /> Order Details</div>
                    {toppings.map((topping: Topping, i: number) => (
                        <div key={i}>{topping.topping}</div>
                    )
                    )}
                </div>

                <div className='pb-2'>
                    <div className='font-bold'><FontAwesomeIcon icon={faNoteSticky} /> Order Notes</div>
                    {notes.map((note: Note, i) => (
                        <div key={i}>{note.note}</div>
                    ))}
                </div>

            </div>
            : null



    )
}