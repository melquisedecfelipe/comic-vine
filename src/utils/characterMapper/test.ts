import { BBFCharacter } from 'types/characters'

import { characterMapper, charactersMapper } from '.'

describe('characterMapper()', () => {
  it('should return the right format when mapped', () => {
    const character = {
      aliases:
        'Anthony Edward Stark Tony Stark Golden Avenger Shellhead Armored Avenger',
      api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1455/',
      birth: null,
      deck: 'Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark.',
      description: `<p>Anthony Edward "Tony" Stark was born in <a href="../../long-island/34-55811/" rel="nofollow ">Long Island</a>, <a href="../../new-york-city/34-41183/" rel="nofollow ">New York</a>, to <a href="../../howard-stark/29-48549/" rel="nofollow ">Howard Anthony Stark</a> and Maria Collins Carbonell Stark. In his youth, Tony Stark was a precociously intelligent young boy. When Tony was 7 he was sent to a boarding school, and during this experience he found people difficult to relate to. This was when he became fascinated by machines. By the age of 15 Tony had enrolled in MIT (The Massachusetts Institute of Technology) in <a href="../../boston-massachusetts/34-56311/" rel="nofollow ">Boston, Massachusetts</a>. He graduated at the top of his class at age 19 with double masters in physics and engineering.</p>`,
      id: 1455,
      image: {
        icon_url:
          'https://comicvine.gamespot.com/a/uploads/square_avatar/11138/111389575/7768211-4293283244-2Pac8Gpu6dUAUMI0UpVJeqk9rayKSiaTjreIK0H-ChAWsoNV-RxTnTEt4a7tCNryrbLjFPndaoNki-tJJI1Q-_mi8fue_juP4cBRHx0Er1w5EfjNoWwadqewG3JSwaliSSsHnNEN%3Ds1600.jpg',
        screen_url:
          'https://comicvine.gamespot.com/a/uploads/screen_medium/11138/111389575/7768211-4293283244-2Pac8Gpu6dUAUMI0UpVJeqk9rayKSiaTjreIK0H-ChAWsoNV-RxTnTEt4a7tCNryrbLjFPndaoNki-tJJI1Q-_mi8fue_juP4cBRHx0Er1w5EfjNoWwadqewG3JSwaliSSsHnNEN%3Ds1600.jpg',
        small_url:
          'https://comicvine.gamespot.com/a/uploads/scale_small/11138/111389575/7768211-4293283244-2Pac8Gpu6dUAUMI0UpVJeqk9rayKSiaTjreIK0H-ChAWsoNV-RxTnTEt4a7tCNryrbLjFPndaoNki-tJJI1Q-_mi8fue_juP4cBRHx0Er1w5EfjNoWwadqewG3JSwaliSSsHnNEN%3Ds1600.jpg'
      },
      name: 'Iron Man',
      real_name: 'Anthony Edward Stark',
      origin: {
        name: 'Human'
      },
      publisher: {
        name: 'Marvel'
      },
      site_detail_url: 'https://comicvine.gamespot.com/iron-man/4005-1455/'
    } as BBFCharacter

    expect(characterMapper(character)).toStrictEqual({
      aliases:
        'Anthony Edward Stark Tony Stark Golden Avenger Shellhead Armored Avenger',
      detail: 'https://comicvine.gamespot.com/api/character/4005-1455/',
      birth: null,
      deck: 'Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark.',
      description: `<p>Anthony Edward "Tony" Stark was born in <a href="../../long-island/34-55811/" rel="nofollow ">Long Island</a>, <a href="../../new-york-city/34-41183/" rel="nofollow ">New York</a>, to <a href="../../howard-stark/29-48549/" rel="nofollow ">Howard Anthony Stark</a> and Maria Collins Carbonell Stark. In his youth, Tony Stark was a precociously intelligent young boy. When Tony was 7 he was sent to a boarding school, and during this experience he found people difficult to relate to. This was when he became fascinated by machines. By the age of 15 Tony had enrolled in MIT (The Massachusetts Institute of Technology) in <a href="../../boston-massachusetts/34-56311/" rel="nofollow ">Boston, Massachusetts</a>. He graduated at the top of his class at age 19 with double masters in physics and engineering.</p>`,
      id: 1455,
      images: {
        icon: 'https://comicvine.gamespot.com/a/uploads/square_avatar/11138/111389575/7768211-4293283244-2Pac8Gpu6dUAUMI0UpVJeqk9rayKSiaTjreIK0H-ChAWsoNV-RxTnTEt4a7tCNryrbLjFPndaoNki-tJJI1Q-_mi8fue_juP4cBRHx0Er1w5EfjNoWwadqewG3JSwaliSSsHnNEN%3Ds1600.jpg',
        screen:
          'https://comicvine.gamespot.com/a/uploads/screen_medium/11138/111389575/7768211-4293283244-2Pac8Gpu6dUAUMI0UpVJeqk9rayKSiaTjreIK0H-ChAWsoNV-RxTnTEt4a7tCNryrbLjFPndaoNki-tJJI1Q-_mi8fue_juP4cBRHx0Er1w5EfjNoWwadqewG3JSwaliSSsHnNEN%3Ds1600.jpg',
        small:
          'https://comicvine.gamespot.com/a/uploads/scale_small/11138/111389575/7768211-4293283244-2Pac8Gpu6dUAUMI0UpVJeqk9rayKSiaTjreIK0H-ChAWsoNV-RxTnTEt4a7tCNryrbLjFPndaoNki-tJJI1Q-_mi8fue_juP4cBRHx0Er1w5EfjNoWwadqewG3JSwaliSSsHnNEN%3Ds1600.jpg'
      },
      name: 'Iron Man',
      realName: 'Anthony Edward Stark',
      origin: 'Human',
      publisher: 'Marvel',
      site: 'https://comicvine.gamespot.com/iron-man/4005-1455/',
      slug: '1455-iron-man'
    })
  })
})

