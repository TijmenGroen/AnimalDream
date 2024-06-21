import registerFormModal from "@shared/formModels/registerFormModel"
import logInFormModal from "@shared/formModels/logInFormModel"
import addressFormModel from "@shared/formModels/addressFormModel"
import { userData } from "@shared/types/userData";
import { getCookie } from "../cookie";

const headers: { "Content-Type": string } = {
    "Content-Type": "application/json",
};

export class UserService {
    public async register(formData: registerFormModal): Promise<boolean> {
        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}user/register`, {
            method: "post",
            headers: headers,
            credentials: "include",
            body: JSON.stringify(formData)
        });

        if(response.status === 204) return false

        if(!response.ok){
            console.error(response)
            return false
        }
        return true
    }

    public async logIn(formData: logInFormModal): Promise<boolean> {
        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}user/login`, {
            method: "post",
            headers: headers,
            credentials: "include",
            body: JSON.stringify(formData)
        });
        
        if(response.status === 204 || response.status === 401) return false
        
        if(!response.ok){
            console.error(response)
            return false
        }
        return true
    }
    
    // Uses authentication middleware
    public async logOut(): Promise<boolean> {
        const jwt: string | false = getCookie("jwt")

        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}user/logOut`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${jwt}`
            },
            credentials: "include"
        });

        if(!response.ok){
            console.error(response)
            return false
        }
        return true;
    } 

    public checkIfLoggedIn(): boolean {
        const jwt: string | false = getCookie("jwt")

        if(jwt) return true
        else return false
    }

    // Uses authentication middleware
    public async getUserData(): Promise<boolean | userData> {
        const jwt: string | false = getCookie("jwt")

        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}user/getUserData`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${jwt}`
            }
        });

        if(!response.ok){
            console.error(response)
            return false
        }
        return await response.json();
    } 

    // Uses authentication middleware
    public async addAddressToUser(formData: addressFormModel): Promise<boolean> {
        const jwt: string | false = getCookie("jwt")

        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}user/addAddressToUser`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${jwt}`
            },
            body: JSON.stringify(formData)
        });

        if(!response.ok){
            console.error(response)
            return false
        }
        return true;
    } 
}