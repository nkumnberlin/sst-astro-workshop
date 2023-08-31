
import { client } from './client';
import type {Song} from "../interfaces";

const SONG_PATH = "song";
export const getSong = async (title: string) => {
    const { data } = await client.get<Song>(`/${SONG_PATH}/${title}`);
    return data as Song;
}

export const getSongs = async () => {
    const { data } = await client.get<Song[]>(`/${SONG_PATH}`);
    return data as Song[];
}
