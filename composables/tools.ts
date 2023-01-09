// dynamic import assets file
//Usage: <img :src="useAsset(dynamic_image_name + '.svg')" alt="Discover Nuxt 3" />
export const useAsset = (path: string): string => {
  // const assets = import.meta.glob('~/assets/**/*', {
  //   eager: true,
  //   import: 'default',
  // })
  // // @ts-expect-error: wrong type info
  return "assets['/assets/' + path]"
}