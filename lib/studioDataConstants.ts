export const STUDIO = {
  name: 'Studio Ruthe Pereira',
  professional: 'Ruthe Pereira',
  address: 'Avenida Benedicto Castilho de Andrade, 279',
  district: 'Pq. Res. Eloy Chaves',
  city: 'Jundiaí — SP',
  zip: '13212-070',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Avenida+Benedicto+Castilho+de+Andrade%2C+279+-+Pq.+Res.+Eloy+Chaves%2C+Jundia%C3%AD+-+SP%2C+13212-070',
  whatsapp:
    'https://wa.me/5511974654954',
  payments: ['Crédito', 'Débito', 'Pix', 'Espécie'],
}

export type LashService = {
  name: string
  price: string
  description: string
  src: string
  alt: string
  tag: 'Clássico' | 'Volume' | 'Natural'
}

export const LASH_SERVICES: LashService[] = [
  {
    name: 'Fio a fio clássico preto',
    price: '160,00',
    tag: 'Clássico',
    src:'/lashServices/classico-preto.png',
    alt: '',
    description:
      'Técnica para quem gosta de naturalidade. Alonga com elegância e pode entregar um pouco de volume dependendo da quantidade de fios naturais.',
  },
  {
    name: 'Fio a fio clássico marrom',
    price: '160,00',
    tag: 'Clássico',
    src:'/lashServices/classico-marrom.png',
    alt: '',
    description:
      'Ideal para quem deseja realçar o olhar de forma elegante e extremamente natural. O fio a fio marrom entrega leveza e sutileza.',
  },
  {
    name: 'Efeito molhado',
    price: '160,00',
    tag: 'Clássico',
    src:'/lashServices/IMG_0435.jpg',
    alt: '',
    description:
      'Fios spikes que imitam o aspecto dos cílios molhados, trazendo definição e um olhar marcante. Para quem gosta de um efeito moderno e alinhado.',
  },
  {
    name: 'Volume brasileiro',
    price: '180,00',
    tag: 'Volume',
    src:'/lashServices/volume-brasileiro.png',
    alt: '',
    description:
      'Combina leve volume e definição, com efeito mais preenchido sem perder a naturalidade. Elegante e confortável no dia a dia.',
  },
  {
    name: 'Volume egípcio',
    price: '180,00',
    tag: 'Volume',
    src:'/lashServices/volume-egipcio.png',
    alt: '',
    description:
      'Aplicação de fios leves e de base mais fina que criam mais volume e destaque, mantendo o olhar sem peso. Preenchimento sofisticado.',
  },
  {
    name: 'Volume inglês',
    price: '180,00',
    tag: 'Volume',
    src:'/lashServices/volume-ingles.png',
    alt: '',
    description:
      'Fio de base única com 4 pontas, entregando volume, leveza e intensidade. Ideal para quem gosta de um olhar mais marcante.',
  },
  {
    name: 'Volume árabe',
    price: '180,00',
    tag: 'Volume',
    src:'/lashServices/volume-arabe.png',
    alt: '',
    description:
      'Fio tecnológico de 5 pontas, com resultado bem preenchido e glamouroso. Para quem quer chamar atenção apenas com um olhar poderoso.',
  },
  {
    name: 'Efeito fox',
    price: '180,00',
    tag: 'Volume',
    src:'/lashServices/efeito-fox.png',
    alt: '',
    description:
      'Fios tecnológicos com curvaturas especiais, do brasileiro ao árabe. Ideal para quem gosta do efeito delineado e de cílios de tamanho menor.',
  },
  {
    name: 'Lash lifting',
    price: '140,00',
    tag: 'Natural',
    src:'/lashServices/lash-lifting.png',
    alt: '',
    description:
      'Procedimento feito nos cílios naturais para deixá-los mais curvados, alinhados e com aparência de mais alongados, sem extensão de cílios.',
  },
]

