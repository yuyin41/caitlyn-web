export type PortfolioProject = {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  previewVideoUrl?: string;
  description?: string;
};

export type PortfolioCategory = {
  id: string;
  title: string;
  roman: string;
  backgroundVideoUrl?: string;
  projects: PortfolioProject[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "short-fiction-film",
    title: "Short Fiction Film",
    roman: "I",
    backgroundVideoUrl: "/videos/previews/dundobheal.mp4",
    projects: [
      {
        id: "dun-do-bheal",
        title: "Dún do Bhéal",
        thumbnail: "/thumbnails/dun-do-bheal.jpg",
        videoUrl: "https://youtu.be/77VmZttlhI0",
        previewVideoUrl: "/videos/previews/dundobheal.mp4",
        description: "A short film about a girl who come back home after a long time away.",
      },
      {
        id: "cathedra",
        title: "Cathedra",
        thumbnail: "/thumbnails/cathedra.jpg",
        videoUrl: "https://youtu.be/NrZK41GmqIw",
        previewVideoUrl: "/videos/previews/cathedra.mp4",
        description: "",
      },
      {
        id: "404-not-found",
        title: "404 Not Found",
        thumbnail: "/thumbnails/404-not-found.jpg",
        videoUrl: "https://youtu.be/4yPcRqfQUPw",
        previewVideoUrl: "/videos/previews/404-not-found.mp4",
        description: "",
      },
      {
        id: "feral-dance",
        title: "Feral Dance",
        thumbnail: "/thumbnails/feral-dance.jpg",
        videoUrl: "https://youtu.be/4jBBHM1TxA8",
        previewVideoUrl: "/videos/previews/feral-dance.mp4",
        description: "",
      },
      {
        id: "exactly-the-same",
        title: "Exactly The Same",
        thumbnail: "/thumbnails/exactly-the-same.jpg",
        videoUrl: "https://youtu.be/_0orze7RM4I",
        previewVideoUrl: "/videos/previews/exactly-the-same.mp4",
        description: "",
      },
    ],
  },
  {
    id: "video-essay",
    title: "Video Essay",
    roman: "II",
    backgroundVideoUrl: "/videos/bg-essay.mp4",
    projects: [
      {
        id: "editville-diaries",
        title: "Editville Diaries",
        thumbnail: "/thumbnails/editville-diaries.jpg",
        videoUrl: "https://youtu.be/Cl0f5DbvMkU",
        previewVideoUrl: "/videos/previews/editville-diaries.mp4",
        description: "",
      },
      {
        id: "japanese-films",
        title: "Japanese Films",
        thumbnail: "/thumbnails/japanese-films.jpg",
        videoUrl: "https://youtu.be/f6LNYnCvHHY",
        previewVideoUrl: "/videos/previews/japanese-films.mp4",
        description: "",
      },
      {
        id: "media-industry",
        title: "Media Industry",
        thumbnail: "/thumbnails/media-industry.jpg",
        videoUrl: "https://youtu.be/HHnAUBKdfAI",
        previewVideoUrl: "/videos/previews/media-industry.mp4",
        description: "",
      },
      {
        id: "video-essay-4",
        title: "National Cinema about Misery",
        // TODO: USER MUST MANUALLY PLACE 'misery.jpg' INSIDE THE '/public/thumbnails' FOLDER. The code cannot see files that are not there.
        thumbnail: "/thumbnails/misery.jpg",
        videoUrl: "https://youtu.be/iAL16NE247A",
        previewVideoUrl: "/videos/misery-preview.mp4",
        description: "",
      },
      {
        id: "video-essay-5",
        title: "Television Representation of Marriage",
        // TODO: USER MUST MANUALLY PLACE 'marriage.jpg' INSIDE THE '/public/thumbnails' FOLDER. The code cannot see files that are not there.
        thumbnail: "/thumbnails/marriage.jpg",
        videoUrl: "https://youtu.be/funUiUI3ECI",
        previewVideoUrl: "/videos/marriage-preview.mp4",
        description: "",
      },
    ],
  },
  {
    id: "documentary",
    title: "Documentary",
    roman: "III",
    backgroundVideoUrl: "/videos/bg-documentary.mp4",
    projects: [
      {
        id: "comedy-comeback",
        title: "Comedy Comeback",
        thumbnail: "/thumbnails/comedy-comeback.jpg",
        videoUrl: "https://youtu.be/yy5Rw5laS3U",
        previewVideoUrl: "/videos/previews/comedy-comeback.mp4",
        description: "",
      },
    ],
  },
  {
    id: "promotion-video",
    title: "Promotion Video",
    roman: "IV",
    backgroundVideoUrl: "/videos/bg-promo.mp4",
    projects: [
      {
        id: "parody-commercial",
        title: "Parody Commercial",
        thumbnail: "/thumbnails/parody-commercial.jpg",
        videoUrl: "https://youtu.be/wIGcEshw-HE",
        previewVideoUrl: "/videos/previews/parody-commercial.mp4",
        description: "",
      },
      {
        id: "kickstarter-video",
        title: "Kickstarter Video",
        thumbnail: "/thumbnails/kickstarter-video.jpg",
        videoUrl: "",
        previewVideoUrl: "",
        description: "",
      },
    ],
  },
];

