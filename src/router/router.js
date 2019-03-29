//一级路由
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/about/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

//二级路由

import Contact from '../components/about/Contact.vue'
import Dilivery from '../components/about/Dilivery.vue'
import History from '../components/about/History.vue'
import OrderingGuide from '../components/about/OrderingGuide.vue'



//三级路由

import Phone from '../components/about/Phone.vue'
import PersonName from '../components/about/PersonName.vue'




export default [{
    path: "/",
    name: "homeLink",
    components: {
      default: Home,
      "orderingGuide": OrderingGuide,
      "delivery": Dilivery,
      "history": History
    }
  },
  // 路由独享守卫
  { path: "/admin", name: "adminLink", component: Admin,
    /*beforeEnter:(to,from,next) => {
        alert("非登录状态不能访问这个页面")
        // next(false)
        next("/login")
      }*/
  },
  { path: "/menu", name: "menuLink", component: Menu },
  {
    path: "/about",
    name: "aboutLink",
    redirect: "/contact",
    component: About,
    children: [
      { path: "/history", name: "historyLink", component: History },
      { path: "/dilivery", name: "diliveryLink", component: Dilivery },
      {
        path: "/contact",
        name: "contactLink",
        redirect: "/phoneNumber",
        component: Contact,
        children: [
          { path: "/phoneNumber", name: "phoneLink", component: Phone },
          { path: "/personName", name: "personLink", component: PersonName }
        ]
      },
      { path: "/orderingGuide", name: "orderingGuideLink", component: OrderingGuide },
    ]
  },
  { path: "/login", name: "loginLink", component: Login },
  { path: "/register", name: "registerLink", component: Register },
  { path: "*", redirect: '/' },

]
