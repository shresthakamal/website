import prisma from "@repo/db/client";

export async function Users() {
    const users = await prisma.user.findMany();

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Users</h2>
            <div className="space-y-2">
                {users.map((user) => (
                    <div key={user.id} className="p-4 border rounded-lg">
                        <p><strong>Name:</strong> {user.name || 'N/A'}</p>
                        <p><strong>Email:</strong> {user.email || 'N/A'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}