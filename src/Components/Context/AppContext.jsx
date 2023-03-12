import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext()

function AContext({children}) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [bio, setBio] = useState();
    const [experience, setExperience] = useState();
    const [mainSkill, setMainSkill] = useState();
    const [skills, setSkills] = useState();
    const [CV, setCV] = useState();
    const [role, setRole] = useState()

    return (<AppContext.Provider value={{
        firstName, setFirstName,
        lastName, setLastName,
        gender, setGender,
        email, setEmail,
        password, setPassword,
        bio, setBio,
        experience, setExperience,
        mainSkill, setMainSkill,
        skills, setSkills,
        CV, setCV,
        role, setRole
    }}
    >
        {children}
    </AppContext.Provider>)
}

export default AContext