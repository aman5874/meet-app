"use client";
import dynamic from 'next/dynamic';

const VideoRoom = dynamic(() => import('./VideoRoom'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Loading meeting...</p>
      </div>
    </div>
  )
});

export default function ClientWrapper() {
  return <VideoRoom />;
} 