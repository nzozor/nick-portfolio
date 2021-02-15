
export interface Project {
  projectId?: string;
  thumbnailUrl: string;
  projectName: string;
  projectDescription?: string;
  mainImgUrl: string;
  galleryImgs: GalleryImg[];
  clientName: string;
  services: string;
  clientUrl?: string;
  country?: string;
  imgAlt?: string;
}

export interface GalleryImg {
  largeImgUrl?: string;
  mediumImgUrl?: string;
  smallImgUrl?: string;
  imgAlt?: string;
  type: 'full' | 'vertical' | 'half';
}

export type Thumbnail = Pick<Project, 'projectName' |'thumbnailUrl' | 'imgAlt' | 'projectId'>;
