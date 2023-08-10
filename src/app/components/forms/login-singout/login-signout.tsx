import { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/components/forms/login-singout/login-signout.css"


const Tasks = ()=> {
    const [user, setUser] = useState<string |null>(null);

    useEffect(() => {
        const userName =sessionStorage.getItem('user');

        setUser(userName);

    },[]);

    return (
        <div >
            <Link href={""} className="task-user">
                <p className="user-name">{user}</p>
            </Link>
        </div>
    );
};

export default Tasks;