(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t){},131:function(e,t,a){e.exports=a(518)},136:function(e,t,a){},138:function(e,t,a){},147:function(e,t){},153:function(e,t){},187:function(e,t,a){},189:function(e,t,a){},191:function(e,t,a){},193:function(e,t,a){},195:function(e,t,a){},197:function(e,t,a){e.exports=a.p+"static/media/gopher_me.dd4ade1c.png"},214:function(e,t,a){},217:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/penguin.b1533602.png"},48:function(e,t,a){},512:function(e,t,a){e.exports=a.p+"static/media/penguin.b1533602.png"},514:function(e,t,a){},516:function(e,t,a){},518:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(111),i=a.n(o),l=(a(136),a(2)),c=a(3),s=a(5),u=a(4),m=a(6),p=a(7),h=a(79),d=(a(138),a(522)),b=a(8),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.lang===this.props.langValue?{backgroundColor:"#111",color:"#fff"}:{},r.a.createElement("button",{onClick:function(){return t.props.setLocale(t.props.langValue)},className:"lang-box",style:e},this.props.displayLang)}}]),t}(r.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"nav-container"},r.a.createElement(d.a,{to:"/"},r.a.createElement("span",{className:"logo"},r.a.createElement(b.a,{id:"nav.title",defaultMessage:"BLOG"}))),r.a.createElement("div",{className:"nav-locale-box"},r.a.createElement(g,{setLocale:this.props.setLocale,lang:this.props.lang,langValue:"en",displayLang:"EN"}),r.a.createElement(g,{setLocale:this.props.setLocale,lang:this.props.lang,langValue:"ja",displayLang:"JA"}))))}}]),t}(r.a.Component),v=a(50),E=(a(82),a(83),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{value:this.props.value,onClick:this.props.updateTag,className:"tag-button"},"#",this.props.name)}}]),t}(r.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return 1===this.props.category?e="Ruby":2===this.props.category?e="Go":3===this.props.category?e="JavaScript":5===this.props.category?e="React":6===this.props.category?e="Rails":7===this.props.category?e="Others":8===this.props.category&&(e="Life"),r.a.createElement("div",{className:e})}}]),t}(r.a.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={hover:!1},e.toggleOn=e.toggleOn.bind(Object(p.a)(Object(p.a)(e))),e.toggleOff=e.toggleOff.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=t.getMonth()+1,n=t.getDate(),r=t.getFullYear();return"".concat(r,"/").concat(a,"/").concat(n)}},{key:"toggleOn",value:function(){this.setState({hover:!0})}},{key:"toggleOff",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var e,t=this;1===this.props.category?e="#701516":2===this.props.category?e="#74CDDD":3===this.props.category?e="#F6D033":5===this.props.category?e="#009FCE":6===this.props.category?e="#CC0001":7===this.props.category?e="#3B444E":8===this.props.category&&(e="#5AB601");var a=this.state.hover?{borderLeft:"solid 5px ".concat(e)}:null,n=this.props.tags.map(function(e,a){return r.a.createElement(E,{key:a,value:e.id,updateTag:t.props.updateTag,name:e.name})}),o=this.props.introduction?this.props.introduction:"";return r.a.createElement("div",{className:"post-box",style:a,onMouseEnter:this.toggleOn,onMouseLeave:this.toggleOff},r.a.createElement("h3",{className:"post-title"},r.a.createElement(d.a,{to:"/Post/".concat(this.props.id),className:"post-title-link"},this.props.title)),r.a.createElement(y,{category:this.props.category}),r.a.createElement("p",{className:"post-introduction"},o.substring(0,250),"..."),r.a.createElement("p",{className:"post-tag-list"},n),r.a.createElement("p",{className:"created-date"},this.formatDate(this.props.created_at)))}}]),t}(r.a.Component),j=(a(40),a(9)),k=a(51),N=a(529),w=(a(187),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="category-button-".concat(this.props.name),t=this.props.activeCategory===this.props.value?r.a.createElement("button",{value:this.props.value,onClick:this.props.updateCategory,className:e},this.props.name):r.a.createElement("button",{value:this.props.value,onClick:this.props.updateCategory,className:"category-button"},this.props.name);return r.a.createElement(r.a.Fragment,null,t)}}]),t}(r.a.Component)),T=(a(189),a(191),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={width:300,height:300,numOfPenguin:1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={width:"".concat(this.state.width,"px"),height:"".concat(this.state.height,"px")};return r.a.createElement("div",null,r.a.createElement("img",{alt:"PENGUIN",src:a(41),style:e,className:"penguin"}))}}]),t}(r.a.Component)),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"no-post-found-box"},r.a.createElement(d.a,{to:"/about"},r.a.createElement(T,null)),r.a.createElement("h2",null,"No Post Found"),r.a.createElement("button",{value:0,name:"All",onClick:this.props.showAllPosts,className:"show-all-posts-btn"},"Show All Posts"))}}]),t}(r.a.Component),x=(a(193),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading-box"},r.a.createElement(d.a,{to:"/about"},r.a.createElement("img",{alt:"PENGUIN",src:a(41),className:"penguin"})),r.a.createElement("h3",null,r.a.createElement(b.a,{id:"loadingBox.title",defaultMessage:"Hi! It might take a while to boost up the backend-server."})),r.a.createElement("h3",null,r.a.createElement(b.a,{id:"loadingBox.subtitle",defaultMessage:"Meanwhile, let me introduce myself:)"})),r.a.createElement("div",{className:"self-introduction"},r.a.createElement("p",null,r.a.createElement(b.a,{id:"loadingBox.paragraphOne",defaultMessage:"Default"})),r.a.createElement("p",null,r.a.createElement(b.a,{id:"loadingBox.paragraphTwo",defaultMessage:"Default"})),r.a.createElement("p",null,r.a.createElement(b.a,{id:"loadingBox.paragraphThree",defaultMessage:"Default"}))))}}]),t}(r.a.Component)),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-box"},r.a.createElement("h4",{className:"search-box-title"},r.a.createElement("span",{className:"title"},r.a.createElement(b.a,{id:"search.title",defaultMessage:"Search Box"}))),r.a.createElement("input",{type:"text",value:this.props.value,onChange:this.props.updateSearch,className:"search-bar",placeholder:"Search"}))}}]),t}(r.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"featured-post"},r.a.createElement("h5",null,r.a.createElement(d.a,{to:"/Post/".concat(this.props.id),className:"post-title"},this.props.title)),r.a.createElement("p",{className:"featured-post-description"},"K-Sato / ","5min read"))}}]),t}(r.a.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.activeTag===this.props.value?r.a.createElement("button",{className:"tag-active",value:this.props.value,onClick:this.props.updateTag},"#",this.props.name):r.a.createElement("button",{className:"tag",value:this.props.value,onClick:this.props.updateTag},"#",this.props.name);return r.a.createElement(r.a.Fragment,null,e)}}]),t}(r.a.Component),P=(a(195),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"author-box"},r.a.createElement("h4",{className:"author-box-title"},r.a.createElement("span",{className:"title"},r.a.createElement(b.a,{id:"author.title",defaultMessage:"About Me"}))),r.a.createElement(d.a,{to:"/about"},r.a.createElement("img",{alt:"PENGUIN",src:a(197),className:"author-penguin"})),r.a.createElement("h4",null,r.a.createElement(d.a,{to:"/about",className:"author-box-name"},r.a.createElement(b.a,{id:"author.name",defaultMessage:"K-Sato"}))),r.a.createElement("p",{className:"author-box-body"},r.a.createElement(b.a,{id:"author.body",defaultMessage:"I'm just a silly boy aspiring to be a competent programmer."})))}}]),t}(r.a.Component)),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.posts.slice(0,4).map(function(e,t){return r.a.createElement(I,{key:t,title:e.title,id:e.id})}),a=this.props.tags.map(function(t,a){return r.a.createElement(M,{activeTag:e.props.tag,key:a,value:t.id,name:t.name,updateTag:e.props.updateTag})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"right-container"},r.a.createElement(S,{value:this.props.search,updateSearch:this.props.updateSearch}),r.a.createElement("div",{className:"tag-list-box"},r.a.createElement("h4",{className:"tag-list-title"},r.a.createElement("span",{className:"title"},r.a.createElement(b.a,{id:"tagList.title",defaultMessage:"Tag List"}))),r.a.createElement("div",{className:"tag-list"},a)),r.a.createElement("div",{className:"featured-post-box"},r.a.createElement("h4",{className:"featured-posts-title"},r.a.createElement("span",{className:"title"},r.a.createElement(b.a,{id:"featuredPosts.title",defaultMessage:"Featured Posts"}))),t)))}}]),t}(r.a.Component);function B(){var e=Object(v.a)(["\n      margin: 0 auto;\n      display: block;\n    "]);return B=function(){return e},e}var R={baseUrl:"https://k-blog0130.herokuapp.com/"},A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getPosts=function(){fetch("".concat(R.baseUrl,"/api/v1/posts")).then(function(e){return e.json()}).then(function(t){t.data.posts.map(function(e,a){return e.tags=t.data.post_tags[a]}),e.setState({posts:t.data.posts,categories:t.data.categories,tags:t.data.tags,post_tags:t.data.post_tags,loading:!1})})},e.state={posts:[],categories:[],post_tags:[],tags:[],search:"",category:0,tag:0,loading:!0},e.updateSearch=e.updateSearch.bind(Object(p.a)(Object(p.a)(e))),e.updateCategory=e.updateCategory.bind(Object(p.a)(Object(p.a)(e))),e.updateTag=e.updateTag.bind(Object(p.a)(Object(p.a)(e))),e.showAllPosts=e.showAllPosts.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.getPosts()}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value})}},{key:"updateCategory",value:function(e){this.setState({tag:0,category:parseInt(e.target.value)})}},{key:"updateTag",value:function(e){this.setState({tag:parseInt(e.target.value)}),window.scrollTo(0,0)}},{key:"showAllPosts",value:function(){this.setState({category:0,tag:0,search:""})}},{key:"render",value:function(){var e=this,t=Object(j.css)(B()),a=this.state.posts.filter(function(t){var a=[];t.tags.map(function(e){return a.push(e.id)});var n=0!==e.state.category&&0!==e.state.tag,r=0!==e.state.tag,o=0!==e.state.category,i=a.includes(e.state.tag),l=t.category_id===e.state.category,c=t.title.toLowerCase().includes(e.state.search.toLowerCase());return n?l&&i&&c:r?i&&c:o?l&&c:c}),n=0!==a.length?a.map(function(t,a){return r.a.createElement(O,{key:a,id:t.id,title:t.title,introduction:t.introduction,category:t.category_id,tags:t.tags,updateTag:e.updateTag,updateCategory:e.updateCategory,created_at:t.created_at})}):!1===this.state.loading?r.a.createElement(C,{showAllPosts:this.showAllPosts}):"",o=this.state.categories.map(function(t,a){return r.a.createElement(w,{activeCategory:e.state.category,value:t.id,name:t.name,updateCategory:e.updateCategory,key:a})}),i=!0===this.state.loading?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-list-container"},r.a.createElement(w,{activeCategory:this.state.category,value:0,name:"All",updateCategory:this.updateCategory}),o,n),r.a.createElement(L,{posts:this.state.posts,tags:this.state.tags,tag:this.state.tag,search:this.state.search,updateSearch:this.updateSearch,updateTag:this.updateTag}));return r.a.createElement(N.a,{className:"container"},r.a.createElement(k.BarLoader,{css:t,sizeUnit:"px",size:80,color:"#E0E0E0",loading:this.state.loading}),i)}}]),t}(r.a.Component),D=(a(214),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"no-match-box"},r.a.createElement("img",{alt:"PENGUIN",src:a(41),className:"penguin"}),r.a.createElement("h1",null,"404 NOT FOUND"),r.a.createElement("h3",null,"Seems like the page you are looking for does not exist."))}}]),t}(r.a.Component)),F=(a(97),a(217),a(118)),G=a.n(F),K=a(530),U=a(122),_=a.n(U),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return r.a.createElement(K.a,{language:t,style:_.a,ineNumberContainerStyle:!0},a)}}]),t}(r.a.PureComponent);J.defaultProps={language:null};var W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"post-detail-author-box clearfix"},r.a.createElement("div",{className:"post-detail-author-box-left"},r.a.createElement("img",{alt:"PENGUIN",src:a(41),className:"post-author-penguin"})),r.a.createElement("div",{className:"post-detail-author-box-right"},r.a.createElement("div",{className:"post-detail-author-box-right-description"},r.a.createElement("h3",null,r.a.createElement(b.a,{id:"postAuthor.name",defaultMessage:"K-Sato"})),r.a.createElement("p",null,r.a.createElement(b.a,{id:"postAuthor.description",defaultMessage:"I am a junior web-developer based somewhere on earth. Write Ruby as my primary lannguage and also use Javascript every now and then. RoR and React are my go-to Frameworks. Sometimes I play with Go language."})),r.a.createElement(d.a,{to:"/about"},r.a.createElement("button",{className:"post-author-button"},"View Profile")))))}}]),t}(r.a.Component),H=a(523),V=a(524),z=a(525),q=a(526),Q=a(527),Y=a(528),$=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="https://k-sato1995.github.io/MyBlogFront/#/Post/".concat(this.props.pageId),a="Check out K-Sato's post";return r.a.createElement("div",{className:"like-box"},r.a.createElement("button",{className:"like-button",onClick:function(){return e.props.addLike()}},r.a.createElement("span",{className:"glyphicon glyphicon-thumbs-up"})),r.a.createElement("p",{className:"like-number"},this.props.like),r.a.createElement(H.a,{title:a,url:t,className:"snn-link"},r.a.createElement(V.a,{size:43,round:!0})),r.a.createElement(z.a,{title:a,url:t,className:"snn-link"},r.a.createElement(q.a,{size:43,round:!0})),r.a.createElement(Q.a,{title:a,url:t,className:"snn-link"},r.a.createElement(Y.a,{size:43,round:!0})))}}]),t}(r.a.Component),X=a(127),Z=a.n(X);function ee(){var e=Object(v.a)(["\n      display: block;\n      margin: 0 auto;\n    "]);return ee=function(){return e},e}var te={baseUrl:"https://k-blog0130.herokuapp.com/"};function ae(e,t){return"string"===typeof t?e+t:r.a.Children.toArray(t.props.children).reduce(ae,e)}function ne(e){var t=r.a.Children.toArray(e.children).reduce(ae,"").toLowerCase().replace(/\W/g,"-");return r.a.createElement("h"+e.level,{id:t},e.children)}var re=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getPosts=function(){var t=e.props.match.params.id;fetch("".concat(te.baseUrl,"api/v1/posts/").concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({data:t.data,loading:!1})})},e.addLike=function(){var t=e.state.data.id;fetch("".concat(te.baseUrl,"en/api/v1/posts/").concat(t,"/like"),{method:"PUT"}).then(function(e){return e.json()}).then(function(t){e.setState({data:t.data})})},e.state={data:{},loading:!0},e.addLike=e.addLike.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.getPosts()}},{key:"render",value:function(){var e=Object(j.css)(ee()),t=this.props.match.params.id,a=!0===this.state.loading?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,r.a.createElement($,{addLike:this.addLike,like:this.state.data.like,pageId:t}),r.a.createElement("h1",{className:"post-detail-title"},this.state.data.title),r.a.createElement(G.a,{source:this.state.data.context,renderers:{code:J,heading:ne},plugins:[Z.a],className:"post-content"}),r.a.createElement("span",{className:"page-views"},this.state.data.page_views," Page Views"),r.a.createElement(W,null));return r.a.createElement("div",{className:"post-container"},r.a.createElement(k.BarLoader,{css:e,sizeUnit:"px",size:80,color:"#F0F0F0",loading:this.state.loading}),a)}}]),t}(r.a.Component),oe=(a(48),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"me-box"},r.a.createElement("img",{alt:"PENGUIN",src:a(512),className:"me-box-penguin"}),r.a.createElement("h3",{className:"me-box-name"},"K-Sato"),r.a.createElement("p",{className:"me-box-profile"},"Hi! I'm into baseball, pragramming, learning languages and dogs."),r.a.createElement("a",{href:"https://github.com/K-Sato1995",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"Check me out on GitHub")))}}]),t}(r.a.Component)),ie=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-left-container"},r.a.createElement(oe,null))}}]),t}(r.a.Component),le=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tab-intro-box"},r.a.createElement("p",null,"People often find me outgoing, upbeat, self-motivated and silly. I grew up in a very small and peaceful town and moved to a huge city for college."),r.a.createElement("p",null,"In college, I majored in political economy and mainly spent my time there studying international political economy and public economics. I also started coding when I was a senior and have been studying programming since then."),r.a.createElement("p",null,"Though what I learnt in college was academically very interesting, I didn't necessarily consider myself suitable for a politician or economist. I also was not interested in sales or marketing which a lot of my friends in the same department ended up doing after college. So I ended up getting a job as a webdeveloper since I really liked coding and I was really fascinated with the idea of createing something unique and original that didn't exist before."))}}]),t}(r.a.Component),ce=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"work-box"},r.a.createElement("h5",null,r.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noopener noreferrer"},this.props.title)),r.a.createElement("p",null,this.props.description),r.a.createElement("div",{className:this.props.language}),r.a.createElement("span",{className:"work-box-languag-name"},this.props.language))}}]),t}(r.a.Component),se=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tab-work-box"},r.a.createElement(ce,{title:"MyBlog",description:"This is the backend of this blog built with Ruby on Rails.",language:"Ruby",href:"https://github.com/K-Sato1995/MyBlog"}),r.a.createElement(ce,{title:"GraphqlApi",description:"An API buil with Ruby on Rails and class based GraphQL.",language:"Ruby",href:"https://github.com/K-Sato1995/GraphqlApi"}),r.a.createElement(ce,{title:"MyBlogFront",description:"This is the frontkend of this blog built with React.js.",language:"JavaScript",href:"https://github.com/K-Sato1995/MyBlogFront"}),r.a.createElement(ce,{title:"Finance",description:"A simple personal financial management app built with RoR and React.js.",language:"JavaScript",href:"https://github.com/K-Sato1995/Finance"}),r.a.createElement(ce,{title:"Spell Generator",description:"This is a silly gem that automatically creates spells.",language:"Ruby",href:"https://github.com/K-Sato1995/spell_generator"}),r.a.createElement(ce,{title:"Pinboard",description:"This is a clone of Pinterest I created to practice Ruby on Rails.",language:"Ruby",href:"https://github.com/K-Sato1995/Pinboard"}))}}]),t}(r.a.Component),ue=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.activeTab===this.props.value?r.a.createElement("button",{onClick:this.props.changeTab,className:"tab-button-active"},this.props.name):r.a.createElement("button",{onClick:this.props.changeTab,className:"tab-button"},this.props.name);return r.a.createElement("div",null,e)}}]),t}(r.a.Component),me=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-box"})}}]),t}(r.a.Component),pe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Comming soon"),r.a.createElement(me,null))}}]),t}(r.a.Component),he=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"TabSkills"))}}]),t}(r.a.Component),de=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"TabInterests"))}}]),t}(r.a.Component),be=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={activeTab:1},e.activeWork=e.activeWork.bind(Object(p.a)(Object(p.a)(e))),e.activeIntro=e.activeIntro.bind(Object(p.a)(Object(p.a)(e))),e.activeContact=e.activeContact.bind(Object(p.a)(Object(p.a)(e))),e.activeSkills=e.activeSkills.bind(Object(p.a)(Object(p.a)(e))),e.activeInterests=e.activeInterests.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"activeWork",value:function(){this.setState({activeTab:1})}},{key:"activeIntro",value:function(){this.setState({activeTab:2})}},{key:"activeContact",value:function(){this.setState({activeTab:3})}},{key:"activeSkills",value:function(){this.setState({activeTab:4})}},{key:"activeInterests",value:function(){this.setState({activeTab:5})}},{key:"render",value:function(){var e;return 1===this.state.activeTab?e=r.a.createElement(se,null):2===this.state.activeTab?e=r.a.createElement(le,null):3===this.state.activeTab?e=r.a.createElement(pe,null):4===this.state.activeTab?e=r.a.createElement(he,null):5===this.state.activeTab&&(e=r.a.createElement(de,null)),r.a.createElement("div",null,r.a.createElement("ul",{className:"tab-button-list"},r.a.createElement("li",null,r.a.createElement(ue,{changeTab:this.activeWork,name:"Projects",activeTab:this.state.activeTab,value:1})),r.a.createElement("li",null,r.a.createElement(ue,{changeTab:this.activeIntro,name:"Self-Intro",activeTab:this.state.activeTab,value:2})),r.a.createElement("li",null,r.a.createElement(ue,{changeTab:this.activeContact,name:"Contact Me",activeTab:this.state.activeTab,value:3})),r.a.createElement("li",null,r.a.createElement(ue,{changeTab:this.activeSkills,name:"Skills",activeTab:this.state.activeTab,value:4})),r.a.createElement("li",null,r.a.createElement(ue,{changeTab:this.activeInterests,name:"Interests",activeTab:this.state.activeTab,value:5}))),e)}}]),t}(r.a.Component),ge=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-right-container"},r.a.createElement(be,null))}}]),t}(r.a.Component),fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"about-main-box clearfix"},r.a.createElement(ie,null),r.a.createElement(ge,null))}}]),t}(r.a.Component),ve=a(532),Ee=a(533),ye=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve.a,null,r.a.createElement(Ee.a,{exact:!0,path:"/",component:A}),r.a.createElement(Ee.a,{path:"/Post/:id",component:re}),r.a.createElement(Ee.a,{path:"/About",component:fe}),r.a.createElement(Ee.a,{component:D})))}}]),t}(r.a.Component),Oe=(a(514),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-box1"},r.a.createElement("h4",null,r.a.createElement(b.a,{id:"footer.blog.title",defaultMessage:"Default"})),r.a.createElement("p",null,r.a.createElement(b.a,{id:"footer.blog.description",defaultMessage:"Default"}))),r.a.createElement("div",{className:"footer-box2"},r.a.createElement("h4",null,r.a.createElement(b.a,{id:"footer.author.name",defaultMessage:"Default"})),r.a.createElement("p",null,r.a.createElement(b.a,{id:"footer.author.description",defaultMessage:"Default"}))),r.a.createElement("div",{className:"footer-box3"},r.a.createElement("h4",null,r.a.createElement(b.a,{id:"footer.links.title",defaultMessage:"Default"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://dev.to/ksato1995"},r.a.createElement(b.a,{id:"footer.links.link1",defaultMessage:"Default"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/K-Sato1995"},r.a.createElement(b.a,{id:"footer.links.link2",defaultMessage:"Default"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/K-Sato1995/MyBlog"},r.a.createElement(b.a,{id:"footer.links.link3",defaultMessage:"Default"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/K-Sato1995/MyBlogFront"},r.a.createElement(b.a,{id:"footer.links.link4",defaultMessage:"Default"})))))),r.a.createElement("div",{className:"footer-container2"},r.a.createElement("h5",null,"This blog is powered by"," ",r.a.createElement("a",{href:"https://pages.github.com/"},"GitHubPages"),","," ",r.a.createElement("a",{href:"https://www.heroku.com/"},"Heroku")," and"," ",r.a.createElement("a",{href:"https://www.flaticon.com/home"},"FLATICON"))))}}]),t}(r.a.Component)),je=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},ke=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.darkTheme?r.a.createElement("button",{className:"light-theme-button",onClick:function(){return e.props.handleToggleTheme()}},"Light Theme",r.a.createElement(je,{symbol:"\u2600\ufe0f",label:"sun"})):r.a.createElement("button",{className:"dark-theme-button",onClick:function(){return e.props.handleToggleTheme()}},"Dark Theme",r.a.createElement(je,{symbol:"\ud83c\udf19",label:"moon"}))}}]),t}(r.a.Component),Ne=(a(516),a(129)),we=a.n(Ne),Te=a(130),Ce=a.n(Te),xe=a(531),Se={"nav.title":"K-BLOG","author.title":"About Me","author.name":"K-Sato","author.body":"I'm just a silly boy aspiring to be a competent programmer.","search.title":"Search Box","tagList.title":"Tag List","featuredPosts.title":"Featured Posts","postAuthor.name":"K-Sato","postAuthor.description":"I am a junior web-developer based somewhere on earth. Write Ruby as my primary lannguage and also use Javascript every now and then. RoR and React are my go-to Frameworks. Sometimes I play with Go language.","loadingBox.title":"Hi! It might take a while to boost up the backend-server.","loadingBox.subtitle":"Meanwhile, let me introduce myself:)","loadingBox.paragraphOne":"People often find me outgoing, upbeat, self-motivated and silly. I grew up in a very small and peaceful town and moved to a huge city for college.","loadingBox.paragraphTwo":"In college, I majored in political economy and mainly spent my time there studying international political economy and public economics. I also started coding when I was a senior and have been studying programming since then.","loadingBox.paragraphThree":"Though what I learnt in college was academically very interesting, I didn't necessarily consider myself suitable for a politician or economist. I also was not interested in sales or marketing which a lot of my friends in the same department ended up doing after college. So I ended up getting a job as a webdeveloper since I really liked coding and I was really fascinated with the idea of createing something unique and original that didn't exist before.","footer.blog.title":"K-Sato's Blog","footer.blog.description":"This is my personal blog where I write mostly about programming and my daily life. Some are kinda usefull and some are garbage. Hope you will find something interesting here.","footer.author.name":"K-Sato","footer.author.description":"I'm into baseball, language-learning, programming and cute dogs lol. I speak English and Japanese and mainly write Ruby and Javascript. I also paly with Go from time to time.","footer.links.title":"Links","footer.links.link1":"My Profile on DEV.to (Follow me there!!!)","footer.links.link2":"My GitHub Account (Check out my work!!)","footer.links.link3":"Code of this Blog (backend built with RoR)","footer.links.link4":"Code of this Blog (frontend built with React)"},Ie={"nav.title":"\u30b5\u30c8\u30a6\u306e\u30d6\u30ed\u30b0","author.title":"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb","author.name":"\u3055\u3068\u3046","author.body":"\u3088\u308a\u826f\u3044\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u306b\u306a\u308a\u308b\u305f\u3081\u306b\u9811\u5f35\u308b\u3001\u3057\u304c\u306a\u3044\u5c11\u5e74\u3067\u3059\u3002","search.title":"\u691c\u7d22\u30dc\u30c3\u30af\u30b9","tagList.title":"\u30bf\u30b0\u96c6","featuredPosts.title":"\u6700\u65b0\u53d6\u308a\u4e0a\u3052\u8a18\u4e8b","postAuthor.name":"\u3055\u3068\u3046","postAuthor.description":"\u5730\u7403\u306e\u3069\u3063\u304b\u3067\u6d3b\u52d5\u3059\u308bWeb\u7cfb\u306e\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u3067\u3059\u3002\u4e3b\u306bRuby\u3068Javascript\u3092\u4f7f\u7528\u3057\u3066\u958b\u767a\u3092\u884c\u3044\u307e\u3059\u3002\u6642\u3005Go\u8a00\u8a9e\u3092\u4f7f\u3063\u3066\u904a\u3093\u3067\u307e\u3059\u3002","loadingBox.title":"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u3092\u7acb\u3061\u4e0a\u3052\u308b\u306e\u306b\u6642\u9593\u304c\u639b\u304b\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002","loadingBox.subtitle":"\u30ed\u30fc\u30c9\u3057\u3066\u3044\u308b\u9593\u306b\u81ea\u5df1\u7d39\u4ecb\u3055\u305b\u3066\u304f\u3060\u3055\u3044:)","loadingBox.paragraphOne":"\u4eba\u304b\u3089\u306f\u3088\u304f\u660e\u308b\u304f\u3066\u3001\u3061\u3087\u3063\u3068\u5909\u308f\u3063\u3066\u308b\u3068\u3044\u3046\u5370\u8c61\u3092\u6301\u305f\u308c\u307e\u3059\u3002\u5c0f\u3055\u306a\u753a\u3067\u751f\u307e\u308c\u80b2\u3061\u3001\u5927\u5b66\u306e\u305f\u3081\u306b\u5927\u304d\u306a\u90fd\u5e02\u306b\u5f15\u3063\u8d8a\u3057\u307e\u3057\u305f\u3002","loadingBox.paragraphTwo":"\u5927\u5b66\u3067\u306f\u653f\u6cbb\u7d4c\u6e08\u5b66\u3092\u5c02\u653b\u3057\u307e\u3057\u305f\u3002\u307e\u305f\u3001\u5927\u5b66\u751f\u306e\u6642\u306b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u5b66\u7fd2\u3092\u81ea\u4e3b\u7684\u306b\u958b\u59cb\u3057\u3066\u3001\u305d\u306e\u9803\u304b\u3089\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u52c9\u5f37\u3057\u3066\u3044\u307e\u3059\u3002","loadingBox.paragraphThree":"\u5927\u5b66\u3067\u5b66\u3093\u3060\u4e8b\u81ea\u4f53\u306f\u305d\u308c\u306a\u308a\u306b\u8208\u5473\u6df1\u304b\u3063\u305f\u306e\u3067\u3059\u304c\u3001\u81ea\u8eab\u306e\u5c02\u653b\u3068\u95a2\u4fc2\u306e\u3042\u308b\u8077\u696d\u3092\u5c06\u6765\u7684\u306b\u3084\u308b\u30a4\u30e1\u30fc\u30b8\u304c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u305d\u3053\u3067\u3001\u597d\u304d\u3060\u3063\u305f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3067\u4ed5\u4e8b\u3092\u3057\u3066\u3044\u3053\u3046\u3068\u601d\u3044\u3001\u3061\u3087\u3063\u3068\u524d\u304b\u3089\u30d7\u30ed\u30b0\u30e9\u30de\u3092\u3084\u3063\u3066\u307e\u3059\u3002","footer.blog.title":"\u3055\u3068\u3046\u306e\u30d6\u30ed\u30b0","footer.blog.description":"\u3053\u308c\u306f\u79c1\u304c\u4e3b\u306b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3084\u79c1\u751f\u6d3b\u306e\u3053\u3068\u306b\u3064\u3044\u3066\u66f8\u3044\u305f\u8a18\u4e8b\u3092\u307e\u3068\u3081\u308b\u30d6\u30ed\u30b0\u3067\u3059\u3002\u305d\u308c\u306a\u308a\u306b\u4f7f\u3048\u308b\u8a18\u4e8b\u3082\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u5927\u4f53\u305d\u3093\u306a\u306b\u4f7f\u3048\u306a\u3044\u3067\u3059\u3002\u4f55\u304b\u3057\u3089\u8ab0\u304b\u306e\u5f79\u306b\u7acb\u3063\u305f\u3089\u5e78\u3044\u3067\u3059\u3002","footer.author.name":"\u3055\u3068\u3046","footer.author.description":"\u79c1\u306f\u3055\u3068\u3046\u3068\u3044\u3044\u307e\u3059\u3002\u91ce\u7403\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3001\u8a00\u8a9e\u5b66\u7fd2\u3001\u304b\u308f\u3044\u3044\u72ac\u306b\u8208\u5473\u304c\u3042\u308a\u307e\u3059\u3002\u82f1\u8a9e\u3068\u65e5\u672c\u8a9e\u304c\u8a71\u305b\u307e\u3059\u3002\u666e\u6bb5\u306fRuby\u3068Javascript\u3067\u958b\u767a\u3092\u884c\u3044\u3001\u305f\u307e\u306bGo\u8a00\u8a9e\u3067\u8272\u3005\u904a\u3093\u3067\u3044\u307e\u3059\u3002","footer.links.title":"\u30ea\u30f3\u30af","footer.links.link1":"DEV.to\u3067\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb(\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u304f\u3060\u3055\u3044)","footer.links.link2":"\u79c1\u306eGitHub\u3067\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb(\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044)","footer.links.link3":"\u3053\u306e\u30d6\u30ed\u30b0\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9(Rails)\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9","footer.links.link4":"\u30d6\u30ed\u30b0\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9(React)\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"};Object(b.c)([].concat(Object(h.a)(Ce.a),Object(h.a)(we.a)));var Me=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={lang:"en",darkTheme:!1},e.setLocale=e.setLocale.bind(Object(p.a)(Object(p.a)(e))),e.handleToggleTheme=e.handleToggleTheme.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setLocale",value:function(e){this.setState({lang:e})}},{key:"handleToggleTheme",value:function(){this.setState({darkTheme:!this.state.darkTheme})}},{key:"render",value:function(){var e=this.state.darkTheme?"DarkTheme":"LightTheme",t="en"===this.state.lang?Se:Ie;return r.a.createElement("div",{className:"App",id:e},r.a.createElement(b.b,{locale:this.state.lang,messages:t},r.a.createElement(xe.a,{basename:"/MyBlogFront"},r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{setLocale:this.setLocale,lang:this.state.lang}),r.a.createElement(ye,null),r.a.createElement(ke,{handleToggleTheme:this.handleToggleTheme,darkTheme:this.state.darkTheme}),r.a.createElement(Oe,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){},83:function(e,t,a){},97:function(e,t,a){}},[[131,2,1]]]);
//# sourceMappingURL=main.62da3025.chunk.js.map