export const BROW_SERVICES = [
  {
    name: 'Design personalizado',
    price: '60,00',
    highlight: 'Mapeamento + simetrização',
    src:'/browServices/design-personalizado.jpeg',
    alt: '',
    description:
      'Antes de remover qualquer pelo é realizado o mapeamento facial e a simetrização, com desenho minucioso respeitando o formato natural. Feito com linha e pinça, finalizado com cromoterapia.',
  },
  {
    name: 'Design + henna',
    price: '85,00',
    highlight: 'Preenchimento e definição',
    src:'/browServices/design-henna.png',
    alt: '',
    description:
      'Todo o processo do design personalizado com aplicação de henna na tonalidade e intensidade desejadas, garantindo mais preenchimento.',
  },
  {
    name: 'Design + coloração',
    price: '95,00',
    highlight: 'Fios uniformes',
    src:'/browServices/design-coloracao.png',
    alt: '',
    description:
      'Design completo com coloração dos fios, deixando as sobrancelhas uniformes e alinhadas ao seu gosto de tonalidade.',
  },
  {
    name: 'Brow lamination',
    price: '165,00',
    highlight: 'Design + coloração opcional',
    src:'/browServices/brow-lamination.png',
    alt: '',
    description:
      'Procedimento químico que alinha, reorganiza e direciona os fios, com efeito mais preenchido, definido e harmonioso. Corrige fios desalinhados e cria simetria.',
  },
]

export const FACIAL_SERVICES = [
  {
    name: 'Epilação facial na linha',
    price: '60,00',
    duration: '30 a 40 minutos',
    src:'/facialServices/epilacao.png',
    alt: '',
    description:
      'Técnica de remoção de pelos que utiliza um fio específico para retirar os pelos desde a raiz, garantindo mais precisão e definição no contorno do rosto. Finalizamos com alta frequência e protetor solar.',
    benefits: [
      'Remove os pelos pela raiz',
      'Mais precisão no contorno facial',
      'Ideal para áreas delicadas do rosto',
      'Não utiliza produtos químicos',
      'Pele mais lisa e uniforme',
    ],
  },
  {
    name: 'Dermaplaning',
    price: '90,00',
    duration: 'Indolor, sem tempo de recuperação',
    src:'/facialServices/dermaplaning.png',
    alt: '',
    description:
      'Esfoliação física realizada com lâmina específica e esterilizada, que remove as células mortas e os pelos finos da face. O resultado é uma pele mais lisa, iluminada e com toque aveludado imediatamente após a sessão.',
    benefits: [
      'Promove renovação celular',
      'Melhora a textura e o viço da pele',
      'Auxilia na absorção de cosméticos',
      'Melhor acabamento da maquiagem',
      'Suaviza poros e linhas finas',
    ],
  },
]

export const MICROPIGMENTATION = {
  name: 'Micropigmentação nanofios',
  duration: '2h a 2h30',
  installments: '2x R$ 290,00',
  cash: 'R$ 550,00 à vista',
  touchUp: 'R$ 150,00',
  description:
    'Técnica que simula fios extremamente finos e naturais, criando um efeito realista e delicado nas sobrancelhas. Ideal para quem busca reconstrução, correção de falhas ou um resultado mais definido sem perder a naturalidade.',
  warning:
    'Para a realização da técnica é essencial que a cliente não possua micropigmentação antiga. Caso já tenha realizado, é necessário avisar previamente e enviar uma foto para avaliação.',
}

export const MAINTENANCE = [
  {
    group: 'Fio a fio clássico e efeito molhado',
    first: 'R$ 160,00 à vista ou R$ 170,00 em até 2x',
    retouch: [
      { label: '15 dias', value: 'R$ 90,00' },
      { label: 'Até 25 dias', value: 'R$ 110,00' },
    ],
  },
  {
    group: 'Volume brasileiro, egípcio, inglês, árabe e fox',
    first: 'R$ 180,00 à vista ou R$ 190,00 em até 2x',
    retouch: [
      { label: 'Até 15 dias', value: 'R$ 100,00' },
      { label: 'Até 25 dias', value: 'R$ 130,00' },
    ],
  },
]

