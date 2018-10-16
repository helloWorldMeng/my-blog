import ShowBlogs from './components/ShowBlogs'
import AddBlogs from './components/AddBlog'
import BlogDetail from './components/BlogDetail'
export default[
  {path:'/', component: ShowBlogs},
  {path:'/add', component: AddBlogs},
  {path:'/detail', component: BlogDetail}
]
