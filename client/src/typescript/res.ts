export interface Response {
    success: boolean;
    message: string;
}

export interface UserData {
  name: string;
  email: string;
  gender: string;
  role: string;
  _id: string;
  ProfileIMG: string;
}

export type BlogType = {
    _id: string;
    title: string;
    MainPoster: string;
    summary: string;
    description: string;
    auther: {
      id: string;
      name: string;
    }
}