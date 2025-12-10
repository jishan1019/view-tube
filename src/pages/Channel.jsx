import { useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

export default function Channel({ user }) {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('videos')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const channel = {
    id: id,
    name: "Tech Academy",
    banner: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    subscribers: "1.2M",
    totalViews: "50M",
    videoCount: 245,
    about: "Welcome to Tech Academy! We create high-quality tutorials on web development, programming, and technology. Subscribe for weekly content!"
  }

  const videos = [
    {
      id: 1,
      title: "Building a Full Stack Application with React and Node.js",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      channelName: channel.name,
      channelId: id,
      views: 125000,
      uploadDate: "2024-03-10",
      duration: "15:30"
    },
    {
      id: 4,
      title: "Python Programming for Beginners",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      channelName: channel.name,
      channelId: id,
      views: 456000,
      uploadDate: "2024-03-01",
      duration: "45:10"
    }
  ]

  return (
    <div>
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
        <img 
          src={channel.banner} 
          alt={channel.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start space-x-6 mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {channel.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{channel.name}</h1>
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <span>{channel.subscribers} subscribers</span>
              <span>{channel.videoCount} videos</span>
              <span>{channel.totalViews} views</span>
            </div>
            <button
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                isSubscribed 
                  ? 'bg-gray-200 text-gray-900 hover:bg-gray-300' 
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            {['videos', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-semibold capitalize transition-colors ${
                  activeTab === tab 
                    ? 'border-b-2 border-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-700 mb-6">{channel.about}</p>
            <div className="space-y-2">
              <p><span className="font-semibold">Total views:</span> {channel.totalViews}</p>
              <p><span className="font-semibold">Joined:</span> January 2020</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
