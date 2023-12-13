interface Slide {
  year: number
  text: string
}

export interface DataItem {
  title: string
  minYear: number
  maxYear: number
  slides: Slide[]
}

export const data: DataItem[] = [
  {
    title: 'Литература',
    minYear: 2000,
    maxYear: 2020,
    slides: [
      {
        year: 2000,
        text: 'slide1 1',
      },
      {
        year: 2010,
        text: 'slide2 1',
      },
      {
        year: 2020,
        text: 'slide3 1',
      },
      {
        year: 2000,
        text: 'slide4 1',
      },
      {
        year: 2010,
        text: 'slide5 1',
      },
      {
        year: 2020,
        text: 'slide6 1',
      },
    ],
  },
  {
    title: 'Кино',
    minYear: 2010,
    maxYear: 2015,
    slides: [
      {
        year: 2000,
        text: 'slide1 Кино',
      },
      {
        year: 2010,
        text: 'slide2 Кино',
      },
      {
        year: 2020,
        text: 'slide3 Кино',
      },
    ],
  },
  {
    title: 'Искуство',
    minYear: 2004,
    maxYear: 2016,
    slides: [
      {
        year: 2004,
        text: 'slide1 Искуство',
      },
      {
        year: 2010,
        text: 'slide2 Искуство',
      },
      {
        year: 2016,
        text: 'slide3 Искуство',
      },
    ],
  },
  {
    title: 'Спорт',
    minYear: 1990,
    maxYear: 2010,
    slides: [
      {
        year: 1990,
        text: 'slide1 Спорт',
      },
      {
        year: 2000,
        text: 'slide2 Спорт',
      },
      {
        year: 2010,
        text: 'slide3 Спорт',
      },
    ],
  },
  {
    title: 'Музыка',
    minYear: 1980,
    maxYear: 2003,
    slides: [
      {
        year: 1980,
        text: 'slide1 Музыка',
      },
      {
        year: 1999,
        text: 'slide2 Музыка',
      },
      {
        year: 2003,
        text: 'slide3 Музыка',
      },
    ],
  },
  {
    title: 'Наука',
    minYear: 2015,
    maxYear: 2022,
    slides: [
      {
        year: 2015,
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
]
