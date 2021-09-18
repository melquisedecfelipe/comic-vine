import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Character, { CharacterProps } from 'templates/Character'

import { getCharacter, getCharacters } from 'services/api'

export default function Index(props: CharacterProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Character {...props} />
}

export async function getStaticPaths() {
  const response = await getCharacters(0)

  const paths = response?.results.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!

  const id = (slug as string).split('-')[0]

  const data = await getCharacter(id)

  if (!data.results) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      ...data.results
    }
  }
}
