import { Users } from "../../components/Users";
import { ClickButton } from "../../components/ClickButton";

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function Page() {

    const session = await getServerSession(authOptions);

    const StringSession = JSON.stringify(session);


    return (
        <>
            <h1 className="text-3xl font-bold underline bg-red-500">Hello World</h1>

            <Users />

            <div>
                <ClickButton />
            </div>

            <p>
                {StringSession}
            </p>
        </>
    );  
}