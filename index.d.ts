import {Options} from "miniget"

export interface Author {
    name: string,
    profile: string,
    uri: string
}

export interface Thumbnail {
    url: string,
    width: number,
    height: number
}

export interface Length {
    ms: number,
    sec: number
}

export interface SearchResult {
    type: "video" | "playlist",
    identifier: string,
    uri: string,
    title: string,
    author: Author,
    length: Length,
    isStream: boolean,
    count?: number,
    thumbnails: Thumbnail[]
}

export interface SimpleYTOptions extends Options {
    filter: "video" | "playlist"
}

/**
 * search youtube.
 *
 * @param query search query
 * @param options filter, request options
 */
export default function simpleYT(query: string, options?: SimpleYTOptions): SearchResult[]
