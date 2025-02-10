import { Child } from './jsx-runtime'

interface WaxType {
    Raw(v: string): void
}

declare global {
    var wax: WaxType

    type PropsWithChildren<P = unknown> = P & {
        children?: Child | undefined
    }
}

export {}
