// mdx.d.ts
// Declaraciones de tipos para archivos MDX

declare module '*.mdx' {
  import type { ComponentProps, ComponentType, SFC } from 'react'
  
  interface MDXProps {
    [key: string]: any
  }
  
  const MDXComponent: SFC<MDXProps>
  export default MDXComponent
}

declare module '@mdx-js/react' {
  import type { ComponentType, SFC } from 'react'
  
  export interface MDXProviderProps {
    components?: Record<string, ComponentType<any>>
    children: React.ReactNode
  }
  
  export const MDXProvider: SFC<MDXProviderProps>
  export const useMDXComponents: (components: Record<string, ComponentType<any>>) => Record<string, ComponentType<any>>
} 