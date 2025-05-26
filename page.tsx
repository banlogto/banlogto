"use client"

import { TextIcon as Telegram, Youtube, Instagram } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ProfilePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Start with muted autoplay to ensure Chrome compliance
      video.muted = true
      video.loop = true
      
      // Try to play immediately (muted)
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented
          video.muted = true
          video.play()
        })
      }

      // Unmute after user interaction
      const handleInteraction = () => {
        video.muted = false
        video.volume = 0.7
        window.removeEventListener('click', handleInteraction)
        window.removeEventListener('touchstart', handleInteraction)
      }

      window.addEventListener('click', handleInteraction)
      window.addEventListener('touchstart', handleInteraction)

      return () => {
        window.removeEventListener('click', handleInteraction)
        window.removeEventListener('touchstart', handleInteraction)
      }
    }
  }, [])

  return (
    <div className="profile-container">
      {/* Background Video - now starts muted */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
        preload="auto"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        <source src="https://files.catbox.moe/06q7rg.mp4" type="video/mp4" />
      </video>

      {/* Fallback background remains the same */}
      <div className="video-fallback"></div>

      {/* Profile Content (unchanged) */}
      <div className="profile-content">
        <a href="https://t.me/ogb4nners" target="_blank" rel="noopener noreferrer">
          <div className="profile-pic">
            <img src="/profile-image.jpg" alt="b.3kx Profile" />
          </div>
        </a>

        <a href="https://www.youtube.com/@b.3kx" target="_blank" rel="noopener noreferrer">
          <h1 className="name">b.3kx</h1>
        </a>

        <a href="https://www.instagram.com/b.3kx" target="_blank" rel="noopener noreferrer">
          <p className="tagline">YouT / Instagram / Telegram</p>
        </a>

        <div className="social-links">
          <a href="https://t.me/ogb4nners" target="_blank" rel="noopener noreferrer">
            <Telegram size={24} />
          </a>
          <a href="https://www.youtube.com/@b.3kx" target="_blank" rel="noopener noreferrer">
            <Youtube size={24} />
          </a>
          <a href="https://www.instagram.com/b.3kx" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
        </div>

        <a href="https://t.me/ogb4nners" className="action-btn" target="_blank" rel="noopener noreferrer">
          <Telegram size={20} className="inline mr-2" />
          CONTACT ME
        </a>
      </div>
    </div>
  )
}