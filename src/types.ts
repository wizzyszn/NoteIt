interface Note {
  id: string | number;
  visibility: boolean;
  heading?: string;
  subHeading?: string;
  thumbnail?: string;
  pinned?: boolean;
  favourite?: boolean;
  readDuration?: number;
}

export type { Note };
