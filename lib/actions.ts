"use server";

import { writeClient } from "@/sanity/lib/write-client";
import { parseServerActionResponse } from "./utils";
export const createAppointment = async(state:any, form:FormData, month: string, day:number, time:string)=>{
    


    const {title,description,name,phone} = Object.fromEntries(
        Array.from(form),
    )



    try{
        const userDetails = {
            name: name,
            phone: phone
        }
        const appointment = {
            month,
            day,
            time,
            title,
            description,
            userDetails
        };
        

        const result = await writeClient.create({_type:"appointment", ...appointment})

        return parseServerActionResponse({
            ...result,
            error: "",
            status: "SUCCESS",
        })
    }catch(error){
        console.log(error);
        return parseServerActionResponse({
            error: JSON.stringify(error),
            status: "ERROR",
        });

    }
}

// export const sendContact = async(state:any, emailParams: any)=>{

    
//     try{

//         const result = await writeClient.create({_type:"appointment", ...appointment})

//         return parseServerActionResponse({
//             ...result,
//             error: "",
//             status: "SUCCESS",
//         })
//     }catch(error){
//         console.log(error);
//         return parseServerActionResponse({
//             error: JSON.stringify(error),
//             status: "ERROR",
//         });

//     }
// }

