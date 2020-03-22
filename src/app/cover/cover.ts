export interface ICover{
    id: number,
    client_id: number,
    picturePath : string,
    logoPath: string,
    defaultLang: number,
    active: boolean,
    created_at: Date,
    updated_at: Date,
    title: string,
    description: string,
    altText1: string,
    altText2: string
}