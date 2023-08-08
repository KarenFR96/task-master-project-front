import { useEffect, useState } from "react";
import Link from "next/link";
import router from "next/router";
import ButtonPrimary from "../button-primary/button-primary";

const Tasks = ()=> {
    const [user, setUser] = useState<string |null>(null);

    useEffect(() => {
        const userName =sessionStorage.getItem('user');

        setUser(userName);

    },[]);
    const handleSignOut = () => {
        sessionStorage.clear();
        router.push('/')
    };
    return (
        <div>
            <Link href={""}>
                <p className="user-name">{user}</p>
            </Link>
            <ButtonPrimary callBack={handleSignOut} className={""} text={"Sing Out"} />
        </div>
    );
};

export default Tasks;