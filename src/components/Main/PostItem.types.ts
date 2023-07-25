export type PostListItemType = {
    id: string
    frontmatter: PostFrontmatterType
}

export type PostFrontmatterType = {
    title: string
    date: string
    categories: string[]
    summary: string
    slug: string
}