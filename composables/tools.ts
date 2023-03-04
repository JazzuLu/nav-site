import { Ref } from 'vue';
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


export const useClickOutside = (elementRef: Ref<HTMLElement | undefined>, cb: (outside: boolean) => void) => {
  const handleClick = (event: MouseEvent) => {
    if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
      cb && cb(false)
    } else {
      cb && cb(true)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClick)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick)
  })
}