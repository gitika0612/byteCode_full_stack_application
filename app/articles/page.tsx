import ArticleSearchInput from '@/components/articles/article-search-input';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen bg-background '>
            <main className='container mx-auto px-4 py-12 sm:px-6 lg:text-5xl'>
                <div className='mb-12 space-y-6 text-center'>
                    <h1 className='text-4xl font-bold sm:text-5xl'>All Artciles</h1>

                    <ArticleSearchInput />
                </div>

                <div className='mt-12 flex justify-center gap-2'>
                    <Button variant={'ghost'} size={'sm'} className='cursor-pointer'> &laquo; Prev</Button>
                    <Button variant={'ghost'} size={'sm'} className='cursor-pointer'>1</Button>
                    <Button variant={'ghost'} size={'sm'} className='cursor-pointer'>2</Button>
                    <Button variant={'ghost'} size={'sm'} className='cursor-pointer'>3</Button>
                    <Button variant={'ghost'} size={'sm'} className='cursor-pointer'>Next  &raquo;</Button>
                </div>
            </main>
        </div>
    )
}

export default page;