import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Categories from '@/components/Categories'
import About from '@/components/About'
import CategoriesDetail from '@/components/CategoriesDetail'
import ArticleView from '@/components/ArticleView'
import ArticleEdit from '@/components/ArticleEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    , {
      path: '/categories',
      name: 'Categories',
      component: Categories
    }
    , {
      path: '/about',
      name: 'About',
      component: About
    }
    ,{ 
      path: '/categories/:categoryId', 
      component: CategoriesDetail,
    }
    ,{
     path: '/categories/:categoryId/articles/:articleId/view',
     name : ArticleView ,
     component: ArticleView
    }
    ,{
     path: '/categories/:categoryId/articles/:articleId/edit',
     name : ArticleEdit ,
     component: ArticleEdit
    }
    ]
})
