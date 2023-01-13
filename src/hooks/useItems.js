import React, { useMemo } from 'react';

export const useCategoryItems = (posts, category) => {
    const categoryPosts = useMemo(() => {
        if (category.length) {
            return posts.filter(post => category.includes(post.category))
        }
        return posts
    }, [category, posts])

    return categoryPosts
}

export const useBrandItems = (posts, brand, category) => {
    const categoryPosts = useCategoryItems(posts, category)
    const brandPosts = useMemo(() => {
        if (brand.length) {
            return categoryPosts.filter(post => brand.includes(post.brand))
        }
        return categoryPosts
    }, [brand, categoryPosts])

    return brandPosts
}

export const useSortedItems = (posts, sort, brand, category) => {
    const brandPosts = useBrandItems(posts, brand, category)
    const sortedPosts = useMemo(() => {
        if(sort) {
            if (!sort.includes('-low')) {
                return [...brandPosts].sort((a, b) => b[sort] - a[sort])
            }
            else {
                return [...brandPosts].sort((a, b) => a[sort.slice(0, -4)] - b[sort.slice(0, -4)])
            }
        }
        return brandPosts
    }, [sort, brandPosts])

    return sortedPosts
}

export const useItems = (posts, sort, query, brand, category) => {
    const sortedPosts = useSortedItems(posts, sort, brand, category)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => `${post.rating.toString().toLowerCase()}${post.stock.toString().toLowerCase()}${post.model.toLowerCase()}${post.brand.toLowerCase()}${post.category.toLowerCase()}${post.model.toLowerCase()}`.includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}