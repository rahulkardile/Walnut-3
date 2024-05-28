export interface Response {
    success: boolean;
    message: string;
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