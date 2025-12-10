import { useState } from 'react'

export default function AdminPanel({ user }) {
  const [activeTab, setActiveTab] = useState('users')

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', videos: 12, status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', videos: 8, status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', videos: 15, status: 'suspended' }
  ]

  const videos = [
    { id: 1, title: 'Sample Video 1', author: 'John Doe', views: 1234, status: 'published' },
    { id: 2, title: 'Sample Video 2', author: 'Jane Smith', views: 5678, status: 'published' },
    { id: 3, title: 'Flagged Content', author: 'Bob Johnson', views: 234, status: 'flagged' }
  ]

  if (!user?.isAdmin) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="text-gray-600 mt-2">You do not have permission to access this page.</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {['users', 'videos', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-semibold capitalize transition-colors ${
                activeTab === tab 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Videos</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.videos}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold mr-4">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700 font-semibold">
                      {user.status === 'active' ? 'Suspend' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Views</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {videos.map((video) => (
                <tr key={video.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{video.title}</td>
                  <td className="px-6 py-4 text-gray-600">{video.author}</td>
                  <td className="px-6 py-4">{video.views.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      video.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {video.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold mr-4">
                      View
                    </button>
                    <button className="text-red-600 hover:text-red-700 font-semibold">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Users</h3>
            <p className="text-4xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-green-600 mt-2">+12% this month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Videos</h3>
            <p className="text-4xl font-bold text-purple-600">5,678</p>
            <p className="text-sm text-green-600 mt-2">+8% this month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Views</h3>
            <p className="text-4xl font-bold text-green-600">1.2M</p>
            <p className="text-sm text-green-600 mt-2">+15% this month</p>
          </div>
        </div>
      )}
    </div>
  )
}
