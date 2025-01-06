
import { NavLink } from "react-router-dom";




export const Card = (data) => {
    const{id,images, title,price} = data.data;
    return <NavLink to={`/service/${id}`}>
        <div className="">
            <li className="list-none flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] w-72 h-72 rounded-lg">
                <div className="flex justify-center items-center">
                    <img className="w-28 h-28" src={images} alt={title} />
                </div>
                <div className="px-4">
                    <p className="py-1">Titile : {title}</p>
                    <p className="py-1">Price: {price}</p>
                    <button className="py-1">Add</button>
                    {/* {console.log()} */}
                </div>
            </li>
        </div>

    </NavLink>
    // // return <>

    // </>
}