import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setmyToys] = useState('');

    useTitle('My Toys')
    const url = `https://disney-world-toys-server-anika-tasnim-aurony.vercel.app/toy?email=${user?.email}`
    console.log(mytoys)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setmyToys(data))
    }, [])


    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to delete?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://disney-world-toys-server-anika-tasnim-aurony.vercel.app/toys/${id}`, {
                    method: 'Delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                            setmyToys(remaining)
                        }
                    })
                Swal.fire('Deleted')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved')
            }
        })

    }


    console.log(mytoys)
    return (
        <div className='bg-[#ede9fe]'>

            <h1 className='text-3xl text-center pt-3'>My Toys</h1>
            <div className="overflow-x-auto w-full   py-5 px-8    ">
                <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Toy</th>
                            <th>Name</th>
                            <th>Category</th>

                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Seller</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#ede9fe]'>

                        {
                            mytoys.length > 0 && mytoys.map(mytoy => <tr key={mytoy._id}>
                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={mytoy.photo} />
                                    </div>
                                </div></td>
                                <td>{mytoy.name}</td>
                                
                                <td>{mytoy.subcategory}</td>

                                <td>{mytoy.quantity}</td>
                                <td>{mytoy.price}</td>
                                <td>{mytoy.sellerName}</td>
                                <td><button className="btn btn-ghost btn-xs"><Link to={`/update/${mytoy._id}`}>Update</Link></button></td>
                                <td><button className="btn btn-ghost btn-xs" onClick={() => handleDelete(mytoy._id)}>Delete</button></td>

                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;