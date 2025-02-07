"use strict";(self.webpackChunkgatsby_sharp=self.webpackChunkgatsby_sharp||[]).push([[174],{5346:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l=n(8453),a=n(6540);function c(e){const t=Object.assign({h1:"h1",p:"p",br:"br",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4",a:"a",ul:"ul",li:"li"},(0,l.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"用户指南"),"\n",a.createElement(t.p,null,"这是上海科技大学interstudio社团的网站雏形，暂时仅有一个简单的框架，尚未填充具体的社团事宜或美术设计。",a.createElement(t.br),"\n","本网站基于gatsby，tyepscript，sass和mdx构建，用户可以使用mdx轻松地编辑想要的文本。"),"\n",a.createElement(t.h1,null,"用mdx创建页面"),"\n",a.createElement(t.h2,null,"如何添加新的页面？"),"\n",a.createElement(t.p,null,"在",a.createElement(t.code,null,"src/pages"),"目录下创建一个新的mdx文件，保证文件名以小写字母开头，不要包含特殊字符。"),"\n",a.createElement(t.p,null,"文件开头如下："),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-mdx"},"---\ntitle: xxx\nslug: xxx（生成的网页对应的路径名称，如本页slug为guide，对应路径为guide）\n---\n")),"\n",a.createElement(t.p,null,"##简单学习mdx语法"),"\n",a.createElement(t.h3,null,"1.1 标题"),"\n",a.createElement(t.p,null,"标题通过在文本前加不同数量的 ",a.createElement(t.code,null,"#")," 来表示，",a.createElement(t.code,null,"#")," 越多标题级别越低，字体越小。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"# 一级标题\n## 二级标题\n### 三级标题\n")),"\n",a.createElement(t.h3,null,"1.2 段落和换行"),"\n",a.createElement(t.p,null,"在 Markdown 里，直接输入文本就是段落，若要换行，在上一行结尾加两个或以上空格后回车。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"这是一个段落。  \n这是换行后的内容。\n")),"\n",a.createElement(t.h3,null,"1.3 列表"),"\n",a.createElement(t.h4,null,"无序列表"),"\n",a.createElement(t.p,null,"用 ",a.createElement(t.code,null,"-"),"、",a.createElement(t.code,null,"+")," 或 ",a.createElement(t.code,null,"*")," 开头。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"- 列表项 1\n- 列表项 2\n- 列表项 3\n")),"\n",a.createElement(t.h4,null,"有序列表"),"\n",a.createElement(t.p,null,"用数字加 ",a.createElement(t.code,null,".")," 开头。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"1. 第一个列表项\n2. 第二个列表项\n3. 第三个列表项\n")),"\n",a.createElement(t.h3,null,"1.4 强调"),"\n",a.createElement(t.h4,null,"加粗"),"\n",a.createElement(t.p,null,"用两个 ",a.createElement(t.code,null,"**")," 或 ",a.createElement(t.code,null,"__")," 把文本包起来。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"**这是加粗的文本**\n")),"\n",a.createElement(t.h4,null,"斜体"),"\n",a.createElement(t.p,null,"用一个 ",a.createElement(t.code,null,"*")," 或 ",a.createElement(t.code,null,"_")," 把文本包起来。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"*这是斜体的文本*\n")),"\n",a.createElement(t.h3,null,"1.5 链接和图片"),"\n",a.createElement(t.h4,null,"链接"),"\n",a.createElement(t.p,null,"语法是 ",a.createElement(t.code,null,"[显示文本](链接地址)"),"。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"[访问InterStudio网站项目仓库](https://gitlab.com/interstudio1/interstudio_website)\n")),"\n",a.createElement(t.h4,null,"图片"),"\n",a.createElement(t.p,null,"语法是 ",a.createElement(t.code,null,"![替代文本](图片地址)"),"。"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-md"},"![示例图片](https://example.com/image.jpg)\n")),"\n",a.createElement(t.h3,null,"其余内容建议参考",a.createElement(t.a,{href:"https://mdxjs.com/docs/getting-started"},"MDX官方文档"),"。"),"\n",a.createElement(t.p,null,"目前项目里已完成about页面（'/about'）以及本页guide页面（'/guide'）的创建，可参考其语法。",a.createElement(t.br),"\n","依靠'gatsby-plugin-mdx-heading-anchor'插件，可以自动为mdx页面中的标题添加锚点和导航，方便跳转。"),"\n",a.createElement(t.h1,null,"用tyepscript创建组件或页面"),"\n",a.createElement(t.p,null,"具体编辑过程较为复杂，建议参考",a.createElement(t.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-zero/"},"gatsby官方文档"),"。",a.createElement(t.br),"\n","目前项目里已完成404（'/404'），index（'/'），contact（'/contact'）页面及layout组件的创建，可参考其语法。\n项目内about页面（'/about'），contact页面（'/contact'）暂无有效内容，仅供参考。"),"\n",a.createElement(t.h1,null,"具体可编辑内容"),"\n",a.createElement(t.p,null,"目前项目里仅有layout组件较为完整，设计较为确定，以layout组件为例，有很多需要更改的部分。"),"\n",a.createElement(t.h2,null,"1.联系方式"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"我插入了三张社交网站的图片（小红书、B站、微博）并附有跳转链接，理论上应该跳转至对应网站社团的官方主页，但目前建设未完成，故仅链接到网站首页。"),"\n",a.createElement(t.li,null,"社团具体地址、联系电话、邮箱均都没有填入。"),"\n"),"\n",a.createElement(t.h2,null,"2.图片"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"我反复使用了同一张暂时的社团logo的图片，白底我也没有管，需要在之后美术风格确定、美术素材统一后修改。"),"\n",a.createElement(t.li,null,"三张社交网站的图标也并不好看，之后也许可以再设计。"),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},o=n(2472),u=n(9102),m=n(8164),d=n(8281),i=n(861);const s={AboutImageLayout:m.A,h1:e=>{let{children:t,...n}=e;const l=("string"==typeof t?t:(null==t?void 0:t.toString())||"").replace(/[^\w\u4e00-\u9fa5]/g,"").trim();return a.createElement("h1",Object.assign({id:l,className:d.h1},n),t)}},E=e=>{var t;let{children:n,data:c}=e;const r=(null===(t=c.mdx.tableOfContents)||void 0===t?void 0:t.items)||[];return a.useEffect((()=>{console.log("Checking heading elements:"),document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((e=>{console.log("Found heading:",{id:e.id,text:e.textContent,tag:e.tagName})}))}),[]),a.createElement(o.A,{title:"MDX Page"},a.createElement(u.A,{items:r}),a.createElement("div",{className:i.P},a.createElement("div",{className:i.Q},a.createElement(l.xA,{components:s},n))))};function p(e){return a.createElement(E,e,a.createElement(r,e))}},8164:function(e,t,n){var l=n(6540),a=n(2532),c=n(8281);t.A=e=>{let{children:t}=e;return l.createElement("div",{className:c.uW},l.createElement("div",{className:c.h4},l.createElement(a.S,{src:"../images/group_photo.png",alt:"团队合照",placeholder:"blurred",aspectRatio:4/3,width:400,className:c.image,__imageData:n(1206)})),l.createElement("div",{className:c.Qs},t))}},9102:function(e,t,n){n.d(t,{A:function(){return a}});var l=n(6540);var a=e=>{let{items:t}=e;return l.createElement("nav",{className:"mdx-navigation-module--navigation--6aafe"},l.createElement("ul",{className:"mdx-navigation-module--navList--a1398"},t.map(((e,t)=>l.createElement("li",{key:t,className:"mdx-navigation-module--navItem--d38e4"},l.createElement("a",{href:e.url,className:"mdx-navigation-module--navLink--6c5af",onClick:t=>((e,t)=>{e.preventDefault();const n=t.replace("#",""),l=document.getElementById(n);if(l){const e=l.offsetTop-100;window.scrollTo({top:e,behavior:"auto"})}})(t,e.url)},e.title))))))}},8281:function(e,t,n){n.d(t,{Qs:function(){return l},h1:function(){return a},h4:function(){return c},uW:function(){return r}});var l="about-section-module--content--3b20f",a="about-section-module--h1--8e705",c="about-section-module--imageWrapper--6baab",r="about-section-module--section--a094c"},861:function(e,t,n){n.d(t,{P:function(){return a},Q:function(){return l}});var l="mdx-content-module--content--948a6",a="mdx-content-module--mdxContainer--df172"},8453:function(e,t,n){n.d(t,{RP:function(){return c},xA:function(){return o}});var l=n(6540);const a=l.createContext({});function c(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:c(e),l.createElement(a.Provider,{value:o},t)}},1206:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABAUlEQVR42tWSTU+DQBRF+/9/houaunGh0Z0mxq5wYRtKqwZQqBSEgjSlUEbeaYofpAuNJnThJHfeJHNz5uXd6dDy6vwfoIjU+jx/Vdm9+9Hbaoc7QBGSJGGVF+T5iuUyq1/c1nJdELwEvKZpbS3XJUqVZFmGKkviOCYv1iilGmD1pjjqHnB5ccVgoNE7PiEMQzTthltN4+z8lOHEROUZU8/Htkz0kY7vuXQPe8z8AMd1GqBUFfcTHWN8h+c56MYDyTxiqI+ZPlqMDAP7yd0aSRcLLNvCtEwCf0b/uk8URcTz+PczlGZEf0/5XdUHpN6/TVn2mvI+P7a0qfY7FJHnNrUBkyCX8nyKnRUAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/bebea95f1fd2b355e3cddc97387ba507/b1289/group_photo.png","srcSet":"/static/bebea95f1fd2b355e3cddc97387ba507/aecac/group_photo.png 52w,\\n/static/bebea95f1fd2b355e3cddc97387ba507/6ccf1/group_photo.png 103w,\\n/static/bebea95f1fd2b355e3cddc97387ba507/b1289/group_photo.png 206w","sizes":"(min-width: 206px) 206px, 100vw"},"sources":[{"srcSet":"/static/bebea95f1fd2b355e3cddc97387ba507/5bc57/group_photo.webp 52w,\\n/static/bebea95f1fd2b355e3cddc97387ba507/a97b6/group_photo.webp 103w,\\n/static/bebea95f1fd2b355e3cddc97387ba507/2d11e/group_photo.webp 206w","type":"image/webp","sizes":"(min-width: 206px) 206px, 100vw"}]},"width":400,"height":300.97087378640776}')}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-slug-tsx-content-file-path-blog-guide-mdx-8fe8984ba6b1f6d70266.js.map