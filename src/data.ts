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
    title: 'Наука',
    minYear: 2010,
    maxYear: 2015,
    slides: [
      {
        year: 2000,
        text: 'slide1 2',
      },
      {
        year: 2010,
        text: 'slide2 2',
      },
      {
        year: 2020,
        text: 'slide3 2',
      },
    ],
  },
  {
    title: 'Наука',
    minYear: 2010,
    maxYear: 2015,
    slides: [
      {
        year: 2000,
        text: 'slide1 2',
      },
      {
        year: 2010,
        text: 'slide2 2',
      },
      {
        year: 2020,
        text: 'slide3 2',
      },
    ],
  },
  {
    title: 'Наука',
    minYear: 2010,
    maxYear: 2015,
    slides: [
      {
        year: 2000,
        text: 'slide1 2',
      },
      {
        year: 2010,
        text: 'slide2 2',
      },
      {
        year: 2020,
        text: 'slide3 2',
      },
    ],
  },
  {
    title: 'Наука',
    minYear: 2010,
    maxYear: 2015,
    slides: [
      {
        year: 2000,
        text: 'slide1 2',
      },
      {
        year: 2010,
        text: 'slide2 2',
      },
      {
        year: 2020,
        text: 'slide3 2',
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
