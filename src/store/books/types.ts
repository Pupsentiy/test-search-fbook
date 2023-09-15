export interface BooksSchema {
  data?: Books | undefined
  isLoading: boolean
  error?: string | unknown
}

export interface fetchBooksDataType {
  searchValue: string
  category: string
  sort: string
}

export interface fetchLoadMoreDataType {
  searchValue: string
  currentPage: number
}

export interface Books {
  kind: string
  totalItems: number
  items: Item[]
}

export interface Item {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}

export interface VolumeInfo {
  title: string
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount: number
  printType: string
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  authors?: string[]
  categories?: string[]
}

export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: ListPrice
  retailPrice?: RetailPrice
  buyLink?: string
  offers?: Offer[]
}

export interface ListPrice {
  amount: number
  currencyCode: string
}

export interface RetailPrice {
  amount: number
  currencyCode: string
}

export interface Offer {
  finskyOfferType: number
  listPrice: ListPrice2
  retailPrice: RetailPrice2
}

export interface ListPrice2 {
  amountInMicros: number
  currencyCode: string
}

export interface RetailPrice2 {
  amountInMicros: number
  currencyCode: string
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface Epub {
  isAvailable: boolean
  acsTokenLink?: string
}

export interface Pdf {
  isAvailable: boolean
  acsTokenLink?: string
}

export interface SearchInfo {
  textSnippet: string
}
