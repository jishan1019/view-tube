import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import VideoCard from '../components/VideoCard'

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [sortBy, setSortBy] = useState('relevance')
  const [filterDate, setFilterDate] = useState('any')

  const results = [
    {
      id: 1,
      title: "Building a Full Stack Application with React and Node.js",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      channelName: "Tech Academy",
      channelId: "tech-academy",
      views: 125000,
      uploadDate: "2024-03-10",
      duration: "15:30"
    },
    {
      id: 4,
      title: "Python Programming for Beginners",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      channelName: "Code School",
      channelId: "code-school",
      views: 456000,
      uploadDate: "2024-03-01",
      duration: "45:10"
    }
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Search results for: {query}</h1>
        
        <div className="flex space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="date">Upload Date</option>
            <option value="views">View Count</option>
            <option value="rating">Rating</option>
          </select>

          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="any">Any Time</option>
            <option value="hour">Last Hour</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {results.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
