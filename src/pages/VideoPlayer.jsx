import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

export default function VideoPlayer({ user }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      text: "Great tutorial! Very helpful and easy to follow.",
      likes: 45,
      date: "2024-03-12",
      replies: []
    },
    {
      id: 2,
      author: "Jane Smith",
      text: "Thanks for sharing this. Looking forward to more content!",
      likes: 23,
      date: "2024-03-11",
      replies: []
    }
  ])

  const video = {
    id: parseInt(id),
    title: "Building a Full Stack Application with React and Node.js",
    channelName: "Tech Academy",
    channelId: "tech-academy",
    subscribers: "1.2M",
    views: 125000,
    uploadDate: "2024-03-10",
    likes: 5432,
    description: "In this comprehensive tutorial, we'll build a complete full-stack application using React for the frontend and Node.js with Express for the backend. We'll cover everything from setting up the development environment to deploying the application. Perfect for intermediate developers looking to expand their skills.",
    tags: ["React", "Node.js", "Full Stack", "Web Development"]
  }

  const relatedVideos = [
    {
      id: 2,
      title: "Machine Learning Fundamentals Explained",
      thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80",
      channelName: "AI Insights",
      channelId: "ai-insights",
      views: 89000,
      uploadDate: "2024-03-08",
      duration: "22:45"
    },
    {
      id: 3,
      title: "Web Design Trends 2024",
      thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&q=80",
      channelName: "Design Masters",
      channelId: "design-masters",
      views: 234000,
      uploadDate: "2024-03-05",
      duration: "12:20"
    }
  ]

  const handleLike = () => {
    setLiked(!liked)
    if (disliked) setDisliked(false)
  }

  const handleDislike = () => {
    setDisliked(!disliked)
    if (liked) setLiked(false)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([
        {
          id: comments.length + 1,
          author: user.name,
          text: comment,
          likes: 0,
          date: new Date().toISOString().split('T')[0],
          replies: []
        },
        ...comments
      ])
      setComment('')
    }
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-black aspect-video rounded-xl mb-4">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="text-lg">Video Player</p>
              </div>
            </div>
          </div>

          <h1 className="text-xl font-bold mb-2">{video.title}</h1>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div 
                onClick={() => navigate(`/channel/${video.channelId}`)}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {video.channelName.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{video.channelName}</p>
                  <p className="text-sm text-gray-600">{video.subscribers} subscribers</p>
                </div>
              </div>
              <button
                onClick={() => setSubscribed(!subscribed)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  subscribed 
                    ? 'bg-gray-200 text-gray-900 hover:bg-gray-300' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-l-full hover:bg-gray-200 transition-colors ${
                    liked ? 'text-blue-600' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{video.likes}</span>
                </button>
                <div className="w-px h-6 bg-gray-300"></div>
                <button
                  onClick={handleDislike}
                  className={`p-2 px-4 rounded-r-full hover:bg-gray-200 transition-colors ${
                    disliked ? 'text-blue-600' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill={disliked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                  </svg>
                </button>
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-4 text-sm font-semibold mb-2">
              <span>{video.views.toLocaleString()} views</span>
              <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
            </div>
            <p className={`text-sm ${showDescription ? '' : 'line-clamp-2'}`}>
              {video.description}
            </p>
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="text-sm font-semibold mt-2"
            >
              {showDescription ? 'Show less' : 'Show more'}
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">{comments.length} Comments</h2>
            
            <form onSubmit={handleComment} className="flex space-x-4 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full border-b border-gray-300 focus:border-gray-900 outline-none pb-2"
                />
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setComment('')}
                    className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!comment.trim()}
                    className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </form>

            <div className="space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold flex-shrink-0">
                    {c.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-sm">{c.author}</span>
                      <span className="text-xs text-gray-600">{new Date(c.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm mb-2">{c.text}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>{c.likes}</span>
                      </button>
                      <button className="text-sm font-semibold">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {relatedVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </div>
  )
}
