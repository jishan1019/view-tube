import { useNavigate } from 'react-router-dom'

export default function VideoCard({ video }) {
  const navigate = useNavigate()

  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`
    return views.toString()
  }

  const formatDate = (date) => {
    const now = new Date()
    const videoDate = new Date(date)
    const diffTime = Math.abs(now - videoDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  return (
    <div 
      onClick={() => navigate(`/watch/${video.id}`)}
      className="cursor-pointer group"
    >
      <div className="relative mb-3">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      <div className="flex space-x-3">
        <div 
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/channel/${video.channelId}`)
          }}
          className="flex-shrink-0"
        >
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {video.channelName.charAt(0)}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
            {video.title}
          </h3>
          <p 
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/channel/${video.channelId}`)
            }}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {video.channelName}
          </p>
          <p className="text-sm text-gray-600">
            {formatViews(video.views)} views • {formatDate(video.uploadDate)}
          </p>
        </div>
      </div>
    </div>
  )
}
