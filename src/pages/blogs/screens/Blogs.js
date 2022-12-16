import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { Dialog, DialogActions, DialogContent } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { GetAllOrderedBlogs } from '../../../api/CRUD_API'
import AppButton from '../../../global_component/AppButton'
import BlogCard from '../../../global_component/BlogCard'
import IconButton from '../../../global_component/IconButton'
import Loading from '../../../global_component/Loading'
import Trending from '../../../global_component/Trending/Trending'
import FilterWrapper from '../components/FilterWrapper'
import SortDropdown from '../components/SortDropdown'
import { useFilter } from '../../../hooks'

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [filteredBlogs, setFilteredBlog] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const [filterData, setFilterData] = useFilter()
    const [filterValueSet, setFilterValueSet] = useState()


    const FilterBlogs = (blogs) => {
        const filteredBlogs = []
        blogs.map(blog => {
            {
                (
                    filterData.selectedValue.author.includes(blog.author.name)
                    && filterData.selectedValue.year.includes(GetBlogYear(blog.createdAt.seconds))
                    && filterData.selectedValue.category.includes(blog.category)
                    && filterData.selectedValue.regions.includes(blog.regions)
                ) && filteredBlogs.push(blog)
            }
        })

        setFilteredBlog(filteredBlogs)
    }

    const GetBlogYear = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.getFullYear()
    }

    const RemoveDuplicateItem = (array) => {
        return [...new Set(array)]
    }

    // useEffect(() => {
    //     GetAllOrderedBlogs('createdAt').then((allBlogs) => {
    //         setAllBlogs(allBlogs)
    //         setFilteredBlog(allBlogs)
    //         const values = {
    //             author: [],
    //             year: [],
    //             category: [],
    //             regions: []
    //         }
    //         allBlogs.map((blog) => {
    //             values.author.push(blog.author.name)
    //             values.category.push(blog.category)
    //             values.regions.push(blog.regions)
    //             values.year.push(GetBlogYear(blog.createdAt.seconds))
    //         })
    //         setFilterValueSet(values)
    //     })
    // }, [])

    function SortBlogs(sortedBlogs) {
        setAllBlogs(sortedBlogs)
    }

    const toggleFilter = () => {
        RemoveFilter()
        setShowFilter(!showFilter)
        RemoveFilter()
    }

    const RemoveFilter = () => {
        setFilterData((previousState) => {
            return {
                ...previousState, unselectAll: !previousState.unselectAll
            }
        })
    }

    return (
        <div className="flex pt-4">
            <div className="w-7/12 ">
                <div className="flex">
                    <IconButton icon={faFilter} className="my-4 text-teal relative lg:left-8" iconClass="lg:text-3xl"
                        onClick={toggleFilter}
                    />
                    <SortDropdown handleSort={SortBlogs} data={[...allBlogs]} />
                </div>
                <Dialog open={showFilter} onClose={toggleFilter}>
                    <DialogContent>
                        {filterValueSet && <>
                            <FilterWrapper attributeName="Author" values={RemoveDuplicateItem(filterValueSet.author)} />
                            <FilterWrapper attributeName="Year" values={RemoveDuplicateItem(filterValueSet.year)} />
                            <FilterWrapper attributeName="Category" values={RemoveDuplicateItem(filterValueSet.category)} />
                            <FilterWrapper attributeName="Regions" values={RemoveDuplicateItem(filterValueSet.regions)} />
                        </>
                        }
                    </DialogContent>
                    <DialogActions>
                        <AppButton content="Restart" className="bg-dark-grey" onClick={toggleFilter} />
                        <AppButton content="Finish" className="" onClick={() => FilterBlogs(allBlogs)}/>
                    </DialogActions>
                </Dialog>
                {
                    filteredBlogs.length > 0 ? (
                        <div className="grid lg:grid-cols-3 gap-16">
                            {allBlogs.map((blog) => <BlogCard
                                item={blog}
                                isEdit={false}
                            />)}
                        </div>
                    ) : <Loading />
                }
            </div>
            <Trending className="w-5/12 relative lg:left-16 lg:top-20" />
        </div>
    )
}

export default Blogs
