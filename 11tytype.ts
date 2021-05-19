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
}

export type EleventyCollection<Template> = EleventyCollectionItem<Template>[]

export type EleventyLayout<Template, Collections> = Template & {
  collections: Collections & {
    all: any[]
  }
  content: string
  date: Date
}

/*
interface Page {
date: Date
filePathStem: string
fileSlug: string
inputPath: string
outputPath: string
url: string
}

interface Parsed {
root: string
dir: string
base: string
ext: string
name: string
extname: string
basename: string
dirname: string
stem: string
path: string
absolute: boolean
isAbsolute: boolean
}

interface TemplateFileSlug {
cleanInputPath: string
dirs: string[]
filenameNoExt: string
inputPath: string
parsed: Object
}

interface Template {
extraOutputSubdirectory: string
fileSlug: TemplateFileSlug
fileSlugStem: string
fileSlugStr: string
inputContent: string
inputDir: string
inputPath: string
isDryRun: boolean
isVerbose: boolean
outputDir: string
paginationData: Object
parsed: Parsed
skippedCount: number
wrapWithLayouts: boolean
writeCount: number
}

interface Item {
date: Date;
fileSlug: string;
inputPath: string;
outputPath: string;
url: string;
}

interface Collection {
all: Item[]
getAll: () => Item[]
getAllSorted: () => Item[]
getFilteredByGlob: (glob: string) => Item[]
getFilteredByTag: (tagName: string) => Item[]
getFilteredByTags: (...tagNames: string[]) => Item[]
}

interface Package {
}

*/