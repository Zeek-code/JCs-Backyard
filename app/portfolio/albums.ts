// Album data matching the folder structure in Public/images
export interface Album {
  name: string;
  slug: string;
  images: string[];
  coverImage?: string;
}

export const albums: Album[] = [
  {
    name: 'Flowers',
    slug: 'flowers',
    images: [
      'IMG_4450.jpg',
      'IMG_4474.jpg',
      'IMG_5618.jpg',
      'IMG_5619.jpg',
      'IMG_5627.jpg',
      'IMG_5628.jpg',
      'IMG_7912.jpg',
    ],
    coverImage: 'IMG_4450.jpg',
  },
  {
    name: 'Fresh Produce',
    slug: 'fresh-produce',
    images: [
      'IMG_5347.jpg',
      'IMG_5624.jpg',
      'IMG_5626.jpg',
      'IMG_6104.jpg',
      'IMG_7271.jpg',
      'IMG_7848.jpg',
    ],
    coverImage: 'IMG_5347.jpg',
  },
  {
    name: 'Garden',
    slug: 'garden',
    images: [
      'IMG_4318.jpg',
      'IMG_4469.jpg',
      'IMG_4831.jpg',
      'IMG_7906.jpg',
    ],
    coverImage: 'IMG_4318.jpg',
  },
  {
    name: 'Tilling',
    slug: 'tilling',
    images: [
      'IMG_2563.jpg',
      'IMG_2564.jpg',
      'IMG_9195.jpg',
    ],
    coverImage: 'IMG_2563.jpg',
  },
  {
    name: 'Tractor',
    slug: 'tractor',
    images: [
      'IMG_3951.jpg',
      'IMG_3955.jpg',
      'IMG_3956.jpg',
      'IMG_7554.jpg',
      'IMG_9103.jpg',
      'IMG_9495.jpg',
      'IMG_9498.jpg',
    ],
    coverImage: 'IMG_3951.jpg',
  },
];

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find(album => album.slug === slug);
}

export function getImagePath(albumName: string, imageName: string): string {
  // URL encode folder names with spaces (like "Fresh Produce" -> "Fresh%20Produce")
  const folderName = encodeURIComponent(albumName);
  return `/images/${folderName}/${imageName}`;
}