export const CATALOG_LIST = [
  'Design de sobrancelhas',
  'Aplicação de tintura / henna',
  'Epilação de buço com linha',
  'Brow lamination',
  'Alongamento de cílios',
  'Lash lifting',
  'Remoção de alongamento de cílios',
  'Epilação facial na linha',
  'Dermaplaning',
  'Micropigmentação nanofios',
]

export const CATALOG_PAGES = [
  {
    src: '/gallery/edd8a1fd-4a5a-43d3-ab08-aae468d86a84.png',
    alt: '',
  },
  {
    src: '/gallery/e71778df-01e2-41e5-bea6-5513a6b47666.png',
    alt: '',
  },
  {
    src: '/gallery/e69d6317-595d-4ea8-92e4-cc47c26d96d1.png',
    alt: '',
  },
  {
    src: '/gallery/dee67ce8-7101-4161-9cdc-b54fb63b47fc.png',
    alt: '',
  },
  {
    src: '/gallery/dd715220-f310-45d6-b755-d3cd6c1d6c2d.png',
    alt: '',
  },
  {
    src: '/gallery/b9f97474-a673-429c-998b-8fe6c274bf38.png',
    alt: '',
  },
  {
    src: '/gallery/a1f63fcd-6db8-436b-8113-47a6fb25e457.png',
    alt: '',
  },
  {
    src: '/gallery/849aeda8-a4fa-4a4b-acce-eaeb4a0aa47c.png',
    alt: '',
  },
  {
    src: '/gallery/01a2ad91-58c0-4154-ac4c-e8b58e657e16.png',
    alt: '',
  },
  {
    src: '/gallery/f1b22708-fc21-4567-a567-a99ba5c546b7.png',
    alt: '',
  },
  {
    src: '/gallery/38d21cd9-baa5-4225-a3d0-6c378b271ec6.png',
    alt: '',
  },
  {
    src: '/gallery/69ecf235-40f9-4059-899a-9d6e033b0828.png',
    alt: '',
  },
  {
    src: '/gallery/3dc591a3-9af1-4ccc-b4e4-7778b250bac1.png',
    alt: '',
  },
  {
    src: '/gallery/a58a13e7-1a34-4db2-85f3-821b08322225.png',
    alt: '',
  },
  {
    src: '/gallery/a80b5bbd-8a3a-432b-94a2-815c0d0a61fe.png',
    alt: '',
  },
  {
    src: '/gallery/a161193e-ebd8-4ef0-bab9-77ea0de55ca6.png',
    alt: '',
  },
  {
    src: '/gallery/a16f2178-e3c3-4ed0-8ec5-31811e857db0.png',
    alt: '',
  },
  {
    src: '/gallery/750107aa-e016-4a7c-b94f-5c1cfe41066c.png',
    alt: '',
  },
  {
    src: '/gallery/c550c9fc-303a-4078-a2f8-99206546921f.png',
    alt: '',
  },
]

export const IMAGES = {
  hero:
    '/hero/4b2f90cd-a42a-4eb5-89b5-de9e957bc50f.png',
  about:
    '/about/201e4aa4-6432-4aff-aa2b-2051f05052f9.png',
  studio1:
    '/studio/8da8018d-7965-47a9-8951-2c8e24bbb67a.png',
  studio2:
    '/studio/45b074fa-3f1f-4826-9d76-493d40904b68.png',
  studio3:
    '/studio/8786f423-32e0-45a9-983f-88506235515d.png',
  studio4:
    '/studio/f8263a25-54d9-44c4-a2f1-1862b445592c.png',
  location:
    '',
  rules:
    '',
  scheduling:
    '',
}

export const CONTRAINDICATIONS = [
  'Pele irritada, lesionada ou sensibilizada',
  'Acne inflamada ativa',
  'Dermatites, alergias ou infecções na região',
  'Pós-procedimentos estéticos recentes na área',
  'Uso de ácidos fortes sem avaliação prévia',
  'Feridas, cortes ou queimaduras na região',
]
