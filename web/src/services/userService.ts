import registerFormModal from "@shared/formModels/registerFormModel"
import logInFormModal from "@shared/formModels/logInFormModel"

const headers: { "Content-Type": string } = {
    "Content-Type": "application/json",
};

export class UserService {
    public async register(formData: registerFormModal): Promise<boolean> {
        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}users/register`, {
            method: "post",
            headers: headers,
            body: JSON.stringify(formData)
        });

        if(!response.ok){
            console.error(response)
            return false
        }
        return true
    }

    public async logIn(formData: logInFormModal): Promise<boolean> {
        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}users/login`, {
            method: "post",
            headers: headers,
            body: JSON.stringify(formData)
        });
        
        if(response.status === 401) return false
        
        if(!response.ok){
            console.error(response)
            return false
        }
        return true
    }
}