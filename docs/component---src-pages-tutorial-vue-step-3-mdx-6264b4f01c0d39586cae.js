(window.webpackJsonp=window.webpackJsonp||[]).push([[2092],{HWT1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return g}));n("3bBZ"),n("q1tI");var a=n("7ljp"),o=n("013z"),l=n("V8m9");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},c=s("PageDescription"),b=s("AnchorLinks"),u=s("AnchorLink"),h=s("InlineNotification"),d={_frontmatter:p},m=o.a;function g(e){let{components:t}=e,n=i(e,["components"]);return Object(a.b)(m,r({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"PageDescription"},Object(a.b)("p",null,"This step takes our static components and populates them with data from the\nGitHub GraphQL API – loading states and all. We’ll be displaying Carbon\nrepository information in a data table.")),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(u,{mdxType:"AnchorLink"},"Fork, clone and branch"),Object(a.b)(u,{mdxType:"AnchorLink"},"Install dependencies"),Object(a.b)(u,{mdxType:"AnchorLink"},"Create access token"),Object(a.b)(u,{mdxType:"AnchorLink"},"Connect to Apollo"),Object(a.b)(u,{mdxType:"AnchorLink"},"Fetch data"),Object(a.b)(u,{mdxType:"AnchorLink"},"Populate data table"),Object(a.b)(u,{mdxType:"AnchorLink"},"Add loading"),Object(a.b)(u,{mdxType:"AnchorLink"},"Add pagination"),Object(a.b)(u,{mdxType:"AnchorLink"},"Submit pull request")),Object(a.b)("h3",null,"Preview"),Object(a.b)("p",null,"The ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.github.com/v4/"}),"GitHub GraphQL API")," is very well\ndocumented, and even though the focus of this tutorial isn’t learning and using\nGraphQL, it’s a great opportunity to fetch Carbon-related data for this Carbon\ntutorial."),Object(a.b)("p",null,"To do so, we’ll be using Apollo Client, the front-end component of the\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.apollographql.com/docs/intro/platform"}),"Apollo Platform"),". Apollo\nprovides several open source tools for using GraphQL throughout your\napplication’s stack. Apollo Client is a sophisticated GraphQL client that\nmanages data and state in an application."),Object(a.b)("p",null,"A ",Object(a.b)("a",r({parentName:"p"},{href:"https://vue-step-4--carbon-tutorial-vue.netlify.com"}),"preview")," of what you\nwill build (see repositories page):"),Object(a.b)(l.a,{height:"400",title:"Carbon Tutorial Step 3",src:"https://vue-step-4--carbon-tutorial-vue.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),Object(a.b)("h2",null,"Fork, clone and branch"),Object(a.b)("p",null,"This tutorial has an accompanying GitHub repository called\n",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial-vue"}),"carbon-tutorial-vue"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",Object(a.b)("a",r({parentName:"p"},{href:"/tutorial/vue/step-2#fork-clone--branch"}),"step 2 instructions"),"."),Object(a.b)("h3",null,"Branch"),Object(a.b)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git fetch upstream\ngit checkout -b vue-step-3 upstream/vue-step-3\n")),Object(a.b)("h3",null,"Build and start app"),Object(a.b)("p",null,"Install the app’s dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(a.b)("p",null,"Then, start the app:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn serve\n")),Object(a.b)("p",null,"You should see something similar to where the\n",Object(a.b)("a",r({parentName:"p"},{href:"/tutorial/vue/step-2"}),"previous step")," left off. Stop your app with ",Object(a.b)("inlineCode",{parentName:"p"},"CTRL-C")," and\nlet’s get everything installed."),Object(a.b)("h2",null,"Install dependencies"),Object(a.b)("p",null,"We’ll shortcut this using the Vue CLI, if you’d like more information head over\nto\n",Object(a.b)("a",r({parentName:"p"},{href:"https://vue-apollo.netlify.com/guide/installation.html#vue-cli-plugin"}),"Vue Apollo Installation"),"\nfor details."),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," If you have not yet installed the Vue CLI, you will need to\n",Object(a.b)("a",r({parentName:"p"},{href:"https://cli.vuejs.org/"}),"install the Vue CLI")," before running the Vue Apollo\nInstallation.")),Object(a.b)("p",null,"Install the following"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"apollo-boost")," - package containing everything you need to set up Apollo\nClient"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"graphql")," - parses your GraphQL queries"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vue-apollo")," - Apollo integration for Vue")),Object(a.b)("p",null,"Using the command:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"vue add apollo\n")),Object(a.b)("p",null,"At the following prompts answer ‘No’ to each of the questions."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add example code? No"),Object(a.b)("li",{parentName:"ul"},"Add a GraphQL API Server? No"),Object(a.b)("li",{parentName:"ul"},"Configure Apollo Engine? No")),Object(a.b)("h2",null,"Create access token"),Object(a.b)("p",null,"You’ll need a personal access token from your GitHub account in order to make\nrequests to the GitHub API. Check out\n",Object(a.b)("a",r({parentName:"p"},{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"}),"this guide"),"\nto see how to get one."),Object(a.b)("p",null,"When you get to the scope/permissions step, you can leave them all unchecked. We\ndon’t need any special permissions, we just need access to the public API."),Object(a.b)("p",null,"Once you have your token, we need to put it in a place where ",Object(a.b)("inlineCode",{parentName:"p"},"create-vue-app"),"\ncan use it. When your application is being built and developed, create-vue-app\nwill parse environmental variables in any file that starts with ",Object(a.b)("inlineCode",{parentName:"p"},".env")," and make\nthem available under ",Object(a.b)("inlineCode",{parentName:"p"},"process.env.MY_VARIABLE"),"."),Object(a.b)("p",null,"One caveat is that we need to start our variables with ",Object(a.b)("inlineCode",{parentName:"p"},"VUE_APP_"),". You can read\nmore about environmental variables in\n",Object(a.b)("a",r({parentName:"p"},{href:"https://cli.vuejs.org/guide/mode-and-env.html#environment-variables"}),"create-vue-app’s guide"),"."),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," If you already have a valid GitHub Personal Access Token, you can use\nthat token here.")),Object(a.b)("p",null,"Since we don’t want to commit this file to Git, we can put it in ",Object(a.b)("inlineCode",{parentName:"p"},".env.local"),"\nwhich is in our ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore")," list. Your file should just have a single line like\nthis one, where the ",Object(a.b)("inlineCode",{parentName:"p"},"x"),"s are replaced with your unique token."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash",metastring:"path=.env.local",path:".env.local"}),"VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxxxx\n")),Object(a.b)("p",null,"Go ahead and start your app with ",Object(a.b)("inlineCode",{parentName:"p"},"yarn serve"),", or, if your app is running,\nyou’ll need to restart it to get access to this token."),Object(a.b)("h2",null,"Connect to Apollo"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"vue-apollo")," plugin has made a number of changes to our project."),Object(a.b)("p",null,"If you open ",Object(a.b)("inlineCode",{parentName:"p"},"src/main.js")," you will see that the CLI has updated this file with\nthe following:."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/main.js",path:"src/main.js"}),"import { createProvider } from 'vue-apollo';\n\nnew Vue({\n  router,\n  apolloProvider: createProvider(),\n  render: (h) => h(App),\n}).$mount('#app');\n")),Object(a.b)("p",null,"This is loading from a file the CLI created for you ",Object(a.b)("inlineCode",{parentName:"p"},"src/vue-apollo.js")," which we\nneed to update to target the github api."),Object(a.b)("p",null,"Update the following values:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/vue-apollo.js",path:"src/vue-apollo.js"}),"// Use our access token\nconst AUTH_TOKEN = process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN;\n\n// Target github api\nconst httpEndpoint =\n  process.env.VUE_APP_GRAPHQL_HTTP || 'https://api.github.com/graphql';\n")),Object(a.b)("p",null,"Update only the ",Object(a.b)("inlineCode",{parentName:"p"},"wsEndpoint")," and ",Object(a.b)("inlineCode",{parentName:"p"},"getAuth")," properties of the ",Object(a.b)("inlineCode",{parentName:"p"},"defaultOptions"),"\nobject:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const defaultOptions = {\n  // set wsEndpoint to null\n  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS,\n\n  // Use the form expected by github for authorisation\n  getAuth: (tokenName) => `Bearer ${tokenName}`,\n};\n")),Object(a.b)("h2",null,"Fetch data"),Object(a.b)("h3",null,"Imports"),Object(a.b)("p",null,"Add the following imports to the top of the script section of ",Object(a.b)("inlineCode",{parentName:"p"},"RepoPage.vue"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"import gql from 'graphql-tag';\n")),Object(a.b)("h3",null,"Query"),Object(a.b)("p",null,"Next we’ll assemble our GraphQL query to fetch only the data we need from the\nGraphQL API. We’ll do this using the ",Object(a.b)("inlineCode",{parentName:"p"},"gql")," helper we just imported. The ",Object(a.b)("inlineCode",{parentName:"p"},"gql"),"\nhelper lets you write GraphQL queries using interpolated strings (backticks) in\nJavaScript. In addition, we’ll be using the ",Object(a.b)("inlineCode",{parentName:"p"},"Query")," component from ",Object(a.b)("inlineCode",{parentName:"p"},"vue-apollo"),"\nwhich gives us some great information about our query’s loading state in\naddition to the data."),Object(a.b)("p",null,"You can use GitHub’s ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.github.com/v4/explorer/"}),"explorer")," tool\nto write and test your own queries. Try copying the query below and experiment\nwith changing the properties. You can also click the “Docs” button in the top\nright of the explorer to view all of the available data and query parameters."),Object(a.b)("p",null,"If you’d like some more information regarding writing queries and using the\nQuery component, we recommend\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.apollographql.com/docs/tutorial/queries"}),"Apollo’s documentation")," on\nthis topic."),Object(a.b)("p",null,"Add this after your imports:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-graphql",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"const REPO_QUERY = gql`\n  query REPO_QUERY {\n    # Let's use carbon as our organization\n    organization(login: \"carbon-design-system\") {\n      # We'll grab all the repositories in one go. To load more resources\n      # continuously, see the advanced topics.\n      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          url\n          homepageUrl\n          issues(filterBy: { states: OPEN }) {\n            totalCount\n          }\n          stargazers {\n            totalCount\n          }\n          releases(first: 1) {\n            totalCount\n            nodes {\n              name\n            }\n          }\n          name\n          updatedAt\n          createdAt\n          description\n          id\n        }\n      }\n    }\n  }\n`;\n")),Object(a.b)("p",null,"Next, we need to configure apollo in our component script, adding the following\nafter the data() declaration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"apollo: {\n  organization: REPO_QUERY\n},\n")),Object(a.b)("p",null,"At this point, we should run our query view the raw the results to verify that\nthe request is working."),Object(a.b)("p",null,"In RepoPage.vue add the following before the ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," tag."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"{{ this.organization }}\n")),Object(a.b)("p",null,"When the data loads you should see the response rendered on your repository\npage. If not, check the console to see if there are any errors and fix."),Object(a.b)("p",null,"Revert this last change and continue."),Object(a.b)("p",null,"This data is not quite in the format our ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," component is expecting so\nwe’ll use a computed property to transform it. Computed properties in Vue cache\nand watch their reactive dependencies for us."),Object(a.b)("p",null,"Remove the ‘rows’ constant and its use in the data declaration, and add this\ncomputed property."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"computed: {\n  rows() {\n      if (!this.organization) {\n      return [];\n    } else {\n      return this.organization.repositories.nodes.map(row => ({\n        ...row,\n        key: row.id,\n        stars: row.stargazers.totalCount,\n        issueCount: row.issues.totalCount,\n        createdAt: new Date(row.createdAt).toLocaleDateString(),\n        updatedAt: new Date(row.updatedAt).toLocaleDateString(),\n        links: { url: row.url, homepageUrl: row.homepageUrl }\n      }));\n    }\n  }\n}\n")),Object(a.b)("p",null,"At this point you have a working table but the links column clearly isn’t what\nwe want."),Object(a.b)("h3",null,"Helper component"),Object(a.b)("p",null,"This column in the data table will be a list of repository and home page links,\nso let’s create a component called ",Object(a.b)("inlineCode",{parentName:"p"},"LinkList"),"."),Object(a.b)("p",null,"Add the following to create your component:"),Object(a.b)("p",null,"A template section:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/LinkList.vue",path:"src/views/RepoPage/LinkList.vue"}),'<ul class="link-list">\n  <li>\n    <cv-link :href="url">GitHub</cv-link>\n  </li>\n\n  <li v-if="homepageUrl">\n    <span>&nbsp;|&nbsp;</span>\n    <cv-link :href="homepageUrl">Homepage</cv-link>\n  </li>\n</ul>\n')),Object(a.b)("p",null,"A script section:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/LinkList.vue",path:"src/views/RepoPage/LinkList.vue"}),"export default {\n  name: 'LinkList',\n  props: {\n    url: String,\n    homepageUrl: String,\n  },\n};\n")),Object(a.b)("p",null,"And a style section:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-scss",metastring:"path=src/views/RepoPage/LinkList.vue",path:"src/views/RepoPage/LinkList.vue"}),".link-list {\n  display: flex;\n}\n")),Object(a.b)("p",null,"Now let’s make use of this component in our ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," component."),Object(a.b)("p",null,"At the top of the script section import the link list component:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),"import LinkList from './LinkList';\n")),Object(a.b)("p",null,"And below the name of the component add:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),"  components: { LinkList },\n")),Object(a.b)("p",null,"Then make use of it in our template replacing:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),'<cv-data-table-cell\n  v-for="(cell, cellIndex) in row.data"\n  :key="`${cellIndex}`"\n  >{{cell}}</cv-data-table-cell>\n')),Object(a.b)("p",null,"with"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),'<cv-data-table-cell v-for="(cell, cellIndex) in row.data" :key="`${cellIndex}`">\n  <template v-if="!cell.url">\n    {{cell}}\n  </template>\n  <link-list v-else :url="cell.url" :homepage-url="cell.homepageUrl" />\n</cv-data-table-cell>\n')),Object(a.b)("p",null,"Here in order to switch between the standard rendering of a data cell we’ve\nwrapped our standard ",Object(a.b)("inlineCode",{parentName:"p"},"{{cell}}")," rendering in a template tag. The template tag is\nnon-rendering so it will dissapear, leaving us with the same content as before."),Object(a.b)("p",null,"Using the v-if and v-else directives we switch based on the contents of the cell\nbetween the standard rendering and the LinkList component."),Object(a.b)("p",null,"Checking our output again, you should now see the LinkList component rendering\nthe final column."),Object(a.b)("p",null,"Next we’ll update our row description. Update the computed property data() in\n",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable.vue")," to have the following description:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),"  description: row.description\n")),Object(a.b)("p",null,"Check the output again and you should find the descriptions are updated."),Object(a.b)("p",null,"After this many refreshes you may have noticed a slight delay in the data\nloading. As outlined in the\n",Object(a.b)("a",r({parentName:"p"},{href:"https://vue-apollo.netlify.com/guide/apollo/#apollo"}),"documentation"),", all\ncomponents contained under one with an apolloProvider have a ",Object(a.b)("inlineCode",{parentName:"p"},"$apollo"),"\nattribute. As we added the ",Object(a.b)("inlineCode",{parentName:"p"},"apolloProvider")," to our app when creating the Vue\ninstance it is available to us everywhere."),Object(a.b)("p",null,"We can use the property to react to\n",Object(a.b)("a",r({parentName:"p"},{href:"https://vue-apollo.netlify.com/guide/apollo/queries.html#loading-state"}),"loading state"),"."),Object(a.b)("p",null,"First let’s demonstrate that this works."),Object(a.b)("p",null,"Pass the loading state into our ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," component by updating the template\nwith the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),'<repo-table\n  :headers="headers"\n  :rows="rows"\n  title="Carbon Repositories"\n  helperText="A collection of public Carbon repositories."\n  :loading="$apollo.loading"\n/>\n')),Object(a.b)("p",null,"Next add this property to the ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," component:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),"  props: {\n    headers: Array,\n    rows: Array,\n    title: String,\n    helperText: String,\n    loading: Boolean,\n  },\n")),Object(a.b)("p",null,"Making use of the property to display a loading message."),Object(a.b)("p",null,"Replace:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),'<cv-data-table\n  :columns="columns"\n  :title="title"\n  :helper-text="helperText"\n></cv-data-table>\n')),Object(a.b)("p",null,"with:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),'<div v-if="loading">Loading...</div>\n<cv-data-table\n  v-else\n  :columns="columns"\n  :title="title"\n  :helper-text="helperText"\n></cv-data-table>\n')),Object(a.b)("p",null,"Here we have made use of the v-if and v-else directives to switch content based\non the state of ",Object(a.b)("inlineCode",{parentName:"p"},"$apollo.loading"),". If you refresh your app you should see this\ntake effect."),Object(a.b)("p",null,"Now that we know this is works let’s try something a bit more sophisticated and\nreplace the div containing our loading message with use of the\n",Object(a.b)("inlineCode",{parentName:"p"},"CvDataTableSkeleton")," component."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),'<cv-data-table-skeleton\n  v-if="loading"\n  :columns="columns"\n  :title="title"\n  :helper-text="helperText"\n  :rows="10"\n/>\n')),Object(a.b)("p",null,"We need to tell the loading skeleton how many rows to render, so let’s use 10\nskeleton rows to prepare for the next enhancement…"),Object(a.b)("h2",null,"Add pagination"),Object(a.b)("p",null,"Pagination! Instead of rendering every repository, let’s add pagination to the\ndata table to only render 10 at a time. Depending on your specific requirements,\nyou may need to fetch new data each time that you interact with the pagination\ncomponent, but for simplicity, we’re going to make one request to fetch all\ndata, and then paginate the in-memory row data."),Object(a.b)("p",null,"Let’s start by adjusting our ",Object(a.b)("inlineCode",{parentName:"p"},"PageTable")," component template to add pagination.\nIf you review the\n",Object(a.b)("a",r({parentName:"p"},{href:"http://vue.carbondesignsystem.com/?path=/info/components-cvdatatable--default"}),"storybook notes"),"\nyou’ll see that pagination is added to the data table by supplying a pagination\nobject and listening for pagination events as follows."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),'  <cv-data-table\n    v-else\n    :columns="columns"\n    :title="title"\n    :helper-text="helperText"\n    :pagination="{ numberOfItems: this.totalRows }"\n    @pagination="$emit(\'pagination\', $event)"\n>\n')),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," ",Object(a.b)("inlineCode",{parentName:"p"},":prop")," is an abbreviation of ",Object(a.b)("inlineCode",{parentName:"p"},"v-bind:prop"),". ",Object(a.b)("inlineCode",{parentName:"p"},"@event")," is an\nabbreviation of ",Object(a.b)("inlineCode",{parentName:"p"},"v-on:event"),".")),Object(a.b)("p",null,"In the pagination event we’ve used $emit and $event to re-raise the pagination\nevent to our ",Object(a.b)("inlineCode",{parentName:"p"},"RepoPage")," component so that it can arrange to pass only the rows\nwe want to see to the ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," component."),Object(a.b)("p",null,"We also need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"totalRows")," property used in the data tables pagination\nproperty."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoTable.vue",path:"src/views/RepoPage/RepoTable.vue"}),"totalRows: Number,\n")),Object(a.b)("p",null,"Next to our ",Object(a.b)("inlineCode",{parentName:"p"},"RepoPage")," component, let’s first update our template by updating\nour ",Object(a.b)("inlineCode",{parentName:"p"},"RepoTable")," use with the following attributes."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),':rows="pagedRows"\n:totalRows="rows.length"\n@pagination="onPagination"\n')),Object(a.b)("p",null,"replacing"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),':rows="rows"\n')),Object(a.b)("p",null,"Next in the data property of our component add values for ",Object(a.b)("inlineCode",{parentName:"p"},"pageSize"),",\n",Object(a.b)("inlineCode",{parentName:"p"},"pageStart")," and ",Object(a.b)("inlineCode",{parentName:"p"},"page")," into the data method return to support our pagination."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"  data() {\n    return {\n      headers,\n      pageSize: 0,\n      pageStart: 0,\n      page: 0\n    };\n  },\n")),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," We could have passed values for ",Object(a.b)("inlineCode",{parentName:"p"},"pageSize")," and ",Object(a.b)("inlineCode",{parentName:"p"},"page")," into our\npagination component if we had a specific page or page size we wanted to start\nwith. Instead we are relying on the pagination component to set some sensible\ndefaults and provide us with the details through an event.")),Object(a.b)("p",null,"Then before we can see our paginated table we need to add: a ",Object(a.b)("inlineCode",{parentName:"p"},"pagedRows"),"\ncomputed property to select the slice of input rows we are interested in, and a\nmethod to handle the pagination event."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript",metastring:"path=src/views/RepoPage/RepoPage.vue",path:"src/views/RepoPage/RepoPage.vue"}),"  computed: {\n    // other computed properties\n    // ...\n    pagedRows() {\n      return this.rows.slice(this.pageStart, this.pageStart + this.pageSize);\n    }\n  },\n  methods: {\n    onPagination(val) {\n      this.pageSize = val.length;\n      this.pageStart = val.start;\n      this.page = val.page;\n    }\n  }\n")),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Like the other Carbon Vue components, ",Object(a.b)("inlineCode",{parentName:"p"},"Pagination")," component examples\ncan be found in\n",Object(a.b)("a",r({parentName:"p"},{href:"http://vue.carbondesignsystem.com/?path=/story/components-cvpagination--default"}),"Storybook"),"\nby browsing the story and knobs.")),Object(a.b)("p",null,"That does it! Your data table should fetch GitHub data on first render. You can\nexpand each row to see the repository’s description. You can modify the\npagination items per page and cycle through pages or jump to a specific page of\nrepositories."),Object(a.b)("h2",null,"Mystery"),Object(a.b)("p",null,"Hmmm, there is at least one more issue to resolve. If you expand a row or two to\nsee the repository descriptions you will and then change page. What happens?"),Object(a.b)("p",null,"Assuming you didn’t catch this earlier you will find that the expanded rows,\nstay expanded after paging. That is if row two was expanded before pagination it\nis expanded after."),Object(a.b)("p",null,"This is because we chose poor values to use as our row and cell keys as we\niterated over them. The result is that Vue sees these items as having the same\nkey and makes the assumption that content but not state has changed."),Object(a.b)("p",null,"To fix this add the following to the RepoPage component you should be able to\nfind something better."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"  watch: {\n    rows() {\n      if (this.organization) {\n        console.dir(this.organization.repositories.nodes);\n      }\n    }\n  },\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Hint: ",Object(a.b)("inlineCode",{parentName:"em"},"id")," and ",Object(a.b)("inlineCode",{parentName:"em"},"url")," are likely unique properties, you could use either of\nthese to update the prototype. In fact we already pass the id value to\nRepoTable.")),Object(a.b)("p",null,"Can you fix it?"),Object(a.b)("h2",null,"Submit pull request"),Object(a.b)("p",null,"We’re going to submit a pull request to verify completion of this tutorial step."),Object(a.b)("h3",null,"Continuous integration (CI) check"),Object(a.b)("p",null,"Run the CI check to make sure we’re all set to submit a pull request."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn ci-check\n")),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Having issues running the CI check?\n",Object(a.b)("a",r({parentName:"p"},{href:"/tutorial/vue/step-1#continuous-integration-ci-check"}),"Step 1")," has\ntroubleshooting notes that may help.")),Object(a.b)("h3",null,"Git commit and push"),Object(a.b)("p",null,"Before we can create a pull request, stage and commit all of your changes:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),'git add --all && git commit -m "feat(tutorial): complete step 3"\n')),Object(a.b)("p",null,"Then, push to your repository:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git push origin vue-step-3\n")),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",Object(a.b)("a",r({parentName:"p"},{href:"/tutorial/vue/step-1#git-commit-and-push"}),"Step 1")," has troubleshooting notes\nthat may help.")),Object(a.b)("h3",null,"Pull request (PR)"),Object(a.b)("p",null,"Finally, visit\n",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial-vue"}),"carbon-tutorial-vue"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",Object(a.b)("inlineCode",{parentName:"p"},"vue-step-3")," into ",Object(a.b)("inlineCode",{parentName:"p"},"base: vue-step-3"),"."),Object(a.b)(h,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Expect your tutorial step PRs to be reviewed by the Carbon team but\nnot merged. We’ll close your PR so we can keep the repository’s remote branches\npristine and ready for the next person!")))}g.isMDXComponent=!0}}]);