interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    gender: boolean;
}

export default function UserListItem({ user }: { user: User }) {
    return (
        <tr className="bg-white border-b" key={user.id}>
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                    >
                        checkbox
                    </label>
                </div>
            </td>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                {user.id}
            </th>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.phone}</td>
            <td className="px-6 py-4">{user.birthDate}</td>
            <td className="px-6 py-4">{user.gender}</td>
            <td className="px-6 py-4 flex gap-2">
                <a
                    href="#"
                    className="font-medium text-blue-600 px-2 py-2 border border-gray-200 rounded"
                >
                    Sửa
                </a>
                <button className="font-medium text-red-600 px-2 py-2 border border-gray-200 rounded">
                    Xoá
                </button>
            </td>
        </tr>
    );
}
