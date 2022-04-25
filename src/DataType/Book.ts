export type BookType = {
    id:number,
    title:string,
    category_id:number,
    authors:Array<string>,
    cover_url:string,
    description:string,
    sections:[{
        title:string,
        content:string,
    }],
    audio_length:string,
};
  