import VideoCard from '../components/VideoCard'

export default function Home() {
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
    },
    {
      id: 3,
      title: "Web Design Trends 2024",
      thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
      channelName: "Design Masters",
      channelId: "design-masters",
      views: 234000,
      uploadDate: "2024-03-05",
      duration: "12:20"
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
    },
    {
      id: 5,
      title: "Cloud Computing Explained Simply",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      channelName: "Cloud Guru",
      channelId: "cloud-guru",
      views: 178000,
      uploadDate: "2024-02-28",
      duration: "18:35"
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      channelName: "Security Pro",
      channelId: "security-pro",
      views: 92000,
      uploadDate: "2024-02-25",
      duration: "28:50"
    },
    {
      id: 7,
      title: "Data Science Career Guide",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      channelName: "Data Academy",
      channelId: "data-academy",
      views: 145000,
      uploadDate: "2024-02-20",
      duration: "32:15"
    },
    {
      id: 8,
      title: "Mobile App Development Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      channelName: "Mobile Dev",
      channelId: "mobile-dev",
      views: 267000,
      uploadDate: "2024-02-15",
      duration: "41:20"
    }
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
          {['All', 'JavaScript', 'Python', 'Web Development', 'AI/ML', 'Design', 'Cloud', 'Security'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                category === 'All' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
