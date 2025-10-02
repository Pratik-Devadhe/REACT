import {useParams} from "react-router-dom";

export default function User (){

   const { userId }= useParams();


    return (
        <>

            <h1 className="bg-green-500 px-4 mx-52 font-bold text-xl"> Number : {userId} </h1>

        </>
    )
}