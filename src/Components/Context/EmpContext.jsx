import { useState } from "react";
import { createContext } from "react";
export const EmpContext = createContext()

function EContext({children}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [companyName, setCompanyName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [profession, setProfession] = useState();
    const [description, setDescription] = useState();
    const [requirements, setRequirements] = useState();
    const [other, setOther] = useState();
    const [logo, setLogo] = useState();

    return (<EmpContext.Provider value={{
        email, setEmail,
        password, setPassword,
        companyName, setCompanyName,
        firstName, setFirstName,
        lastName, setLastName,
        profession, setProfession,
        description, setDescription,
        requirements, setRequirements,
        other, setOther,
        logo, setLogo
    }}>
        {children}
    </EmpContext.Provider>)
}

export default EContext