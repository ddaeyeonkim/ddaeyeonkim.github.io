import React, { FC } from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

type SEOProps = {
    title?: string
    description?: string
    pathname?: string
    children?: React.ReactNode
}

const Seo: FC<SEOProps> = ({
    title,
    description,
    pathname,
    children
}: SEOProps) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
        twitterUsername
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    }

    return (
        <>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🖥️</text></svg>" />
            <title>{seo.title}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {/* Open Graph data */}
            {/* 대부분의 SNS에서 사용할 수 있는 데이터  */}
            <meta property="og:title" content={seo.title} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:site_name" content={seo.title} />

            {/* Meta Data for Twitter */}
            <meta name="twitter:card" content={seo.description} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />

            <html lang="ko" />
            {children}
        </>
    )
}

export default Seo