"use strict";(self.webpackChunktham_website=self.webpackChunktham_website||[]).push([[114],{7989:function(e,t,a){var l=a(4925),n=a(7294),r=["title","titleId"];var c=n.forwardRef((function(e,t){var a=e.title,c=e.titleId,s=(0,l.Z)(e,r);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":c},s),a?n.createElement("title",{id:c},a):null,n.createElement("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))}));t.Z=c},8274:function(e,t,a){var l=a(9931),n=a.n(l),r=a(7294);t.Z=function(e){var t=e.heading,a=e.title,l=e.className,c=e.underlineClassName,s=e.textClassName;return r.createElement("div",{className:n()("flex flex-col items-center space-y-2",l)},"h1"===t?r.createElement("h1",{className:n()("font-bold",s)},a):r.createElement("h2",{className:n()("font-bold",s)},a),r.createElement("div",{className:n()("h-0.5 rounded-md bg-secondary-main w-16",c)}))}},9639:function(e,t,a){var l=a(7294),n=a(7782),r=a(3723),c=a(9931),s=a.n(c);t.Z=function(e){var t=e.coverImage,a=e.title,c=e.description,m=e.createdAt,i=e.href,o=e.className;return l.createElement(n.Link,{to:i||"",className:s()("group",o)},l.createElement("article",{className:"space-y-2.5"},l.createElement("div",{className:"!aspect-w-16 !aspect-h-9"},t&&l.createElement(r.G,{alt:a||"",image:t,className:"object-cover w-full h-full rounded-lg"})),l.createElement("span",{className:"block text-sm text-neutral-900"},m),l.createElement("h3",{className:"text-lg font-medium text-neutral-900 line-clamp-2 group-hover:text-primary-main dealy-100"},a),l.createElement("span",{className:"line-clamp-2 text-sm text-neutral-600 !mt-1"},c)))}},3597:function(e,t,a){a.d(t,{Nq:function(){return o},Oo:function(){return s},eu:function(){return m.Z}});var l=a(7294),n=a(9931),r=a.n(n),c=a(3723),s=function(e){var t=e.title,a=e.desc,n=e.icon,s=e.className;return l.createElement("div",{className:r()("flex flex-col justify-center",s)},l.createElement("div",{className:"w-max h-max p-3 rounded-lg bg-primary-border bg-opacity-20"},n&&l.createElement(c.G,{alt:t||"",image:n,className:"w-10 h-10"})),l.createElement("div",{className:"mt-6"},l.createElement("span",{className:"text-2xl text-primary-main font-semibold"},t),l.createElement("p",{className:"text-lg text-nuetral-900 line-clamp-4 mt-2"},a)))},m=a(9639),i=a(7989),o=function(e){var t=e.branch,a=e.location,n=e.phone,c=e.line,s=e.email,m=e.className;return l.createElement("div",{className:r()("flex flex-col justify-center border border-neutral-300 rounded-lg p-6 space-y-3",m)},l.createElement("div",{className:"flex flex-row items-center space-x-1"},l.createElement(i.Z,{className:"w-6 h-6 text-primary-main"}),l.createElement("h3",{className:"text-neutral-900 text-xl font-bold"},t)),l.createElement("p",{className:"text-sm text-neutral-900"},a),l.createElement("div",{className:"flex flex-row items-center"},l.createElement("a",{href:"tel:"+(null==n?void 0:n.tel),className:"w-1/2"},"Tel:"," ",l.createElement("span",{className:"text-primary-main hover:underline unlderline-offset-4"},null==n?void 0:n.display)),l.createElement("a",{href:"tel:"+(null==c?void 0:c.href),className:"w-1/2"},"Line@:"," ",l.createElement("span",{className:"text-primary-main hover:underline unlderline-offset-4"},null==c?void 0:c.display))),l.createElement("a",{href:"mailto:"+s,className:"flex flex-row items-center w-1/2"},"Email:",l.createElement("span",{className:"ml-1 text-primary-main hover:underline unlderline-offset-4"},s)))}},8596:function(e,t,a){a.r(t);var l=a(7294),n=a(5375),r=a(8274),c=a(7782),s=a(3597);t.default=function(e){var t=e.data,a=(0,c.useTranslation)().t,m=t.allMarkdownRemark.edges;return l.createElement(n.Z,null,l.createElement("section",{className:"px-4 py-20 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-16 lg:space-y-10"},l.createElement(r.Z,{title:a("pages.news.section-1.header-1"),textClassName:"text-4xl text-neutral-900",className:"!items-start w-max md:pl-2",underlineClassName:"!border-primary-main",heading:"h1"}),l.createElement("div",{className:"flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row"},m.map((function(e,t){var a,n=e.node.frontmatter||{},r=n.title,c=n.description,m=n.date,i=n.cover,o=n.slug;return l.createElement(s.eu,{title:r,className:"md:w-1/2 lg:w-1/3 md:p-4",description:c,coverImage:null==i||null===(a=i.childImageSharp)||void 0===a?void 0:a.gatsbyImageData,createdAt:m,href:o,key:t})})))))}}}]);
//# sourceMappingURL=component---src-pages-news-tsx-97150803967cf2699088.js.map