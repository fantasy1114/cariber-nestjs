export interface CourseContent {
  id: number;
  course_name: string;
  description: string;
  asset_download: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publish_date: string;
  thumbnail_image: Thumbnail;
  thumbnail_video: Thumbnail;
  name: string;
  total_hours: string;
  total_lessons: string;
  order_link: string;
  header: string;
  teaser: string;
  teaser_url: string;
  order_image: OrderImage;
  speaker_details: SpeakerDetails;
  contents: Contents[];
  episodes: Episode[];
}

export interface Contents{
  __component: string;
  id: number;
  items: Item[];
  topics: Topics[];
  special_ep: specialEP[];
}

export interface specialEP{
  id: number;
  title: string;
  description: string;
  youtube_url: string;
}

export interface Topics{
  id: number;
  label: string;
  image: Image;
}

export interface Image{
  id: number;
  url: string;
}

export interface Item{
  id: number;
  label: string;
}

export interface OrderImage {
  id: number;
  url: string;
}

export interface SpeakerDetails{
  id: number;
  url: string;
  width: number;
  height: number;
}

export interface Thumbnail {
  id: number;
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  episode_name: string;
  episode_descriptions: string;
  link_video: string;
  video: Video[]
}

export interface Video{
  id: number;
  url: string;
}