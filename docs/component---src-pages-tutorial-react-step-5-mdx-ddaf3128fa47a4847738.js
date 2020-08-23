(window.webpackJsonp=window.webpackJsonp||[]).push([[2087],{SXTm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return f}));n("3bBZ"),n("q1tI");var o=n("7ljp"),a=n("013z"),i=n("V8m9");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)},p=l("PageDescription"),b=l("AnchorLinks"),u=l("AnchorLink"),d=l("InlineNotification"),m={_frontmatter:r},h=a.a;function f(e){let{components:t}=e,n=s(e,["components"]);return Object(o.b)(h,c({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"This step takes what we’ve built so far and optimizes the app for a production\nenvironment. We’ll be deploying the production build to IBM Cloud.")),Object(o.b)(b,{mdxType:"AnchorLinks"},Object(o.b)(u,{mdxType:"AnchorLink"},"Fork, clone and branch"),Object(o.b)(u,{mdxType:"AnchorLink"},"Create IBM Cloud account"),Object(o.b)(u,{mdxType:"AnchorLink"},"Optimize Sass"),Object(o.b)(u,{mdxType:"AnchorLink"},"Build for production"),Object(o.b)(u,{mdxType:"AnchorLink"},"Create manifest file"),Object(o.b)(u,{mdxType:"AnchorLink"},"Create static file"),Object(o.b)(u,{mdxType:"AnchorLink"},"Deploy app"),Object(o.b)(u,{mdxType:"AnchorLink"},"Submit pull request")),Object(o.b)("h2",null,"Preview"),Object(o.b)("p",null,"A ",Object(o.b)("a",c({parentName:"p"},{href:"https://react-step-6--carbon-tutorial.netlify.com"}),"preview")," of what you’ll\nbuild (visually no different, but built for production):"),Object(o.b)(i.a,{height:"400",title:"Carbon Tutorial Step 5",src:"https://react-step-6--carbon-tutorial.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),Object(o.b)("h2",null,"Fork, clone and branch"),Object(o.b)("p",null,"This tutorial has an accompanying GitHub repository called\n",Object(o.b)("a",c({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial"}),"carbon-tutorial")," that\nwe’ll use as a starting point for each step. If you haven’t forked and cloned\nthat repository yet, and haven’t added the upstream remote, go ahead and do so\nby following the\n",Object(o.b)("a",c({parentName:"p"},{href:"/tutorial/react/step-1#fork-clone--branch"}),"step 1 instructions"),"."),Object(o.b)("h3",null,"Branch"),Object(o.b)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"git fetch upstream\ngit checkout -b react-step-5 upstream/react-step-5\n")),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," This builds on top of step 4, but be sure to check out the upstream\nstep 5 branch because it includes the static assets required to get through this\nstep.")),Object(o.b)("h3",null,"Build and start app"),Object(o.b)("p",null,"Install the app’s dependencies (in case you’re starting fresh in your current\ndirectory and not continuing from the previous step):"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Then, start the app:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),Object(o.b)("p",null,"You should see something similar to where the\n",Object(o.b)("a",c({parentName:"p"},{href:"/tutorial/react/step-4"}),"previous step")," left off."),Object(o.b)("h2",null,"Create IBM Cloud account"),Object(o.b)("p",null,"Before we get started,\n",Object(o.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/registration"}),"create an IBM Cloud account")," if you don’t\nalready have one, as we’ll be deploying there in a bit."),Object(o.b)("h2",null,"Optimize Sass"),Object(o.b)("p",null,"So far we’ve been developing in a, well, development environment where static\nasset optimization hasn’t been a priority. If you reference ",Object(o.b)("inlineCode",{parentName:"p"},"/src/index.scss"),",\nyou’ll see one ",Object(o.b)("inlineCode",{parentName:"p"},"@import")," that is pulling in Carbon’s full Sass build."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-scss",metastring:"path=src/index.scss",path:"src/index.scss"}),"$feature-flags: (\n  ui-shell: true,\n  grid-columns-16: true,\n);\n\n@import 'carbon-components/scss/globals/scss/styles.scss';\n")),Object(o.b)("p",null,"To give you an idea of what’s all included, open up\n",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/carbon-components/scss/globals/scss/styles.scss"),". You’ll see\nimports for components like accordion, slider, tooltip, etc. Since we aren’t\nusing those components, let’s exclude them from our built stylesheets. Keeping\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"$feature-flags")," Sass map, replace the ",Object(o.b)("inlineCode",{parentName:"p"},"styles.scss")," import with:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-scss",metastring:"path=src/index.scss",path:"src/index.scss"}),"// Feature flags\n$css--font-face: true;\n$css--plex: true;\n\n// Global styles\n@import 'carbon-components/scss/globals/scss/css--font-face';\n@import 'carbon-components/scss/globals/grid/grid';\n\n// Carbon components\n@import 'carbon-components/scss/components/breadcrumb/breadcrumb';\n@import 'carbon-components/scss/components/button/button';\n@import 'carbon-components/scss/components/data-table/data-table';\n@import 'carbon-components/scss/components/link/link';\n@import 'carbon-components/scss/components/pagination/pagination';\n@import 'carbon-components/scss/components/tabs/tabs';\n@import 'carbon-components/scss/components/ui-shell/ui-shell';\n")),Object(o.b)("p",null,"In comparing to the included ",Object(o.b)("inlineCode",{parentName:"p"},"carbon-components/scss/globals/scss/styles.scss"),",\nyou may be asking what happened to importing ",Object(o.b)("inlineCode",{parentName:"p"},"_vars.scss"),", ",Object(o.b)("inlineCode",{parentName:"p"},"_colors.scss"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"_theme.scss"),", etc.?"),Object(o.b)("p",null,"Many of those global Sass partials get imported through the components. For\nexample, open\n",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/carbon-components/scss/components/button/_button.scss")," to see its\ndependencies. No harm in importing them as\n",Object(o.b)("inlineCode",{parentName:"p"},"carbon-components/scss/globals/scss/styles.scss")," does, but for simplicity here,\nwe’ll let the components pull them in."),Object(o.b)("p",null,"You can read more about optimizing Carbon’s Sass in the\n",Object(o.b)("a",c({parentName:"p"},{href:"https://medium.com/carbondesign/minimal-css-with-carbon-b0c089ccfa71"}),"Carbon Design System publication"),"\non Medium."),Object(o.b)("h2",null,"Build for production"),Object(o.b)("p",null,"Before we deploy our app, we need to create an optimized production build with\nthis command. You may need to ",Object(o.b)("inlineCode",{parentName:"p"},"CTRL-C")," to stop the development environment\nfirst."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn build\n")),Object(o.b)("p",null,"Looking at ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", you’ll find ",Object(o.b)("inlineCode",{parentName:"p"},"yarn build")," to run\n",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts build"),". This builds the app for production to the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," folder.\nIt bundles React in production mode and optimizes the build for the best\nperformance. It even goes so far to minify files and include hashes in filenames\nfor caching."),Object(o.b)("p",null,"As a lot of this may seem like magic since the build configuration came from\nCreate React App, go ahead and check out their\n",Object(o.b)("a",c({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/production-build"}),"production build guidelines"),"\nfor a full description of what’s happening."),Object(o.b)("h2",null,"Create manifest file"),Object(o.b)("p",null,"Now that we have a production build, let’s get it on the cloud. We’re going to\nuse\n",Object(o.b)("a",c({parentName:"p"},{href:"https://github.com/cloudfoundry/staticfile-buildpack.git"}),"staticfile-buildpack"),"\nto deploy our webapp. Since this is a Cloud Foundry buildpack, we’ll be using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"cf")," command line interface (CLI). If running ",Object(o.b)("inlineCode",{parentName:"p"},"cf --help")," doesn’t work for\nyou, chances are you need to\n",Object(o.b)("a",c({parentName:"p"},{href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"}),"install the CLI"),"."),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If unfamiliar with buildpacks, the\n",Object(o.b)("a",c({parentName:"p"},{href:"https://docs.cloudfoundry.org/buildpacks/staticfile/index.html"}),"staticfile buildpack docs"),"\nhas good definitions and configuration documentation.")),Object(o.b)("p",null,"With the Cloud Foundry CLI installed, next, we need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.yml"),"\nfile in the root of the project. To prevent multiple apps trying to use the\n",Object(o.b)("inlineCode",{parentName:"p"},"carbon-tutorial")," name, replace ",Object(o.b)("inlineCode",{parentName:"p"},"USERNAME")," with your GitHub username below to\nmake sure our apps are uniquely named."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash",metastring:"path=manifest.yml",path:"manifest.yml"}),"---\napplications:\n  - name: carbon-tutorial-USERNAME\n    memory: 64M\n    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git\n")),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," With this set-up we’re still using a GitHub personal access token\nsaved in ",Object(o.b)("inlineCode",{parentName:"p"},".env.local"),". If you haven’t created a GitHub access token yet, see\n",Object(o.b)("a",c({parentName:"p"},{href:"/tutorial/react/step-3#create-access-token"}),"step 3"),". You can put the\nenvironment variable in the manifest file, or manually add it in the IBM Cloud\ndashboard, but since we’re building off previous tutorial steps nothing more is\nneeded.")),Object(o.b)("h2",null,"Create static file"),Object(o.b)("p",null,"Create a new static file in the root of the project named ",Object(o.b)("inlineCode",{parentName:"p"},"Staticfile"),". This\ntells the app to deploy from the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," folder and not the root of the project."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash",metastring:"path=Staticfile",path:"Staticfile"}),"root: build\n")),Object(o.b)("h3",null,"Cloud Foundry ignore"),Object(o.b)("p",null,"After telling Cloud Foundry what to include, we can also specify what to ignore.\nCreate a top-level ",Object(o.b)("inlineCode",{parentName:"p"},".cfignore")," file. Cloud Foundry doesn’t let you push\nread-only files (specifically, files with permissions <",Object(o.b)("inlineCode",{parentName:"p"},"400"),"), so to prevent\nissues with the deploy, add:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash",metastring:"path=.cfignore",path:".cfignore"}),"node_modules/.cache\n")),Object(o.b)("p",null,"You can speed up deploys by decreasing the files uploaded through cloud foundry.\nTo accomplish this, ignore any folder not required by the production application\non IBM Cloud."),Object(o.b)("p",null,"In our case we can ignore everything except the ",Object(o.b)("inlineCode",{parentName:"p"},"build/")," directory and\n",Object(o.b)("inlineCode",{parentName:"p"},"Staticfile"),". To speed up our deploys change ",Object(o.b)("inlineCode",{parentName:"p"},".cfignore")," to:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash",metastring:"path=.cfignore",path:".cfignore"}),"*\n\n!Staticfile\n!build\n")),Object(o.b)("h2",null,"Deploy app"),Object(o.b)("p",null,"Login to IBM Cloud with:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"cf login -a https://api.us-south.cf.cloud.ibm.com --sso\n")),Object(o.b)("p",null,"Deploy app using the ",Object(o.b)("inlineCode",{parentName:"p"},"cf push")," command. Since ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.yml")," is in our root\ndirectory, we don’t need to specify it in the push command. But, if you have\nmultiple manifest files that target different environments, it’s good practice\nto specify the file."),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," This step assumes your spaces are in the US South region. To\nsuccessfully deploy, you might need to update the region code (e.g.\n",Object(o.b)("inlineCode",{parentName:"p"},"api.[REGION].cf.cloud.ibm.com"),") to the region where your spaces were created,\nor create a space in the US South region.\n",Object(o.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-whatsnew&origin_team=T02M79KSB#new-cloud-foundry-api-endpoints"}),"Learn more."))),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"cf push -f manifest.yml\n")),Object(o.b)("p",null,"To make it easy on ourselves by not needing to remember that command, let’s add\na script in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". We can combine the build and deploy steps to make\nsure we only deploy immediately after running the build. In the ",Object(o.b)("inlineCode",{parentName:"p"},'"scripts"'),"\nobject in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", add:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash",metastring:"path=package.json",path:"package.json"}),'"deploy": "rm -rf ./build && yarn build && cf push -f manifest.yml"\n')),Object(o.b)("p",null,"Next time you want to deploy, you can simply run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn deploy"),"."),Object(o.b)("h2",null,"Submit pull request"),Object(o.b)("p",null,"That does it! We’re going to submit a pull request to verify completion of this\ntutorial step. In doing so, ",Object(o.b)("strong",{parentName:"p"},"please include the mybluemix.net URL for your\ndeployed app in your pull request description"),"."),Object(o.b)("h3",null,"Continuous integration (CI) check"),Object(o.b)("p",null,"Run the CI check to make sure we’re all set to submit a pull request."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn ci-check\n")),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Having issues running the CI check?\n",Object(o.b)("a",c({parentName:"p"},{href:"/tutorial/react/step-1#continuous-integration-(ci)-check"}),"Step 1")," has\ntroubleshooting notes that may help.")),Object(o.b)("h3",null,"Git commit and push"),Object(o.b)("p",null,"Before we can create a pull request, stage and commit all of your changes:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),'git add --all && git commit -m "feat(tutorial): complete step 5"\n')),Object(o.b)("p",null,"Then, push to your repository:"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-bash"}),"git push origin react-step-5\n")),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",Object(o.b)("a",c({parentName:"p"},{href:"/tutorial/react/step-1#git-commit-and-push"}),"Step 1")," has troubleshooting notes\nthat may help.")),Object(o.b)("h3",null,"Pull request (PR)"),Object(o.b)("p",null,"Finally, visit\n",Object(o.b)("a",c({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial"}),"carbon-tutorial")," to\n“Compare & pull request”. In doing so, make sure that you are comparing to\n",Object(o.b)("inlineCode",{parentName:"p"},"react-step-5")," into ",Object(o.b)("inlineCode",{parentName:"p"},"base: react-step-5"),"."),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Expect your tutorial step PRs to be reviewed by the Carbon team but\nnot merged. We’ll close your PR so we can keep the repository’s remote branches\npristine and ready for the next person!")))}f.isMDXComponent=!0}}]);