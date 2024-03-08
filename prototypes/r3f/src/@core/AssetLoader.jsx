import React, {
    createContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from 'react'
import useStateFromProp from './useStateFromProp'

export const AssetLoaderContext = createContext(null)

const createRegExp = extensions => new RegExp(`^.*\\.(${extensions})$`, 'i')
const imageRegExp = createRegExp('jpg|png|gif')
const audioRegExp = createRegExp('wav|mp3|ogg')

function loadAsset(url) {
    return new Promise((resolve, reject) => {
        let asset
        if (imageRegExp.test(url))
            asset = new Image()
        else if (audioRegExp.test(url))
            asset = new Audio()

        function handleLoad(event) {
            if (event.type === 'error') {
                reject()
                return;
            }
            resolve(asset)
        }

        asset.onload = handleLoad
        asset.oncanplaythrough = handleLoad
        asset.onerror = handleLoad
        asset.src = url
    })
}

const assets = {
    current: {}
}

export function AssetLoaderProvider({ children }) {
    return (
        <AssetLoaderContext.Provider value={assets}>
            {children}
        </AssetLoaderContext.Provider>
    )
}

export default function AssetLoader({ urls, placeholder, children }) {
    const [urls, setUrls] = useStateFromProp(urls)
    const [count, setCount] = useState(0)
    const uniqueUrls = useRef()
    uniqueUrls.current = new Set(urls)
    const timeout = useRef()
    const mounted = useRef(true)

    useLayoutEffect(
        () => () => { mounted.current = false },
        []
    )

    useEffect(() => {
        (async () => {
            for (const url of uniqueUrls.current) {
                try {
                    const asset = await loadAsset(url)
                    assets.current[url] = asset
                    if (mounted.current)
                        setCount(current => current + 1)
                }
                catch {
                    console.error('Error loading asset:', url)
                }
            }
            clearTimeout(timeout.current)
        })()
    }, [urls])

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            const delay = 2000 + uniqueUrls.current.size * 100
            timeout.current = setTimeout(() => {
                setCount(0)
                setUrls(urls.slice())
                console.warn('AssetLoader failed loading after timeout')
            }, delay)
            return () => clearTimeout(timeout.current)
        }
        return undefined
    }, [urls, setUrls])

    if (count < uniqueUrls.current.size) {
        return placeholder ?
        (
            <HtmlOverlay center>
                <span>{placeholder}</span>
            </HtmlOverlay>
        )
        : null
    }

    return <AssetLoaderProvider>{children}</AssetLoaderProvider>
}