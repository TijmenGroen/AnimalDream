import registerFormModal from "@shared/formModels/registerFormModel"

const headers: { "Content-Type": string } = {
    "Content-Type": "application/json",
};

export class userService {
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
}