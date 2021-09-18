export const slugify = (id: number, slug: string): string => {
  const string = slug.split(' ').join('-').toLocaleLowerCase()

  return [id, string].join('-')
}
