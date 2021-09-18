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
      description:
        '<h2>Origin</h2><figure data-align="right" data-size="medium" data-ref-id="1300-504218" data-img-src="https://static.comicvine.com/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png" data-ratio="1.3701067615658" data-width="281" data-embed-type="image" style="width: 281px"><a class="fluid-height" style="padding-bottom:137.0%" href="https://static.comicvine.com/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png" data-ref-id="1300-504218"><img alt="Iron Man\'s Original Armor" src="https://comicvine.gamespot.com/a/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png" srcset="https://comicvine.gamespot.com/a/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png 281w" sizes="(max-width: 281px) 100vw, 281px" data-width="281"></a><figcaption>Iron Man\'s Original Armor</figcaption></figure><p>Anthony Edward "Tony" Stark was born in <a href="../../long-island/34-55811/" rel="nofollow ">Long Island</a>',
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
      description:
        '<h2>Origin</h2><figure data-align="right" data-size="medium" data-ref-id="1300-504218" data-img-src="https://static.comicvine.com/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png" data-ratio="1.3701067615658" data-width="281" data-embed-type="image" style="width: 281px"><a class="fluid-height" style="padding-bottom:137.0%" href="https://static.comicvine.com/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png" data-ref-id="1300-504218"><img alt="Iron Man\'s Original Armor" src="https://comicvine.gamespot.com/a/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png" srcset="https://comicvine.gamespot.com/a/uploads/original/2/26163/504218-iron_man_armor_mk_i_001.png 281w" sizes="(max-width: 281px) 100vw, 281px" data-width="281"></a><figcaption>Iron Man\'s Original Armor</figcaption></figure><p>Anthony Edward "Tony" Stark was born in <a href="../../long-island/34-55811/" rel="nofollow ">Long Island</a>',
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
      description:
        '<h2><strong>Origin</strong></h2><figure data-align="right" data-size="small" data-img-src="https://static.comicvine.com/uploads/original/11111/111112802/3211102-3477635669-Black.jpg" data-ref-id="1300-3211102" data-ratio="1.5" data-width="400" data-embed-type="image" style="width: 400px"><a class="fluid-height" style="padding-bottom:150.0%" href="https://static.comicvine.com/uploads/original/11111/111112802/3211102-3477635669-Black.jpg" data-ref-id="1300-3211102"><img alt="All monarchs of Wakanda are known as "Black Panther."" src="https://comicvine.gamespot.com/a/uploads/original/11111/111112802/3211102-3477635669-Black.jpg" srcset="https://comicvine.gamespot.com/a/uploads/original/11111/111112802/3211102-3477635669-Black.jpg 400w" sizes="(max-width: 426px) 100vw, 426px" data-width="426"></a><figcaption>All monarchs of Wakanda are known as "Black Panther."</figcaption></figure><p>Long ago, a huge meteorite made of a rare mineral now known as <a href="https://www.comicvine.com/vibranium/18-40919/">vibranium</a>',
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
        description:
          '<h2><strong>Origin</strong></h2><figure data-align="right" data-size="small" data-img-src="https://static.comicvine.com/uploads/original/11111/111112802/3211102-3477635669-Black.jpg" data-ref-id="1300-3211102" data-ratio="1.5" data-width="400" data-embed-type="image" style="width: 400px"><a class="fluid-height" style="padding-bottom:150.0%" href="https://static.comicvine.com/uploads/original/11111/111112802/3211102-3477635669-Black.jpg" data-ref-id="1300-3211102"><img alt="All monarchs of Wakanda are known as "Black Panther."" src="https://comicvine.gamespot.com/a/uploads/original/11111/111112802/3211102-3477635669-Black.jpg" srcset="https://comicvine.gamespot.com/a/uploads/original/11111/111112802/3211102-3477635669-Black.jpg 400w" sizes="(max-width: 426px) 100vw, 426px" data-width="426"></a><figcaption>All monarchs of Wakanda are known as "Black Panther."</figcaption></figure><p>Long ago, a huge meteorite made of a rare mineral now known as <a href="https://www.comicvine.com/vibranium/18-40919/">vibranium</a>',
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
