interface DefaultTemplate {}
type DefaultCollections = {}

export interface EleventyData<Collections> {
  collections: Collections
  pkg: Object
}

export type EleventyCollectionItem<Template> = {
  template: string
  inputPath: string
  fileSlug: string
  filePathStem: string
  data: Template & {
  }
  date: Date
  outputPath: string
  templateContent: string
  url: string
}

export type EleventyCollection<
  Template = DefaultTemplate
> = EleventyCollectionItem<Template>[]

export type EleventyLayout<
  Template = DefaultTemplate,
  Collections = DefaultCollections
> = Template & {
  collections: Collections & {
    all: any[]
  }
  content: string
  date: Date
}
