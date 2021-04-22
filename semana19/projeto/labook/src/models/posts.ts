export enum POST_TYPE {
  NORMAL = "normal",
  EVENT = "event",
}

export interface post {
  id: string;
  photo: string;
  description: string;
  createdAt: Date;
  type: POST_TYPE;
  authorId: string;
}

export interface createPostInputTDO {
  photo: string;
  description: string;
  type: POST_TYPE;
  token: string;
}

export interface getPostByIdDTO {
  id: string;
  token: string;
}
