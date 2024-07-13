const Users = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">johndoe</td>
              <td className="px-6 py-4 whitespace-nowrap">johndoe@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