describe('charactersMapper()', () => {
  it('should return the right format when mapped', () => {
    const character = {
      aliases: 'King T`Challa The Most Dangerous Man Alive King of Wakanda',
      api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1477/',
      birth: null,
      deck: "T'Challa is the Black Panther, king of Wakanda, one of the most technologically advanced nations on Earth. He is among the top intellects and martial artists of the world, a veteran Avenger, and a member of the Illuminati. Using his powers and abilities, he has pledged his fortune, powers, and life to the service of all mankind.",
      description: `<p>Long ago, a huge meteorite made of a rare mineral now known as <a href="https://www.comicvine.com/vibranium/18-40919/">vibranium</a>, crashed landed in <a href="https://www.comicvine.com/wakanda/34-41027/">Wakanda</a>. The first king of Wakanda, Black Panther Bashenga, harnessed the mineral and used it to nurture his nation. Thousands of years later, under the ruling of Black Panther <a href="//www.comicvine.com/tchaka/4005-62659/" data-ref-id="4005-62659">T‘Chaka</a>, Wakanda's level of technological and economic achievements continued to excel far beyond those of the modern world.</p>`,
      id: 1477,
      image: {
        icon_url:
          'https://comicvine.gamespot.com/a/uploads/square_avatar/3/31666/5011137-blap2016001-cov-d6d2a.jpg',
        screen_url:
          'https://comicvine.gamespot.com/a/uploads/screen_medium/3/31666/5011137-blap2016001-cov-d6d2a.jpg',
        small_url:
          'https://comicvine.gamespot.com/a/uploads/scale_small/3/31666/5011137-blap2016001-cov-d6d2a.jpg'
      },
      name: 'Black Panther',
      real_name: "T'Challa",
      site_detail_url: 'https://comicvine.gamespot.com/lightning-lad/4005-1477/'
    } as BBFCharacter

    expect(charactersMapper([character])).toStrictEqual([
      {
        aliases: 'King T`Challa The Most Dangerous Man Alive King of Wakanda',
        detail: 'https://comicvine.gamespot.com/api/character/4005-1477/',
        birth: null,
        deck: "T'Challa is the Black Panther, king of Wakanda, one of the most technologically advanced nations on Earth. He is among the top intellects and martial artists of the world, a veteran Avenger, and a member of the Illuminati. Using his powers and abilities, he has pledged his fortune, powers, and life to the service of all mankind.",
        description: `<p>Long ago, a huge meteorite made of a rare mineral now known as <a href="https://www.comicvine.com/vibranium/18-40919/">vibranium</a>, crashed landed in <a href="https://www.comicvine.com/wakanda/34-41027/">Wakanda</a>. The first king of Wakanda, Black Panther Bashenga, harnessed the mineral and used it to nurture his nation. Thousands of years later, under the ruling of Black Panther <a href="//www.comicvine.com/tchaka/4005-62659/" data-ref-id="4005-62659">T‘Chaka</a>, Wakanda's level of technological and economic achievements continued to excel far beyond those of the modern world.</p>`,
        id: 1477,
        images: {
          icon: 'https://comicvine.gamespot.com/a/uploads/square_avatar/3/31666/5011137-blap2016001-cov-d6d2a.jpg',
          screen:
            'https://comicvine.gamespot.com/a/uploads/screen_medium/3/31666/5011137-blap2016001-cov-d6d2a.jpg',
          small:
            'https://comicvine.gamespot.com/a/uploads/scale_small/3/31666/5011137-blap2016001-cov-d6d2a.jpg'
        },
        name: 'Black Panther',
        realName: "T'Challa",
        site: 'https://comicvine.gamespot.com/lightning-lad/4005-1477/',
        slug: '1477-black-panther'
      }
    ])
  })
})
