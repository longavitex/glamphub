'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import HeaderOne from '@/components/Header/HeaderOne'
import blogData from '@/data/Blog.json'
import Footer from '@/components/Footer/Footer'
import * as Icon from "phosphor-react";
import Rate from '@/components/Other/Rate';
import BlogItem from '@/components/Blog/BlogItem';

const BlogDetail = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    let blogId = searchParams.get('id')
    if (blogId === null) {
        blogId = '1'
    }

    const blogMain = blogData[Number(blogId) - 1]

    const handleBlogClick = (category: string) => {
        // Go to blog detail with category selected
        router.push(`/blog/default?category=${category}`);
    };

    const handleBlogDetail = (id: string) => {
        // Go to blog detail with id selected
        router.push(`/blog/detail?id=${id}`);
    };

    return (
        <>
            <HeaderOne />
            <div className='blog detail'>
                <div className="bg-img 2xl:h-[800px] xl:h-[640px] lg:h-[500px] md:h-[400px] h-[300px]">
                    <Image
                        src={blogMain.thumbnail}
                        width={4000}
                        height={3000}
                        alt={blogMain.title}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container">
                    <div className="blog-content flex items-center justify-center lg:pt-20 md:pt-14 pt-10">
                        <div className="main xl:basis-5/6">
                            <div className="blog-tag bg-primary text-white py-1.5 px-2.5 text-label inline-block">{blogMain.category}</div>
                            <div className="heading3 mt-3">{blogMain.title}</div>
                            <div className="author flex items-center gap-4 mt-4">
                                <div className="avatar w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={blogMain.avatar}
                                        width={200}
                                        height={200}
                                        alt='avatar'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className="text-variant1">{blogMain.author}</div>
                                    <div className="line w-px h-4 bg-outline"></div>
                                    <div className="text-variant1">{blogMain.date}</div>
                                </div>
                            </div>
                            <div className="content mt-7">
                                <div className="body2">{blogMain.shortDesc}</div>
                                <div className="body2 mt-0">{blogMain.description}</div>
                                <div className="heading4 md:mt-8 mt-5">Blackberry Farm and Mountain</div>
                                <div className="body2 mt-3">{`A Wanderful best seller even before social distancing was a ‘thing’ - Blackberry Farm has only escalated in popularity this past year and for great reason! Located on 4,200 acres in the gorgeous foothills of the Smoky Mountains, outside of Knoxville, TN, this Relais & Chateaux resort is known for their mouthwatering farm-to-table cuisine (and infamous wine cellar). With only 68 rooms, including many free-standing suites, cottages and multi-bedroom homes, the resort was made for socially distant honeymoons, anniversaries, milestone birthdays and multi-generational family retreats alike.`}</div>
                                <div className="quote-block md:mt-8 mt-5 py-8 md:px-10 px-8 bg-surface border-l-4 border-primary rounded-xl">
                                    <div className="heading5">{String.raw`"`}Sweet Treats: Wanderful Journeys clients get 15% off rates at both Blackberry Farm and Mountain , plus Virtuoso amenities such as $100 spa credit for your stay!{String.raw`"`}</div>
                                    <div className="text-button text-variant1 flex items-center gap-3 mt-4">
                                        <span className='w-4 h-px bg-variant1'></span>
                                        Nelson Mandela
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-[30px] md:mt-8 mt-5">
                                    {blogMain.images.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item}
                                            width={3000}
                                            height={2000}
                                            alt={item}
                                            className='w-full rounded-3xl'
                                        />
                                    ))}
                                </div>
                                <div className="heading4 md:mt-8 mt-5">Belmond El Encanto</div>
                                <div className="body2 mt-3">{`When you can’t make it to the French or Italian Riviera - the American Riviera will more than do! Perched above Santa Barbara with the most dreamy panoramic Pacific views, Belmond El Encanto is another client favorite just made for social distancing. The property is dotted with charming bungalows, the most instagramable pool and serene breakfast views. With so much client interest, I had to check out what all the hype was about for myself this past Fall - and what a magical stay it was!`}</div>
                                <div className="body2 mt-3">{`This National Geographic Unique Lodge of the World, nestled outside of Big Sky, Montana, is a client favorite year-round. Lone Mountain Ranch has 27 historic cabins throughout the property, and is an outdoor paradise for families, friends and couples alike. In winter, dining at farm-to-table Horn & Cantle Restaurant is a culinary treat after days skiing at Big Sky, ice climbing, dog sledding or snowmobiling nearby. Long summer days are filled with horseback rides, hiking or exploring nearby Yellowstone National Park. See for yourself why clients keep returning again and again!`}</div>
                            </div>
                            <div className="action flex items-center justify-between flex-wrap gap-5 md:mt-8 mt-5">
                                <div className="left flex items-center gap-3 flex-wrap">
                                    <p>Tag:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <div
                                            className={`tags bg-surface py-2 px-4 text-label cursor-pointer duration-300 hover:bg-primary hover:text-white`}
                                            onClick={() => handleBlogClick('glamping')}
                                        >
                                            glamping
                                        </div>
                                        <div
                                            className={`tags bg-surface py-2 px-4 text-label cursor-pointer duration-300 hover:bg-primary hover:text-white`}
                                            onClick={() => handleBlogClick('camping')}
                                        >
                                            camping
                                        </div>
                                        <div
                                            className={`tags bg-surface py-2 px-4 text-label cursor-pointer duration-300 hover:bg-primary hover:text-white`}
                                            onClick={() => handleBlogClick('activities')}
                                        >
                                            activities
                                        </div>
                                    </div>
                                </div>
                                <div className="right list-social flex items-center gap-3 flex-wrap">
                                    <p>Share:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <Link href={'https://www.facebook.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-primary hover:text-white'>
                                            <div className="icon-facebook"></div>
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-primary hover:text-white'>
                                            <div className="icon-instagram"></div>
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-primary hover:text-white'>
                                            <div className="icon-twitter"></div>
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-primary hover:text-white'>
                                            <div className="icon-youtube"></div>
                                        </Link>
                                        <Link href={'https://www.pinterest.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-primary hover:text-white'>
                                            <div className="icon-pinterest"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="next-pre grid sm:grid-cols-2 md:mt-8 mt-5 py-6 border-y border-line relative">
                                {blogId === '1' ? (
                                    <>
                                        <div className="left cursor-pointer xl:pr-[140px] sm:pr-[60px]"
                                            onClick={() => handleBlogDetail(String(blogData.length))}
                                        >
                                            <div className="text-button text-variant2 duration-300">Previous</div>
                                            <div className="title heading6 duration-300 mt-2">{blogData[blogData.length - 1].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="left cursor-pointer xl:pr-[140px] sm:pr-[60px]"
                                            onClick={() => handleBlogDetail(blogData[Number(blogId) - 2].id)}
                                        >
                                            <div className="text-button text-variant2 duration-300">Previous</div>
                                            <div className="title heading6 duration-300 mt-2">{blogData[Number(blogId) - 2].title}</div>
                                        </div>
                                    </>
                                )}
                                <div className='h-[60px] w-px bg-outline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:hidden'></div>
                                {Number(blogId) === blogData.length ? (
                                    <>
                                        <div className="right sm:text-right cursor-pointer xl:pl-[140px] sm:pl-[60px] max-sm:mt-6"
                                            onClick={() => handleBlogDetail('1')}
                                        >
                                            <div className="text-button text-variant2 duration-300">Next</div>
                                            <div className="title heading6 duration-300 mt-2">{blogData[0].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="right sm:text-right cursor-pointer xl:pl-[140px] sm:pl-[60px] max-sm:mt-6"
                                            onClick={() => handleBlogDetail(blogData[Number(blogId)].id)}
                                        >
                                            <div className="text-button text-variant2 duration-300">Next</div>
                                            <div className="title heading6 duration-300 mt-2">{blogData[Number(blogId)].title}</div>
                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="list-comment md:mt-[60px] mt-8">
                                <div className="heading flex items-center justify-between flex-wrap gap-4">
                                    <div className="heading4">03 Comments</div>
                                    <div className="right flex items-center gap-3">
                                        <label htmlFor='select-filter' className="uppercase">Sort by:</label>
                                        <div className="select-block relative">
                                            <select
                                                id="select-filter"
                                                name="select-filter"
                                                className='text-button py-2 pl-3 md:pr-14 pr-10 rounded-lg bg-white border border-line'
                                                defaultValue={'Sorting'}
                                            >
                                                <option value="Sorting" disabled>Sorting</option>
                                                <option value="newest">Newest</option>
                                                <option value="5star">5 Star</option>
                                                <option value="4star">4 Star</option>
                                                <option value="3star">3 Star</option>
                                                <option value="2star">2 Star</option>
                                                <option value="1star">1 Star</option>
                                            </select>
                                            <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="list-review mt-6">
                                    <div className="item">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/can1.jpg'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-title">Tony Nguyen</div>
                                                        <div className="span text-line">-</div>
                                                        <Rate currentRate={5} classname='text-xs' />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-secondary2">1 days ago</div>
                                                        <div className="text-secondary2">-</div>
                                                        <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                        <div className="action flex justify-between mt-3">
                                            <div className="left flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <div className="text-button">20</div>
                                                </div>
                                                <div className="hide-rep-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.Chat size={18} />
                                                    <div className="text-button">Hide Replies</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="reply-btn text-button text-secondary">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item md:mt-8 mt-5">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/can2.jpg'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-title">Guy Hawkins</div>
                                                        <div className="span text-line">-</div>
                                                        <Rate currentRate={4} classname='text-xs' />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-secondary2">1 days ago</div>
                                                        <div className="text-secondary2">-</div>
                                                        <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                        <div className="action flex justify-between mt-3">
                                            <div className="left flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <div className="text-button">20</div>
                                                </div>
                                                <div className="hide-rep-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.Chat size={18} />
                                                    <div className="text-button">Hide Replies</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="reply-btn text-button text-secondary">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item md:mt-8 mt-5">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/can3.jpg'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-title">John Smith</div>
                                                        <div className="span text-line">-</div>
                                                        <Rate currentRate={5} classname='text-xs' />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-secondary2">1 days ago</div>
                                                        <div className="text-secondary2">-</div>
                                                        <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                        <div className="action flex justify-between mt-3">
                                            <div className="left flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <div className="text-button">20</div>
                                                </div>
                                                <div className="hide-rep-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.Chat size={18} />
                                                    <div className="text-button">Hide Replies</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="reply-btn text-button text-secondary">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="form-review" className='form-review md:p-10 p-6 bg-surface rounded-xl md:mt-10 mt-6'>
                                    <div className="heading4">Leave A comment</div>
                                    <form className="grid sm:grid-cols-2 gap-4 gap-y-5 md:mt-6 mt-3">
                                        <div className="name ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                        </div>
                                        <div className="mail ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                        </div>
                                        <div className="col-span-full message">
                                            <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="message" name="message" placeholder="Your message *" required ></textarea>
                                        </div>
                                        <div className="col-span-full flex items-start -mt-2 gap-2">
                                            <input type="checkbox" id="saveAccount" name="saveAccount" className='mt-1.5' />
                                            <label className="" htmlFor="saveAccount">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className="col-span-full sm:pt-3">
                                            <button className='button-main bg-white text-black border border-black'>Submit Reviews</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:py-20 md:py-14 py-10'>
                        <div className="heading3 text-center">News insight</div>
                        <div className="list grid grid-cols-3 gap-[30px] md:mt-10 mt-6">
                            {blogData.slice(0, 3).map(item => (
                                <BlogItem data={item} type='style-grid' key={item.id} />
                            ))}
                        </div>
                        {/* <NewsInsight data={blogData} start={0} limit={3} /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetail