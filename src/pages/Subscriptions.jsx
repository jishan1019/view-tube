import VideoCard from '../components/VideoCard'

export default function Subscriptions({ user }) {
  const videos = [
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
      id: 2,
      title: "Machine Learning Fundamentals Explained",
      thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
      channelName: "AI Insights",
      channelId: "ai-insights",
      views: 89000,
      uploadDate: "2024-03-08",
      duration: "22:45"
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Latest from your subscriptions</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
