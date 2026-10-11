import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "./Videos.css";

const videos = [
  {
    id: 1,
    title: "Discover Mamta Homestay",
    videoId: "https://www.youtube.com/watch?v=hoauwfHzdvw",
    type: "landscape",
  },
  {
    id: 2,
    title: "Experience the Beauty",
    videoId: "https://www.youtube.com/shorts/8N65xlEKjBU",
    type: "portrait",
  },
  {
    id: 3,
    title: "A Glimpse of Your Stay",
    videoId: "https://www.youtube.com/watch?v=SwJI8dyIM5s",
    type: "landscape",
  },
];

function getYouTubeId(value) {
  if (!value) return "";

  try {
    const url = new URL(value);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.slice(1).split("/")[0];
    }

    if (url.pathname.includes("/shorts/")) {
      return url.pathname.split("/shorts/")[1].split("/")[0];
    }

    if (url.pathname.includes("/embed/")) {
      return url.pathname.split("/embed/")[1].split("/")[0];
    }

    return url.searchParams.get("v") || "";
  } catch {
    return value.startsWith("YOUR_") ? "" : value;
  }
}

function Videos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? videos.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === videos.length - 1 ? 0 : current + 1,
    );
  };

  const goToVideo = (index) => {
    setActiveIndex(index);
  };

  const getVideo = (offset) => {
    return videos[(activeIndex + offset + videos.length) % videos.length];
  };

  const renderPlaceholder = (video, isPreview = false) => (
    <div
      className={`videos-placeholder ${
        isPreview ? "videos-placeholder-preview" : ""
      }`}
    >
      <div className="videos-play-icon">
        <Play size={isPreview ? 17 : 25} fill="currentColor" />
      </div>
    </div>
  );

  const renderPreview = (video, position, onClick) => {
    const videoId = getYouTubeId(video.videoId);

    return (
      <button
        key={`${position}-${video.id}`}
        type="button"
        className={`videos-side videos-side-${position} ${
          video.type === "portrait"
            ? "videos-side-portrait"
            : "videos-side-landscape"
        }`}
        onClick={onClick}
        aria-label={`Play ${video.title}`}
      >
        {videoId ? (
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
        ) : (
          renderPlaceholder(video, true)
        )}

        <span className="videos-preview-play">
          <Play size={20} fill="currentColor" />
        </span>
      </button>
    );
  };

  const activeVideo = getVideo(0);
  const activeVideoId = getYouTubeId(activeVideo.videoId);

  return (
    <section className="videos-section" id="videos">
      <div className="videos-container">
        {/* Section Heading */}
        <div className="videos-heading">
          <span className="videos-eyebrow">WATCH OUR EXPERIENCES</span>

          <h2>
            Discover <span>Mamta Homestay</span>
          </h2>

          <p>
            Take a closer look at our beautiful surroundings, comfortable
            spaces, and memorable experiences.
          </p>
        </div>

        {/* Video Carousel */}
        <div
          className={`videos-carousel ${
            activeVideo.type === "portrait"
              ? "videos-carousel-portrait"
              : "videos-carousel-landscape"
          }`}
        >
          {/* Previous Video Preview */}
          {renderPreview(getVideo(-1), "left", previousSlide)}

          {/* Active Video */}
          <div className="videos-active">
            <div
              className={`videos-card ${
                activeVideo.type === "portrait"
                  ? "videos-card-portrait"
                  : "videos-card-landscape"
              }`}
            >
              {activeVideoId ? (
                <iframe
                  key={activeVideoId}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                renderPlaceholder(activeVideo)
              )}
            </div>
          </div>

          {/* Next Video Preview */}
          {renderPreview(getVideo(1), "right", nextSlide)}

          {/* Navigation Arrows */}
          <button
            className="videos-arrow videos-arrow-left"
            onClick={previousSlide}
            aria-label="Previous video"
            type="button"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            className="videos-arrow videos-arrow-right"
            onClick={nextSlide}
            aria-label="Next video"
            type="button"
          >
            <ChevronRight size={25} />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="videos-bottom">
          <div className="videos-dots" aria-label="Choose a video">
            {videos.map((video, index) => (
              <button
                key={video.id}
                className={`videos-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => goToVideo(index)}
                aria-label={`Show video ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                type="button"
              />
            ))}
          </div>

          <p className="videos-caption">
            Explore the beauty. Experience the comfort.
          </p>

          <span className="videos-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(videos.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Videos;
