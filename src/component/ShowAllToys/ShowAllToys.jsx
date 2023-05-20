import React from 'react';

const ShowAllToys = (toy) => {
    const { photo, name, subcategory,quantity, price, sellerName } = toy.toy
    console.log(toy.toy)
    return (
        <div>


            <th>
                <label>

                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {subcategory}
                
            </td>
            <td>
            {quantity}
                
                
            </td>
            <td>${price}</td>
            <td>   {sellerName}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>


        </div>
    );
};

export default ShowAllToys;